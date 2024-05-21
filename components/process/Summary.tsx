"use client";
import React from "react";
import Image from "next/image";
import { useAppStore } from "@/store/store";

const SummaryPage = () => {
  const {
    locationType,
    placeType,
    mapData,
    locationData,
    titleDeed,
    placeSpace,
    placeAmenities,
    photos,
    title,
    description,
    price,
  } = useAppStore();
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full text-nyumba-light-black">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-4xl">Summary</h2>
        <p>here is what we have</p>
      </div>
      <div className="flex flex-col gap-4"></div>
    </div>
  );
};

export default SummaryPage;
