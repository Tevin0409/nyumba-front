import { useAppStore } from "@/store/store";
import House from "@/svg/lisitngTypes/house";
import React from "react";

const ListingPlaceType = () => {
  const { placeType, setPlaceType } = useAppStore();
  const data = [
    {
      title: "An entire place",
      subTitle: "Leaser have the whole place to themselves",
      svg: <House />,
    },
    // {
    //   title: "A room",
    //   subTitle: "Guests have their",
    //   svg: <House />,
    // },
    // {
    //   title: "A shared room",
    //   subTitle: "Guests have the whole place to themselves",
    //   svg: <House />,
    // },
  ];
  return (
    <div className="flex items-center justify-center flex-col h-full gap-10">
      <h2 className="font-semibold text-4xl">
        What type of place will the leaser have?
      </h2>
      <ul className="flex flex-col gap-5 w-[800px]">
        {data.map((place) => (
          <li
            key={place.title}
            className={`flex border border-gray-300 rounded-md p-7 justify-between cursor-pointer hover:border-gray-950 transition-all duration-300 ${
              place.title === placeType?.title && "border-gray-950 bg-slate-100"
            }`}
            onClick={() => setPlaceType(place)}
          >
            <div>
              <h4 className="font-semibold">{place.title}</h4>
              <p>{place.subTitle}</p>
            </div>
            {place.svg}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListingPlaceType;
