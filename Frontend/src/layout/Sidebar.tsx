import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiChartPie } from "react-icons/hi";


const NavSideBar = ({ isSidebarOpen }: any) => {

    return (
        <Sidebar aria-label="Sidebar" className={`${isSidebarOpen ? "" : "hidden"} h-[calc(100vh-4rem)] overflow-hidden w-screen sm:w-[18rem] sm:overflow-auto`}>
            <Sidebar.Items className="text-xl">
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/" icon={HiChartPie}>
                        Dashboard
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={BiBuoy}>
                        Help
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};

export default NavSideBar;
