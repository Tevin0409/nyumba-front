import { useAppStore } from "@/store/store";
import React from "react";
import FormInput from "@/components/common/FormInput";

const PlaceDetails = () => {
  const { locationData, setLocationData } = useAppStore();

  const handleChange = (name: string, value: any) => {
    setLocationData({ ...locationData, [name]: value });
  };
  return (
    <div className="flex justify-center items-center h-full flex-col gap-2 w-full">
      <div className="flex flex-col gap-3">
        <h2 className="font-semi-bold text-4xl">Confirm your address</h2>
        <p>Address is shared to leasers after successful reservation</p>
      </div>
      <div className="flex flex-col w-full items-center gap-3 h-full overflow-auto no-scrollbar pb-20 pt-5">
        <div className="flex flex-col gap-2 w-[30%]">
          <FormInput
            isListing
            name={"country"}
            placeholder={"Country"}
            setValue={handleChange}
            type="text"
            value={locationData?.country}
          />
          <FormInput
            isListing
            name={"neighborhood"}
            placeholder={"House, Flat, Blding"}
            setValue={handleChange}
            type="text"
            value={locationData?.neighborhood}
          />
          <FormInput
            isListing
            name={"place"}
            placeholder={"Area"}
            setValue={handleChange}
            type="text"
            value={locationData?.place}
          />
          <FormInput
            isListing
            name={"locality"}
            placeholder={"Street Address"}
            setValue={handleChange}
            type="text"
            value={locationData?.locality}
          />
          <FormInput
            isListing
            name={"landmark"}
            placeholder={"Nearby LandMark"}
            setValue={handleChange}
            type="text"
            value={locationData?.landmark}
          />
          <FormInput
            isListing
            name={"district"}
            placeholder={"City / town"}
            setValue={handleChange}
            type="text"
            value={locationData?.district}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
