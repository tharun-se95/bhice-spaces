// app/components/Header/Header.tsx
import React from "react";
import Image from "next/image";
import herobg from "@/public/assets/images/herobg.png";
import coworking from "@/public/assets/images/Coworking video 1.svg";
import vector7 from "@/public/assets/images/Vector 7.svg";

export default function Header() {
  return (
    <section className="md:flex w-full h-full md:overflow-hidden relative">
      <div className="w-[60%] relative hidden md:block">
        <Image
          src={herobg}
          alt="Hero Background"
          layout="responsive"
          width={850}
          height={754}
          className="absolute max-w-full max-h-full object-strech"
        />
        <div className="md:py-12 lg:p-12 absolute w-full h-full text-start">
          <h1 className="font-bold text-textMain w-full leading-snug">
            Host your meeting with world-class amenities. Starting at{" "}
            <span className="text-primary2">₹199/-!</span>
          </h1>
        </div>
      </div>

      <div className="w-full md:w-[40%] h-[40vh] md:h-[50vh] lg:h-[45vh] relative overflow-hidden">
        {/* Coworking Image */}
        <div className="absolute w-full md:left-[-13%] top-[10%]  h-[90%] md:h-[85%]">
          <Image
            src={coworking}
            alt="Coworking Icon"
            layout="responsive"
            width={388}
            height={388}
            className="mix-blend-multiply max-w-full max-h-full object-contain"
          />
        </div>

        {/* Vector Image */}
        <div className="absolute w-full left-[13%] md:left-[0] h-full">
          <Image
            src={vector7}
            alt="Vector Image"
            layout="responsive"
            width={644}
            height={743}
            className="opacity-90 mix-blend-multiply max-w-full max-h-full object-contain"
          />
        </div>
      </div>
      <div className="w-full md:hidden">
        <div className="py-6 flex w-full h-full text-center">
          <h3 className="font-bold text-textMain w-full leading-snug">
            Host your meeting with world-class amenities. Starting at{" "}
            <span className="text-primary2">₹199/-!</span>
          </h3>
        </div>
      </div>
    </section>
  );
}
