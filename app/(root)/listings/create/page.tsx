"use client";
import Image from "next/image";
// import Description from "@/components/process/Description";
// import FloorPlan from "@/components/process/FloorPlan";
// import ListingCreated from "@/components/process/ListingCreated";
// import ListingPlaceType from "@/components/process/ListingPlaceType";
import ListingTypeSelector from "@/components/process/ListingTypeSelector";
import Overview from "@/components/process/Overview";
// import Photos from "@/components/process/Photos";
// import PlaceDetails from "@/components/process/PlaceDetails";
// import PlaceLocation from "@/components/process/PlaceLocation";
// import Price from "@/components/process/Price";
// import ProcessAmenities from "@/components/process/ProcessAmeneties";
import StepOneStarter from "@/components/process/StepOneStarter";
// import StepThreeStarter from "@/components/process/StepThreeStarter";
// import StepTwoStarter from "@/components/process/StepTwoStarter";
// import Title from "@/components/process/Title";
import React, { useState } from "react";
import ListingPlaceType from "@/components/process/ListingPlaceType";
import PlaceLocation from "@/components/process/PlaceLocation";
import PlaceDetails from "@/components/process/PlaceDetails";
import FloorPlan from "@/components/process/FloorPlan";
import StepTwoStarter from "@/components/process/StepTwoStarter";
import ProcessAmenities from "@/components/process/ProcessAmenities";
import Photos from "@/components/process/Photos";
import Title from "@/components/process/Title";
import Description from "@/components/process/Description";
import StepThreeStarter from "@/components/process/StepThreeStarter";
import Price from "@/components/process/Price";
import SummaryPage from "@/components/process/Summary";
import ListingCreated from "@/components/process/ListingCreated";

const CreateListing = () => {
  const [step, setStep] = useState(0);
  const getComponent = () => {
    switch (step) {
      case 0:
        return <Overview />;
      case 1:
        return <StepOneStarter />;
      case 2:
        return <ListingTypeSelector />;
      case 3:
        return <ListingPlaceType />;
      case 4:
        return <PlaceLocation />;
      case 5:
        return <PlaceDetails />;
      case 6:
        return <FloorPlan />;
      case 7:
        return <StepTwoStarter />;
      case 8:
        return <ProcessAmenities />;
      case 9:
        return <Photos />;
      case 10:
        return <Title />;
      case 11:
        return <Description />;
      case 12:
        return <StepThreeStarter />;
      case 13:
        return <Price />;
      // case 14:
      //   return <SummaryPage />;
      case 14:
        return <ListingCreated />;
      default:
        return <Overview />;
    }
  };
  const handleNext = () => {
    setStep(step + 1);
  };
  const handlePrevious = () => {
    setStep(step - 1);
  };
  return (
    <div className="grid grid-rows-new-listing h-[100vh] ">
      <header className="flex items-center px-20 justify-end my-14">
        {step <= 13 && (
          <button className="border border-gray-300 px-5 py-2 rounded-full font-semibold hover:border-gray-700 cursor-pointer">
            Save & Exit
          </button>
        )}
      </header>

      {getComponent()}
      <footer
        className={` flex items-center px-20 pb-4 border-t-4 border-t-gray-300 ${
          step > 0 ? "justify-between" : "justify-end"
        }`}
      >
        {step >= 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="py-3 mt-5 px-10 text-nyumba-light-black underline hover:bg-gray-200 text-base font-medium rounded-md cursor-pointer"
            >
              Back
            </button>
          </>
        )}
        {step !== 0 ? (
          <button
            onClick={handleNext}
            className=" bg-[#222222] py-3 mt-5 px-5 text-white text-base font-medium rounded-md cursor-pointer "
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleNext}
            className=" bg-houseGradient py-3 mt-5 px-5 text-white text-base font-medium rounded-md cursor-pointer "
          >
            Get Started
          </button>
        )}
      </footer>
    </div>
  );
};

export default CreateListing;
