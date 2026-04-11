"use client";

import { createContext, useContext, useState } from "react";

// Create Context
const SidebarContext = createContext();

// Provider Component
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar,setIsSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom Hook to use the Sidebar Context
export const useSidebar = () => {
  return useContext(SidebarContext);
};
