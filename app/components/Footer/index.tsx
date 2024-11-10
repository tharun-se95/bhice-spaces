// app/components/Header/Header.tsx
import React from "react";
import Image from "next/image";
import logo from "@/public/assets/images/logo.png"; // Replace with the actual path to your logo file
import phoneIcon from "@/public/assets/images/call.svg"; // Replace with the actual path to your phone icon

export default function Header() {
  return (
    <footer className="w-full h-[44px] border-b-[1px] border-solid border-lightYellow flex items-center justify-center px-6 sm:px-8 md:px-32 bg-textMain text-white">
      © Copyright 2024. Bhive Private Limited
    </footer>
  );
}
