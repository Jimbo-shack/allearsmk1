import React from "react";
import Image from "next/image";
import gradient from "/public/gradient.png";

function BackGroundRadar() {
  return (
    <div className=" absolute inset-0 z-0 h-screen w-screen overflow-x-hidden overflow-y-hidden">
      <div className="absolute z-20 h-screen w-screen bg-noiseRPT bg-left-top bg-repeat mix-blend-overlay" />

      <Image
        src={gradient}
        alt="Background Radar"
        className="absolute -bottom-16 z-10 w-screen flex-grow animate-spin-slow select-none bg-auto"
      />
      {/* <div className=" bg-background z-0 w-screen h-screen" /> */}
    </div>
  );
}

export default BackGroundRadar;
