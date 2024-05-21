import { useAppStore } from "@/store/store";
import React from "react";

const Description = () => {
  const { description, setDescription } = useAppStore();
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full text-nyumba-light-black">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-4xl">
          Tell us a bit about your home
        </h2>
        <p>Share what makes your place special</p>
      </div>
      <div className="flex flex-col gap-4">
        <textarea
          className="border-gray-400 border h-40 w-[550px] rounded-lg active:border-gray-950 p-6 no-scrollbar text-3xl"
          value={description}
          onChange={(e) => {
            if (e.target.value.length <= 500) {
              setDescription(e.target.value);
            } else {
              return;
            }
          }}
        />
        <span>{description.length}/500</span>
      </div>
    </div>
  );
};

export default Description;
