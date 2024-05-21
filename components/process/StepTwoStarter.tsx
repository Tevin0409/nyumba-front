import React from "react";

const StepTwoStarter = () => {
  return (
    <div className="flex items-center h-full mx-20">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4 text-nyumba-light-black">
          <div className="text-2xl">Step 2</div>
          <h1 className="text-4xl">
            <strong>Make your place stand out</strong>
          </h1>
          <p className="text-xl">
            In this step, you will add some of the amenities your place offers,
            as well as a few photos of the place.
          </p>
        </div>
        <div>
          <video src="/home2.mp4" autoPlay loop controls={false} />
        </div>
      </div>
    </div>
  );
};

export default StepTwoStarter;
