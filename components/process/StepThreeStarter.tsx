import React from "react";

const StepThreeStarter = () => {
  return (
    <div className="flex items-center h-full mx-20">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4 text-nyumba-light-black">
          <div className="text-2xl">Step 3</div>
          <h1 className="text-4xl">
            <strong>Finish Up and Publish</strong>
          </h1>
          <p className="text-xl">
            Finally, set an Ideal price, answer a few quick questions and
            publish when you are ready
          </p>
        </div>
        <div>
          <video src="/home3.mp4" autoPlay loop controls={false} />
        </div>
      </div>
    </div>
  );
};

export default StepThreeStarter;
