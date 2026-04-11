import { Poppins } from "next/font/google";
import "@/app/globals.css";
import Provider from "@/providers/Provider";
import Sidebar from "@/components/Dashboard/Sidebar";
import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";

// We re-import the font here to ensure the layout has access to it
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Admin Dashboard | Hero Kidz",
  description: "Admin area for managing Hero Kidz",
};

import { SidebarProvider } from "@/providers/SidebarContext";

export default function DashboardLayout({ children }) {
  return (
    <Provider>
      <SidebarProvider>
         <div className={`flex h-screen bg-base-200/50 overflow-hidden ${poppins.variable} antialiased font-sans`}>
          
          <Sidebar />

          {/* Main Content Layout */}
          <div className="flex-1 flex flex-col h-screen overflow-hidden">
             {/* Dashboard Header */}
             <DashboardNavbar />
             
             {/* Main Scrollable Content */}
             <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
               <div className="max-w-7xl mx-auto">
                 {children}
               </div>
             </main>
          </div>
          
        </div>
      </SidebarProvider>
    </Provider>
  );
}
