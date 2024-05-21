import { listingTypes } from "@/constants/data/listingTypes";
import { useAppStore } from "@/store/store";
import React from "react";

const ListingTypeSelector = () => {
  const { locationType, setLocationType } = useAppStore();
  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <h2 className="font-semibold text-4xl">
          Which of these best describes your place?
        </h2>
        <div className="grid grid-cols-3 gap-5 max-h-[70vh] overflow-auto scroll no-scrollbar my-10 pb-5">
          {listingTypes.map((type) => (
            <button
              key={type.name}
              onClick={() => setLocationType(type)}
              className={`flex  font-semibold border border-gray-300 rounded-md p-3 hover:border-gray-950 transition-all duration-300 ${
                type.name === locationType?.name &&
                "border-gray-950 bg-slate-100"
              }`}
            >
              {type.svgPath} {type.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingTypeSelector;
