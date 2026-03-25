// If a service function is generic/utility/common, you can declare it in a separate service. (see crypt service or jwt service 
// for ref) Try to only keep relevant models and their operations inside a service file. In this case, tasks are part of projects
// hence they are included. In general cases however, one model per service may suffice. Cleaner code today, cleaner PRs tomorrow.

// If a service function goes over 50 lines, or has a large pipeline, please use minimal explantory comments.
//  (dont fill your code with comments though.)

const Project = require("../config/models/projectModel");
const Task = require("../config/models/taskModel");
const { populateCommentAuthors } = require("../services/commentService")

const ProjectService = {
    async createProject(projectData, session) {
        const lastProj = await Project.findOne()
            .sort({ createdAt: -1 })
            .select("PID")
            .session(session);

        let nextPID = "P001";

        if (lastProj && lastProj.PID) {
            const lastNumber = parseInt(lastProj.PID.replace("P", ""), 10);
            nextPID = `P${String(lastNumber + 1).padStart(3, "0")}`;
        }
        const project = new Project({ ...projectData, PID: nextPID });
        await project.save({ session });
        return project;
    },

    async addComment(body, user, session) {
        let comment = {
            author: user._id,
            content: body.content,
            authorType: 'User'
        };
        const project = await Project.findByIdAndUpdate(
            body.id,
            { $push: { comments: comment } },
            { new: true, session }
        )
            .populate("assignedUsers", "username email avatar")
            .populate("client", "userName email");

        if (project && project.comments) {
            project.comments = await populateCommentAuthors(project.comments);
        }

        return project;
    },


    async updateProject(projectId, updateData, session) {
        const existingProject = await Project.findById(projectId).session(session);

        if (!existingProject) {
            throw new Error("Project not found");
        }

        const originalClientId = existingProject.client?.toString();
        const updatedClientId = updateData.client?.toString();

        const project = await Project.findByIdAndUpdate(projectId, updateData, {
            new: true,
            session,
        }).populate("assignedUsers", "username email avatar")
            .populate("client", "userName email");

        if (project && project.comments) {
            project.comments = await populateCommentAuthors(project.comments);
        }

        if (
            originalClientId &&
            updatedClientId &&
            originalClientId !== updatedClientId
        ) {
            return { project, oldClient: originalClientId };
        }

        return { project };
    },

    async getProjectById(projectId) {
        const project = await Project.findById(projectId)
            .populate("assignedUsers", "username email avatar")
            .populate("client", "userName email");

        if (project && project.comments) {
            project.comments = await populateCommentAuthors(project.comments);
        }

        return project;
    },

    async getAllProjects(page = 1, limit = 20, reqBody = {}, user) {

        const skip = (page - 1) * limit;
        const matchStage = {};
        const filters = reqBody.filters || {};

        const isAdmin = user.role.name?.toLowerCase() === "admin";

        if (filters.search) {
            matchStage.$or = [
                { PID: { $regex: filters.search, $options: "i" } },
                { name: { $regex: filters.search, $options: "i" } },
            ];
        }
        if (!isAdmin) {
            matchStage.assignedUsers = { $in: [user._id] };
        }
        if (filters.status) {
            matchStage.status = filters.status;
        }

        const aggregationPipeline = [
            { $match: matchStage },

            // users
            {
                $lookup: {
                    from: "users",
                    localField: "assignedUsers",
                    foreignField: "_id",
                    as: "assignedUsers",
                },
            },
            {
                $addFields: {
                    assignedUsers: {
                        $map: {
                            input: "$assignedUsers",
                            as: "user",
                            in: {
                                _id: "$$user._id",
                                username: "$$user.username",
                                email: "$$user.email",
                                avatar: "$$user.avatar",
                            },
                        },
                    },
                },
            },

            // client
            {
                $lookup: {
                    from: "clients",
                    localField: "client",
                    foreignField: "_id",
                    as: "client",
                },
            },
            { $unwind: { path: "$client", preserveNullAndEmptyArrays: true } },

            // match username
            ...(filters.username
                ? [
                    {
                        $match: {
                            "assignedUsers.username": {
                                $regex: filters.username,
                                $options: "i",
                            },
                        },
                    },
                ]
                : []),

            // match client name or CID
            ...(filters.clientSearch
                ? [
                    {
                        $match: {
                            $or: [
                                {
                                    "client.userName": {
                                        $regex: filters.clientSearch,
                                        $options: "i",
                                    },
                                },
                                {
                                    "client.CID": {
                                        $regex: filters.clientSearch,
                                        $options: "i",
                                    },
                                },
                            ],
                        },
                    },
                ]
                : []),

            { $sort: { createdAt: -1 } },
            { $skip: skip },
            { $limit: limit },
        ];

        const projects = await Project.aggregate(aggregationPipeline);

        const projectsWithProgress = await Promise.all(
            projects.map(async (project) => {
                const totalTasks = await Task.countDocuments({ project: project._id });
                const completedTasks = await Task.countDocuments({
                    project: project._id,
                    status: "COMPLETED",
                });

                return {
                    ...project,
                    tasks: { total: totalTasks, completed: completedTasks },
                };
            })
        );

        // Total count
        const total = await Project.countDocuments(matchStage);

        return {
            projects: projectsWithProgress,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
        };
    }
};

module.exports = ProjectService;
