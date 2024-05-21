import { useAppStore } from "@/store/store";
import { CldUploadButton } from "next-cloudinary";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const Title = () => {
  const { title, setTitle, titleDeed, setTitleDeed } = useAppStore();
  //   titleDeed
  const handleUpload = (data: any) => {
    setTitleDeed(data.info.secure_url);
  };

  return (
    <div className="flex  items-center justify-center h-full text-nyumba-light-black">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-4xl">Give your house a title</h2>
          <p>Short Titles work best. You can always change it later</p>
        </div>
        <div className="flex flex-col gap-4">
          <textarea
            className="border-gray-400 border h-40 w-[550px] rounded-lg active:border-gray-950 p-6 no-scrollbar text-3xl"
            value={title}
            onChange={(e) => {
              if (e.target.value.length <= 32) {
                setTitle(e.target.value);
              } else {
                return;
              }
            }}
          />
          <span>{title.length}/32</span>
        </div>
        <CldUploadButton
          options={{ multiple: false }}
          className="form-btn p-4  "
          onUpload={handleUpload}
          uploadPreset="dglrzpk7"
        >
          <span className="bg-airbnb-gradient py-3 mt-5 px-5 text-base text-white rounded-md cursor-pointer">
            Upload Title Deed
          </span>
        </CldUploadButton>
        <div className="grid grid-cols-3 gap-4 h-[55vh] overflow-auto pb-10 no-scrollbar">
          <div className="relative h-36 w-[200px]">
            {titleDeed !== "" && (
              <Image src={titleDeed!} fill alt="Title Deed Photos" />
            )}

            {/* Add delete button */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
