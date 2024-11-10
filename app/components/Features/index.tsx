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
    <section className="bg-background text-textMain">
      <h2 className="text-3xl font-bold text-start mb-10 ml-6 md:ml-24">
        Why Choose Us?
      </h2>
      <div
        className=" mx-6 md:mx-24 grid gap-2 md:gap-0 grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]"
        // style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {features.map((feature, index) => (
          <div key={index} className="md:border md:border-grey5">
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
