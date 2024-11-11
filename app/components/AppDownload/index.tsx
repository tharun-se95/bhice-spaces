import React from "react";
import Image from "next/image";
import Apps from "@/public/assets/images/bhive apps.svg";
import Appstore from "@/public/assets/images/Download 1.svg";
import GooglePlay from "@/public/assets/images/Download 2.svg";

function AppDownload() {
  return (
    <section className="bg-background text-textMain my-16">
      <h2 className="font-bold text-textSecondary text-start mb-10 mx-6 lg:mx-6">
        Download our app now
      </h2>
      <div className="flex justify-center md:justify-start items-end h-[400px] sm:h-[470px] relative  bg-white rounded-md shadow  md:bg-background md:rounded-none md:shadow-none mx-6 lg:mx-12">
        <div className="absolute h-[70%] top-[20]  md:h-full">
          <Image
            src={Apps}
            alt="Vector Image"
            width={450}
            height={470}
            className="opacity-90 mix-blend-multiply max-w-full max-h-full object-contain"
          />
        </div>
        <div
          id="apps-links-desktop"
          className="hidden w-full md:flex flex-col items-end justify-end py-24 bg-white rounded-md shadow"
        >
          <p className="w-[40%] lg:w-[50%] lg:text-lg right-0 text-textSecondary text-start mb-4">
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </p>
          <div className="w-[40%] lg:w-[50%] flex justify-start text-start">
            <a
              href="https://play.google.com/store/apps/details?id=com.your.app.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={GooglePlay}
                alt="GooglePlay"
                // width={644}
                // height={743}
                className="opacity-90 mix-blend-multiply max-w-full max-h-full object-contain"
              />
            </a>
            <a
              href="https://apps.apple.com/app/id123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={Appstore}
                alt="Appstore"
                // width={644}
                // height={743}
                className="opacity-90 mix-blend-multiply max-w-full max-h-full object-contain"
              />
            </a>
          </div>
        </div>
        <div id="apps-links-tab" className="md:hidden w-full p-6">
          <div className="flex justify-center items-center cursor-pointer">
            <a
              href="https://play.google.com/store/apps/details?id=com.your.app.id"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={GooglePlay}
                alt="GooglePlay"
                width={200}
                className="opacity-90 mix-blend-multiply max-w-full max-h-full object-contain"
              />
            </a>
            <a
              href="https://apps.apple.com/app/id123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={Appstore}
                alt="Appstore"
                width={200}
                className="opacity-90 mix-blend-multiply max-w-full max-h-full object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppDownload;
