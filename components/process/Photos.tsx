import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { useAppStore } from "@/store/store";
import React from "react";

const Photos = () => {
  const { photos, setPhotos } = useAppStore();
  const handleUpload = (data: any) => {
    setPhotos([...photos, data.info.secure_url]);
  };
  return (
    <div className="flex gap-5 items-center justify-center flex-col ">
      <h2 className="font-semibold text-4xl">Add some photos of your house</h2>
      <p>
        You will need 5 photos to get started. You can add more or make changes
        later
      </p>
      <CldUploadButton
        options={{ multiple: true }}
        className="form-btn p-4  "
        onUpload={handleUpload}
        uploadPreset="dglrzpk7"
      >
        <span className="bg-airbnb-gradient py-3 mt-5 px-5 text-base text-white rounded-md cursor-pointer">
          {photos.length > 0 ? "Add Photos" : "Upload"}
        </span>
      </CldUploadButton>
      <div className="grid grid-cols-3 gap-4 h-[55vh] overflow-auto pb-10 no-scrollbar">
        {photos.map((photo) => (
          <div className="relative h-36 w-[200px]" key={photo}>
            <Image src={photo} fill alt="Home Photos" />
            {/* Add delete button */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
