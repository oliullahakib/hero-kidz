"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiBox, FiShoppingCart, FiUsers, FiLogOut } from "react-icons/fi";
import { useSidebar } from "@/providers/SidebarContext";

const Sidebar = () => {
  const pathname = usePathname();
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  const navLinks = [
    { name: "Dashboard", href: "/dashboard", icon: FiHome },
    { name: "Products", href: "/dashboard/products", icon: FiBox },
    { name: "Orders", href: "/dashboard/orders", icon: FiShoppingCart },
    { name: "Users", href: "/dashboard/users", icon: FiUsers },
  ];

  return (
    <aside 
      onMouseEnter={() => setIsSidebarOpen(true)} 
      onMouseLeave={() => setIsSidebarOpen(false)} 
      className={`bg-base-100 h-screen shadow-md flex flex-col transition-all ease-in-out duration-300 z-50 fixed lg:relative top-0 left-0 whitespace-nowrap overflow-hidden border-base-200 ${isSidebarOpen ? "w-screen lg:w-64 border-r" : "w-0 border-r-0 lg:border-r lg:w-20"}`}
    >
      <div className={`p-6 border-b border-base-200 flex items-center ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
        <Link href="/" className="text-2xl font-bold text-primary flex items-center h-8 overflow-hidden">
             <span className="text-secondary shrink-0">H</span>
             <span className={`text-primary shrink-0 transition-all duration-300 ${isSidebarOpen ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}>K</span>
             <span className={`origin-left transition-all duration-300 whitespace-nowrap overflow-hidden ${isSidebarOpen ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}>
                 <span className="text-secondary">ero</span>Kidz
             </span>
        </Link>
        {/* Mobile Close Button since drawer is 100vw */}
        <button onClick={()=>setIsSidebarOpen(false)}  className="btn btn-ghost btn-circle btn-sm lg:hidden">
            ✕
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${isActive
                  ? "bg-primary text-primary-content font-medium"
                  : "text-neutral hover:bg-base-200 hover:text-primary"
                }`}
            >
              <Icon className="text-xl shrink-0" />
              <span className={`origin-left transition-all duration-300 whitespace-nowrap ml-3 ${isSidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'}`}>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer / User Actions */}
      <div className="p-4 border-t border-base-200">
        <button className={`flex items-center px-4 py-3 w-full text-neutral rounded-lg hover:bg-error hover:text-error-content transition-colors duration-200`}>
          <FiLogOut className="text-xl shrink-0" />
          <span className={`origin-left transition-all duration-300 whitespace-nowrap ml-3 ${isSidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'}`}>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
