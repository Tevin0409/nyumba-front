import { useRouter } from "next/navigation";
import { useAppStore } from "@/store/store";
import React, { useEffect } from "react";
import Confetti from "react-confetti";
import { createListing } from "@/lib/actions/listing.actions";
import toast from "react-hot-toast";

const ListingCreated = () => {
  const router = useRouter();
  const {
    userInfo,
    locationType,
    placeType,
    mapData,
    locationData,
    placeAmenities,
    placeSpace,
    photos,
    titleDeed,
    title,
    description,
    price,
  } = useAppStore();

  // useEffect(() => {
  //   createListingAPI({
  //     listingCreatedBy: { id: userInfo.id },
  //     locationType,
  //     placeType,
  //     mapData,
  //     locationData,
  //     placeAmenities,
  //     Photos,
  //     title,
  //     description,
  //     price,
  //   });
  // }, [
  //   userInfo,
  //   locationType,
  //   placeType,
  //   mapData,
  //   locationData,
  //   placeAmenities,
  //   Photos,
  //   title,
  //   description,
  //   price,
  // ]);

  const handleSubmit = () => {
    const res = createListing({
      locationType: locationType.name,
      placeType: placeType.title,
      mapData,
      location: locationData,
      placeAmenities,
      placeSpace,
      photos,
      title,
      titleDeed,
      description,
      price,
    });

    console.log(typeof res);

    if (res) {
      toast.success("Success");
      router.push(`/listings/${(res as ListingResponse).listing?.id}`);
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full ">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className="font-semibold text-4xl">Congratulations</h2>
        <p>You have Successfully Created your listing </p>
        <div className="flex gap-5">
          <button
            onClick={() => handleSubmit()}
            className=" bg-[#222222] py-3 mt-5 px-5 text-white text-base font-medium rounded-md cursor-pointer "
          >
            Publish
          </button>

          <button
            onClick={() => router.push("/properties")}
            className=" bg-houseGradient py-3 mt-5 px-5 text-white text-base font-medium rounded-md cursor-pointer "
          >
            View Your Listings
          </button>
        </div>
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      </div>
    </div>
  );
};

export default ListingCreated;
