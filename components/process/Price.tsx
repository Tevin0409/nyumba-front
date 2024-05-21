import { useAppStore } from "@/store/store";
import React from "react";

const Price = () => {
  const { price, setPrice } = useAppStore();
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full text-nyumba-light-black">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-4xl">Set your Price</h2>
      </div>
      <div className="flex flex-col gap-4">
        <textarea
          className="border-gray-400 border h-40 w-[250px] rounded-lg active:border-gray-950 p-6 no-scrollbar text-3xl"
          value={price}
          onChange={(e) => {
            if (e.target.value) {
              setPrice(parseInt(e.target.value));
            } else {
              setPrice(0);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Price;
