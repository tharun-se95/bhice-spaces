import React from "react";
import FeatureCard from "./FeatureCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faDumbbell,
  faWifi,
  faMugHot,
  faMoneyBillWave,
  faCouch,
  faCalendarCheck,
  faVolleyball,
} from "@fortawesome/free-solid-svg-icons";

// Interface for Feature data
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FontAwesomeIcon icon={faUsers} />,
    title: "Community Events",
    description: "Connect and socialize with fellow members",
  },
  {
    icon: <FontAwesomeIcon icon={faDumbbell} />,
    title: "Gym Facilities",
    description: "State-of-the-art equipment for all your fitness needs",
  },
  {
    icon: <FontAwesomeIcon icon={faWifi} />,
    title: "High-Speed WiFi",
    description: "Stay connected and productive wherever you work",
  },
  {
    icon: <FontAwesomeIcon icon={faMugHot} />,
    title: "Cafe & Tea Bar",
    description: "Relax and unwind with delicious refreshments",
  },
  {
    icon: <FontAwesomeIcon icon={faMoneyBillWave} />,
    title: "Affordable",
    description: "Flexible membership plans to fit your budget",
  },
  {
    icon: <FontAwesomeIcon icon={faCouch} />,
    title: "Comfort Lounges",
    description: "Unwind in our comfortable and stylish lounges",
  },
  {
    icon: <FontAwesomeIcon icon={faCalendarCheck} />,
    title: "Quick Booking",
    description: "Easily book classes and amenities online",
  },
  {
    icon: <FontAwesomeIcon icon={faVolleyball} />,
    title: "Sports Area",
    description: "Enjoy a variety of sports activities",
  },
];

function WhyChooseUs() {
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
