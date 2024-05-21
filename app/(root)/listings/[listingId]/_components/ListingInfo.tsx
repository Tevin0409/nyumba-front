import React from "react";
import dynamic from "next/dynamic";

import Avatar from "@/components/common/Avatar";
import ListingCategory from "./ListingCategory";
import { MdOutlineVilla } from "react-icons/md";

interface ListingInfoProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category: string | undefined;
  latlng: { latitude: number; longitude: number };
}

const Map = dynamic(() => import("@/components/common/Map"), {
  ssr: false,
});

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  latlng,
}) => {
  const coord: number[] = [latlng.latitude!, latlng.longitude!];
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-[16px] font-semibold flex flex-row items-center gap-2">
          <span className="mr-1">Hosted by</span> <Avatar src={""} />
          <span>
            {" "}
            {user?.firstName} {user?.lastName}
          </span>
        </div>
        <div
          className="flex flex-row items-center gap-4 font-light text-neutral-700
          "
        >
          <span>{guestCount} guests</span>
          <span>{roomCount} rooms</span>
          <span>{bathroomCount} bathrooms</span>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={MdOutlineVilla}
          label={"Modern"}
          description={category || ""}
        />
      )}
      <hr />
      <p className=" font-light text-neutral-500 text-[16px] ">{description}</p>
      <hr />
      <div className="h-[210px]">
        <Map center={coord} />
      </div>
    </div>
  );
};

export default ListingInfo;
