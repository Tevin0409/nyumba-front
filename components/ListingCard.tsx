import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import Skeleton from "react-loading-skeleton";

import HeartButton from "./HeartButton";
import Image from "./Image";
import { formatAmount } from "@/lib/utils";

interface ListingCardProps {
  data: ListingProps;
  reservation?: {
    id: string;
    startDate: Date;
    endDate: Date;
    totalPrice: number;
  };
  hasFavorited: boolean;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  hasFavorited,
}) => {
  const price = reservation ? reservation.leaseTerms : data?.price;

  let reservationDate;
  if (reservation) {
    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);
    reservationDate = `${format(start, "PP")} - ${format(end, "PP")}`;
  }

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 p-3 flex items-center justify-between w-full">
        <div className="z-5">
          {/* <ListingMenu id={reservation?.id || data.id} /> */}
        </div>

        <div className="w-[28px] h-[28px] flex items-center justify-center">
          <HeartButton
            listingId={data.id}
            key={data.id}
            hasFavorited={hasFavorited}
          />
        </div>
      </div>
      <Link
        href={`/listings/${reservation ? data.listing.id : data.id}`}
        className="col-span-1 cursor-pointer"
      >
        <div className="flex flex-col gap-1 w-full">
          <div className=" overflow-hidden md:rounded-xl rounded-md">
            <div className="aspect-[1/0.95] relative bg-gray-100">
              <Image
                imageSrc={reservation ? data.listing.photos[0] : data.photos[0]}
                fill
                alt={data.title}
                effect="zoom"
              />
            </div>
          </div>
          <span className="font-semibold text-[16px] mt-[4px]">
            {reservation ? data.listing.location.place : data?.location.place},{" "}
            {reservation ? data.listing.location.region : data?.location.region}
          </span>
          <span className="font-light text-neutral-500 text-sm">
            {reservationDate || data.placeType}
          </span>

          <div className="flex flex-row items-baseline gap-1">
            <span className="font-bold text-[#444] text-[14px]">
              {formatAmount(price)}
            </span>
            {!reservation && <span className="font-light">month</span>}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;

export const ListingSkeleton = () => {
  return (
    <div className="col-span-1 ">
      <div className="flex flex-col gap-1 w-full">
        <Skeleton
          width={"100%"}
          height={"100%"}
          borderRadius={"12px"}
          className="aspect-square"
        />

        <div className="flex flex-row gap-3">
          <Skeleton height={"18px"} width={"84px"} />
          <Skeleton height={"18px"} width={"84px"} />
        </div>
        <Skeleton height={"16px"} width={"102px"} />
        <Skeleton height={"18px"} width={"132px"} />
      </div>
    </div>
  );
};
