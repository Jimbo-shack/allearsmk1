import React from "react";
import { Icons } from "~/components/icons";

function Targets() {
  return (
    <div className="absolute h-screen w-screen overflow-x-hidden overflow-y-hidden">
      <div className="absolute bottom-96 left-40 flex animate-fade gap-3">
        <Icons.targets className="h-10 w-10 select-none" />
        <div>
          <p className="">Straight to the point</p>
          <p className=" text-sm">user feedback</p>
        </div>
      </div>
      <div className="absolute inset-x-80 bottom-28 flex animate-fadeTwo gap-3">
        <Icons.targets className="h-10 w-10 select-none" />
        <div>
          <p className="">Full scale issue generation and management </p>
          <p className=" text-sm">made easy</p>
        </div>
      </div>
      <div className="absolute bottom-60 right-40 flex animate-fadeThree gap-3">
        <Icons.targets className="h-10 w-10 select-none" />
        <div>
          <p className="">Automatic classification </p>
          <p className=" text-sm">for your business</p>
        </div>
      </div>
    </div>
  );
}

export default Targets;
