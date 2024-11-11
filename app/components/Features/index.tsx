"use client";

import React from "react";
import FeatureCard from "./FeatureCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

function WhyChooseUs() {
  const features = useSelector((state: RootState) => state.data.features);
  return (
    <section className="bg-background text-textMain my-16">
      <h2 className="font-bold text-center lg:text-start mb-10 mx-6 lg:mx-12">
        Why Choose Us?
      </h2>
      <div className="hidden flex justify-center lg:grid grid-cols-4 gap-0 mx-6 lg:mx-12">
        {features.map((feature, index) => {
          const isLeftEdge = index % 4 === 0;
          const isRightEdge = (index + 1) % 4 === 0;
          const isLastRow = index >= features.length - 4;

          return (
            <div
              key={index}
              className={`border-gray5 ${isLeftEdge ? "" : "border-l"} ${
                isRightEdge ? "" : "border-r"
              } ${isLastRow ? "" : "border-b"} `}
            >
              <FeatureCard {...feature} />
            </div>
          );
        })}
      </div>
      <div className="lg:hidden flex justify-center grid grid-cols-2  md:gap-0 gap-2 mx-6 lg:mx-12">
        {features.map((feature, index) => {
          const isLeftEdge = index % 2 === 0;
          const isRightEdge = (index + 1) % 2 === 0;
          const isLastRow = index >= features.length - 2;

          return (
            <div
              key={index}
              className={`md:border-gray5 ${isLeftEdge ? "" : "md:border-l"} ${
                isRightEdge ? "" : "md:border-r"
              } ${isLastRow ? "" : "md:border-b"} `}
            >
              <FeatureCard {...feature} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyChooseUs;
