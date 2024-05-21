import React, { Suspense } from "react";

import EmptyState from "@/components/common/EmptyState";
import Heading from "@/components/common/Heading";
import ListingCard from "@/components/ListingCard";
import { getSession } from "@/lib/actions/user.actions";
import { fetchUserListings } from "@/lib/actions/listing.actions";

const PropertiesPage = async () => {
  const session = await getSession();

  if (!session.user) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const { listings } = await fetchUserListings();

  if (!listings || listings.length === 0) {
    return (
      <EmptyState
        title="No properties found"
        subtitle="Looks like you have no properties."
      />
    );
  }

  return (
    <section className="main-container">
      <Heading title="Properties" subtitle="List of your properties" backBtn />
      <div className=" mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:gap-8 gap-4">
        {listings.map((listing) => {
          return (
            <ListingCard key={listing.id} data={listing} hasFavorited={true} />
          );
        })}
      </div>
    </section>
  );
};

export default PropertiesPage;
