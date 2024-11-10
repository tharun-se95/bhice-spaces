// app/components/Header/Header.tsx
import React from "react";
import Image from "next/image";
import herobg from "@/public/assets/images/herobg.png";
import coworking from "@/public/assets/images/Coworking video 1.svg";
import vector7 from "@/public/assets/images/Vector 7.svg";

export default function Header() {
  return (
    <div className="md:flex w-full h-full md:overflow-hidden relative">
      <div className="w-[70%] relative hidden md:block">
        <Image
          src={herobg}
          alt="Hero Background"
          layout="responsive"
          width={850}
          height={754}
          className="absolute max-w-full max-h-full object-strech"
        />
        <div className="md:p-10 lg:p-24 absolute w-full h-full text-start">
          <p className="md:text-4xl lg:text-6xl font-bold text-textMain w-full leading-snug">
            Host your meeting with world-class amenities. Starting at{" "}
            <span className="text-primary2">₹199/-!</span>
          </p>
        </div>
      </div>

      <div className=" w-full md:w-[30%] h-[52vh] relative overflow-hidden">
        {/* Coworking Image */}
        <div className="absolute md:left-[-13%] top-[10%] w-[100%]">
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
        <div className="absolute w-[100%] left-[13%] md:left-[0] h-full">
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
      <div className="w-full h-[20vh] relative  md:hidden overflow-hidden">
        <Image
          src={herobg}
          alt="Hero Background"
          width={850}
          height={754}
          className="absolute mix-blend-multiply opacity-50"
        />
        <div className="absolute p-[20] flex items-center w-full h-full text-center">
          <p className="text- xl font-bold text-textMain w-full leading-snug">
            Host your meeting with world-class amenities. Starting at{" "}
            <span className="text-primary2">₹199/-!</span>
          </p>
        </div>
      </div>
    </div>
  );
}
