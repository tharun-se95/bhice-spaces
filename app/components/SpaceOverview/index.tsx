"use client";

import SpaceCard from "./SpaceCard";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

function SpaceOverview() {
  const spaces = useSelector((state: RootState) => state.data.spaces);
  return (
    <section className="bg-background text-textMain my-16">
      <h2 className="font-bold text-center lg:text-start mb-10 mx-6 lg:mx-12">
        Our Space Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mx-6 lg:mx-12">
        {spaces.map((space) => (
          <SpaceCard
            key={space.id}
            imageSrc={space.images[0]} // Use the first image in the array
            title={space.name} // Use name as the title
            location={space.address} // Use address for location
            distance={"6kms"} // Add distance if available in data
            dayPassPrice={space.day_pass_price} // Use day_pass_price for day pass price
            bulkPassPrice={
              space.day_pass_price *
              10 *
              (1 - space.day_pass_discounts_percentage["10"].value / 100)
            } // Calculate bulk pass price based on discount
            bulkPassDays={10} // Set bulk pass days to 10
          />
        ))}
      </div>
    </section>
  );
}

export default SpaceOverview;
