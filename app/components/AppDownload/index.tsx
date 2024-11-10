import React from "react";
import Image from "next/image";
import Apps from "@/public/assets/images/bhive apps.svg";
import GooglePlay from "@/public/assets/images/Download 1.svg";
import Appstore from "@/public/assets/images/Download 2.svg";

function AppDownload() {
  return (
    <section className="bg-background text-textMain my-16">
      <h2 className="text-3xl font-bold text-textSecondary text-start mb-10 mx-6 md:ml-32">
        Download our app now
      </h2>
      <div className="flex items-end mx-6  h-[470px] relative  bg-white rounded-md shadow  md:bg-background md:rounded-none md:shadow-none md:p-10">
        <div className="absolute w-full md:w-[100%] top-[5] md:top-0 md:left-[5%]">
          <Image
            src={Apps}
            alt="Vector Image"
            width={400}
            height={470}
            className="opacity-90 mix-blend-multiply max-w-full max-h-full object-contain"
          />
        </div>
        <div
          id="apps-links-desktop"
          className="hidden md:flex flex-col items-end justify-end p-10 bg-white rounded-md shadow"
        >
          <p className="w-[40%] text-lg right-0 text-textSecondary text-start mb-4">
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </p>
          <div className="w-[40%] flex justify-start text-start">
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
        <div id="apps-links-mobile" className="md:hidden w-full">
          <div className="flex justify-center">
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
      </div>
    </section>
  );
}

export default AppDownload;
