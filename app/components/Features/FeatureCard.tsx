// @jsx runtime
"use client";

import React, { useState } from "react";

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
}

function FeatureCard({ icon, title }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`px-6 py-2 h-24 flex flex-col md:flex-row gap-2 items-center justify-center md:justify-start rounded shadow bg-white cursor-pointer md:rounded-none md:shadow-none md:bg-background hover:md:shadow hover:md:bg-white`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-10 rounded-full flex items-center justify-center text-lightYellow">
        {icon}
      </div>
      <div>
        <div
          className={`text-md text-textMain text-center font-medium transition-transform duration-300 ${
            isHovered ? "scale-105" : "opacity-100"
          }`}
        >
          {title}
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
