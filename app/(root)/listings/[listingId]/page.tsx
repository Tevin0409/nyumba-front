import React from "react";

import EmptyState from "@/components/common/EmptyState";
import ListingHead from "./_components/ListingHead";
import ListingInfo from "./_components/ListingInfo";
import ListingClient from "./_components/ListingClient";

import { categories } from "@/constants";
import { getSession } from "@/lib/actions/user.actions";
import { fetchListingById } from "@/lib/actions/listing.actions";

interface IParams {
  listingId: string;
}

const ListingPage = async ({ params: { listingId } }: { params: IParams }) => {
  const session = await getSession();
  const currentUser = session.user;
  const listing: ListingInfoProps = await fetchListingById(listingId);

  if (!listing) return <EmptyState />;

  const { ownerInfo, leasingStatus, propertyInfo } = listing;
  // console.log("IMEFIKA", ownerInfo);

  return (
    <section className="main-container">
      <div className="flex flex-col gap-6">
        <ListingHead
          title={propertyInfo.title}
          image={propertyInfo.photos[0]}
          country={propertyInfo.location.country}
          region={propertyInfo.location.region}
          id={propertyInfo.id}
        />
      </div>

      <ListingClient
        id={propertyInfo.id}
        price={propertyInfo.price}
        user={currentUser}
        title={propertyInfo.title}
      >
        <ListingInfo
          user={ownerInfo}
          category={propertyInfo.locationType}
          description={propertyInfo.description}
          roomCount={propertyInfo.placeSpace.beds}
          guestCount={propertyInfo.placeSpace.guests}
          bathroomCount={propertyInfo.placeSpace.bathroom}
          latlng={propertyInfo.mapData}
        />
      </ListingClient>
    </section>
  );
};

export default ListingPage;
