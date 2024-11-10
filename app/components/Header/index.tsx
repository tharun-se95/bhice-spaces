// app/components/Header/Header.tsx
import React from "react";
import Image from "next/image";
import logo from "@/public/assets/images/logo.png"; // Replace with the actual path to your logo file
import phoneIcon from "@/public/assets/images/call.svg"; // Replace with the actual path to your phone icon

export default function Header() {
  return (
    <header className="w-full h-[90px] border-b-[1px] border-solid border-primary2 flex items-center justify-between px-6 sm:px-8 md:px-32 bg-white">
      <div className="logo">
        <Image src={logo} alt="BHive Workspace Logo" width={100} height={32} />
      </div>
      <div
        className="p-1 rounded-md border-[1px] border-solid border-primary2 contact-icon"
        style={{ boxShadow: "4px 4px 14px 0px rgba(0, 0, 0, 0.06)" }}
      >
        <Image src={phoneIcon} alt="Phone Icon" width={36} height={36} />
      </div>
    </header>
  );
}
