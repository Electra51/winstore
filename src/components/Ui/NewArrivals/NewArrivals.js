import Card from "@/components/Common/Card/Card";
import React from "react";

const NewArrivals = () => {
  return (
    <div className="w-[1440px] mx-auto">
      <p className="text-[28px] font-normal">
        <span className="text-[#00CAD7]">New</span> Arrivals
      </p>
      <div className="grid grid-cols-6 gap-[30px]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default NewArrivals;
