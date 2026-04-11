"use client";

import { FiMenu, FiBell } from "react-icons/fi";
import { useSidebar } from "@/providers/SidebarContext";

const DashboardNavbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="navbar bg-base-100 shadow-sm border-b border-base-200 px-4 sticky top-0 z-50">
      {/* Mobile Menu Toggle (Drawer) & Desktop Menu Toggle (Sidebar Width) */}
      <div className="flex-none ">
        {/* Visible on Desktop to toggle sidebar width */}
        <button className="btn btn-square btn-ghost flex lg:hidden" onClick={toggleSidebar}>
          <FiMenu className="text-2xl" />
        </button>
      </div>
      
      {/* Spacer to push user actions to the right */}
      <div className="flex-1"></div>
      
      {/* User Actions (Right Side) */}
      <div className="flex-none gap-2">
        {/* Notifications */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
             <FiBell className="text-xl" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        
        {/* User Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-base-300 p-[2px]">
            <div className="w-9 rounded-full">
              <img
                alt="Admin Profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-lg border border-base-200"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <div className="divider my-0"></div>
            <li><a className="text-error">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
