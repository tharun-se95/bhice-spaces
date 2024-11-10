import SpaceCard from "./SpaceCard";
import spaces from "@/public/data.json";

function SpaceOverview() {
  return (
    <section className="bg-background text-textMain py-16">
      <h2 className="text-3xl font-bold text-start mb-10 ml-24">
        Our Space Overview
      </h2>
      <div className="ml-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
