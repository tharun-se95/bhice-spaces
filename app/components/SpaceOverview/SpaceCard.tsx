import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDirections,
  faChevronRight,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

interface SpaceCardProps {
  imageSrc: string;
  title: string;
  location: string;
  distance: string;
  dayPassPrice: number;
  bulkPassPrice: number;
  bulkPassDays: number;
}

const SpaceCard: React.FC<SpaceCardProps> = ({
  imageSrc,
  title,
  location,
  distance,
  dayPassPrice,
  bulkPassPrice,
  bulkPassDays,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-sm md:max-w-sm mx-auto transition-transform duration-300 hover:scale-105 cursor-pointer">
      {/* Header with Location and Distance */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-grey-800">{title}</h2>
        <div className="w-[52] h-[52] gap-2 rounded-md border bg-lightGrey flex flex-col justify-center items-center text-xs font-medium text-grey-500">
          <div className="w-4 h-4 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faDirections} />
          </div>
          <span className="text-xs">{distance}</span>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-48 mt-4 rounded-md overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        <div
          className="flex items-center gap-2 absolute top-2 left-2 bg-primary1 bg-textMain text-lightYellow px-2 py-1 rounded-md text-xs font-semibold"
          style={{ border: "0.5px solid #FFBB0080" }}
        >
          <span className="w-2 h-2 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faBuilding} />
          </span>
          <span style={{ textShadow: "0 1px 3px #FFD04F99" }}>Workspace</span>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="flex flex-wrap gap-2 justify-between items-center mt-4">
        <PassButton
          title="Day Pass"
          price={dayPassPrice}
          duration="Day"
          bgColor="bg-lightGrey"
          hoverColor="hover:bg-grey5"
        />

        <PassButton
          title="Bulk Pass"
          price={bulkPassPrice}
          duration={`${bulkPassDays} Days`}
          bgColor="bg-lightYellow"
          hoverColor="hover:bg-primary2"
          discount="20%"
        />
      </div>
    </div>
  );
};

export default SpaceCard;

const PassButton = ({
  title,
  price,
  duration,
  bgColor,
  hoverColor,
  discount,
}: any) => (
  <button
    className={`flex flex-grow w-1/4 relative gap-5 items-center min-w-max justify-between text-left px-4 py-4 rounded-md transition-colors ${bgColor} ${hoverColor}`}
  >
    {discount && (
      <span className="absolute top-[-10] left-[50] px-2 py-1 text-xs bg-textMain text-lightYellow rounded">
        {discount} Discount
      </span>
    )}
    <div>
      <div className="flex items-center space-x-1">
        <span className="text-xs text-textSecondary ">{title}</span>
      </div>
      <span className="text-sm text-textMain font-semibold">
        ₹ {price}{" "}
        <span className="text-xs text-textSecondary font-normal">
          / {duration}
        </span>
      </span>
    </div>
    <div className="w-5 h-5 rounded-full flex items-center justify-center">
      <FontAwesomeIcon icon={faChevronRight} />
      <FontAwesomeIcon icon={faChevronRight} />
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  </button>
);
