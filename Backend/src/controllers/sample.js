// This is how our controllers will be structured. Keep in mind that if your axiosRequest interceptor is being used in the frontend,
// the structure you receieve after the api call may be slightly altered.
// We use sessions in the controllers, and call respective functions from their services (see update project sample) to maintain
// cleaner segregated service files.

const { default: mongoose } = require("mongoose");
const ProjectService = require('../services/projectService')
const ClientService = require("../services/clientService");

const ProjectController = {
    async createProject(req, res) {
        const session = await mongoose.startSession();
        try {
            session.startTransaction();
            const project = await ProjectService.createProject(req.body, session);
            const client = await ClientService.addProjectToClient(project.client, project._id, session);
            await session.commitTransaction();
            return res.status(201).json({ status: true, data: project, err: {} });
        } catch (error) {
            await session.abortTransaction();
            return res.status(500).json({ status: false, data: {}, err: error.message });
        } finally {
            session.endSession();
        }
    },
    async addComment(req, res) {
        const session = await mongoose.startSession();
        try {
            session.startTransaction();
            const project = await ProjectService.addComment(req.body, req.user, session);
            await session.commitTransaction();
            return res.status(201).json({ status: true, data: project, err: {} });
        } catch (error) {
            await session.abortTransaction();
            return res.status(500).json({ status: false, data: {}, err: error.message });
        } finally {
            session.endSession();
        }
    },

    async updateProject(req, res) {
        const session = await mongoose.startSession();
        try {
            session.startTransaction();
            const { project, oldClient } = await ProjectService.updateProject(
                req.params.id,
                req.body,
                session
            );
            if (!project) {
                return res.status(404).json({ status: false, data: {}, err: "Project not found" });
            }
            if (oldClient) {
                await ClientService.removeProjectFromClient(oldClient, project._id, session)
                await ClientService.addProjectToClient(project.client, project._id, session)
            }

            await session.commitTransaction();
            return res.status(200).json({ status: true, data: project, err: {} });
        } catch (error) {
            await session.abortTransaction();
            return res.status(500).json({ status: false, data: {}, err: error.message });
        } finally {
            session.endSession();
        }
    },

    async getProjectById(req, res) {
        try {
            const project = await ProjectService.getProjectById(req.params.id);
            if (!project) {
                return res.status(404).json({ status: false, data: {}, err: "Project not found" });
            }
            return res.status(200).json({ status: true, data: project, err: {} });
        } catch (error) {
            return res.status(500).json({ status: false, data: {}, err: error.message });
        }
    },

    async getAllProjects(req, res) {
        try {
            const { page, limit, ...filters } = req.body;
            const result = await ProjectService.getAllProjects(
                parseInt(page) || 1,
                parseInt(limit) || 20,
                filters,req.user
            );
            return res.status(200).json({ status: true, data: result, err: {} });
        } catch (error) {
            return res.status(500).json({ status: false, data: {}, err: error.message });
        }
    }
};

module.exports = ProjectController