"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobile-sidebar";
const Navbar = () => {
  return (
    <div className="flex items-center md:p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
