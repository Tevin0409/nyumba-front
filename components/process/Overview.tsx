import Image from "next/image";
import React from "react";

const Overview = () => {
  const mainTitle = "Its easy to get started on NyumbaDigi";
  const data = [
    {
      title: "Tell us about your place",
      description:
        "Share some basic info, like where it is and how many guests can stay",
      image: "/videos/overview1.webp",
    },
    {
      title: "Make it stand out",
      description:
        "Add 5 or more photos plus a title and description—we’ll help you out.",
      image: "/videos/overview2.webp",
    },
    {
      title: "Finish and publish",
      description:
        "Choose if you'd like to start with an experienced guest, set a starting price, and publish your listing.",
      image: "/videos/overview3.webp",
    },
  ];

  return (
    <div className="flex h-full justify-between items-center px-32 gap-20">
      <div>
        <strong>
          <h1 className="text-5xl leading-normal text-nyumba-light-black">
            {mainTitle}
          </h1>
        </strong>
      </div>
      <ul className="flex flex-col gap-16">
        {data.map(({ title, description, image }, index) => (
          <li key={title} className="flex items-center justify-start gap-6">
            <strong className="text-2xl pt-5 text-nyumba-light-black">
              <h3>{index + 1}</h3>
            </strong>
            <div>
              <strong className="text-2xl text-nyumba-light-black">
                <h3>{title}</h3>
              </strong>
              <p className=" text-nyumba-light-gray">{description}</p>
            </div>
            <div className="relative w-48 h-32 object-cover">
              <Image src={image} alt="overview" fill />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Overview;
