import React from "react";

function Hero1() {
  return (
    <div className="flex h-96 w-full pt-12">
      <div className="flex w-1/3 items-center justify-center bg-red-500">a</div>
      <div className="w-2/3 bg-blue-500 p-4">
        <h1>Dani Festas</h1>
        <p className="text-justify mt-6">
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

export default Hero1;
