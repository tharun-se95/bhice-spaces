// @jsx runtime
"use client";

import React, { useState } from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`px-6 py-2 h-24 flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start rounded shadow bg-white cursor-pointer md:rounded-none md:shadow-none md:bg-background hover:md:shadow hover:md:bg-white`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-6 rounded-full flex items-center justify-center text-lightYellow">
        {icon}
      </div>
      <div>
        <div
          className={`text-md text-textMain font-medium transition-transform duration-300 ${
            isHovered ? "scale-105" : "opacity-100"
          }`}
        >
          {title}
        </div>
        {/* {isHovered && (
          <p className="hidden md:block text-sm text-grey-500">{description}</p>
        )} */}
      </div>
    </div>
  );
}

export default FeatureCard;
