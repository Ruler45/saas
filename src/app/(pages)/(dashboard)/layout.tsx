import React from "react";
// import { UserButton } from "@clerk/nextjs";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] md:w-72 bg-gray-900 ">
        <Sidebar />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
