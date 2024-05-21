import { useAppStore } from "@/store/store";
import React from "react";

const FloorPlan = () => {
  const { placeSpace, setPlaceSpace } = useAppStore();

  const handleIncrement = (type: number) => {
    setPlaceSpace({ ...placeSpace, [type]: (placeSpace as any)[type] + 1 });
  };
  const handleDecrement = (type: number) => {
    if ((placeSpace as any)[type] <= 1) {
      setPlaceSpace({ ...placeSpace, [type]: 1 });
    } else {
      setPlaceSpace({ ...placeSpace, [type]: (placeSpace as any)[type] - 1 });
    }
  };
  return (
    <div className="flex justify-center items-center h-full flex-col gap-5 ">
      <div className="flex flex-col gap-3">
        <h2 className="font-semi-bold text-4xl">
          Share some details form your place
        </h2>
        <p>You can add more details later</p>
      </div>
      <div className="flex flex-col w-[40%] gap-5">
        {Object.keys(placeSpace).map((place: any) => (
          <div
            key={place}
            className="flex justify-between w-full text-lg items-center"
          >
            <span className="capitalize">{place}</span>
            <div className="flex gap-10 items-center justify-between w-48">
              <button
                onClick={() => handleDecrement(place)}
                className="border border-gray-200 py-[10px] rounded-full px-5 flex items-center justify-center hover:border-gray-500"
              >
                -
              </button>
              <button>{(placeSpace as any)[place]}</button>
              <button
                onClick={() => handleIncrement(place)}
                className="border border-gray-200 py-[10px] rounded-full px-5 flex items-center justify-center hover:border-gray-500"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloorPlan;
