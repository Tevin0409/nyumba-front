import React, { Suspense } from "react";

import EmptyState from "@/components/common/EmptyState";
import Heading from "@/components/common/Heading";
import ListingCard from "@/components/ListingCard";
import { getSession } from "@/lib/actions/user.actions";
import { fetchUserLeasings } from "@/lib/actions/leases.actions";

const LeasesPage = async () => {
  const session = await getSession();
  if (!session.user)
    return <EmptyState title="Unauthorized" subtitle="Please login" />;

  const { leases } = await fetchUserLeasings();
  console.log(leases);

  if (leases.length === 0)
    return (
      <EmptyState
        title="No Leases found"
        subtitle="Looks like you have no leases on your properties."
      />
    );

  return (
    <section className="main-container">
      <Heading
        title="Reservations"
        subtitle="Bookings on your properties"
        backBtn
      />
      <div className=" mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:gap-8 gap-4">
        {/* {lease.map((lease) => {
          const { reservation, ...data } = lease;
          return (
            <ListingCard
              key={lease.id}
              data={data}
              reservation={reservation}
              hasFavorited={true}
            />
          );
        })} */}
      </div>
    </section>
  );
};

export default LeasesPage;
