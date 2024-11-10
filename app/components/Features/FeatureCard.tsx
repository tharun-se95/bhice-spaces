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
      className={`p-4 flex gap-5 items-center justify-start rounded-lg shadow-md bg-white cursor-pointer md:rounded-none md:shadow-none md:bg-background hover:md:shadow-md hover:md:bg-white hover:md:rounded-lg`}
      style={{ minHeight: "100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-10 h-10 rounded-full flex items-center justify-center text-lightYellow">
        {icon}
      </div>
      <div>
        <div
          className={`text-lg text-textMain font-semibold transition-opacity duration-3000 ${
            isHovered ? "opacity-100" : "opacity-80"
          }`}
        >
          {title}
        </div>
        {isHovered && (
          <p className="hidden md:block text-sm text-grey-500">{description}</p>
        )}
      </div>
    </div>
  );
}

export default FeatureCard;
