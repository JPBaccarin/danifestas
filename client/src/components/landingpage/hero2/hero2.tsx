import React from "react";

function Hero2() {
  return (
    <div className="flex items-center justify-center font-sans">
      <div className="flex w-1/3 items-center justify-center m-5">
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          alt="foto danifestas"
        />
      </div>
      <div className="w-2/3 p-20">
        <h1 className="-translate-y-8 text-center text-3xl font-bold">
          Dani Festas
        </h1>
        <p className="text-md mt-6 text-justify font-medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    </div>
  );
}

export default Hero2;
