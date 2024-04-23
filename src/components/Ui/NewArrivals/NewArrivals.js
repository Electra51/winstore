import Card from "@/components/Common/Card";
import SectionHeader from "@/components/Common/SectionHeader";
import React from "react";

const NewArrivals = ({ arrivalProduct }) => {
  console.log("arrivalProduct", arrivalProduct);
  return (
    <div className="w-[1440px] mx-auto mt-[26px]">
      <div className="pt-[60px]">
        <SectionHeader title1={"New"} titile2={"Arrivals"} />
        <div className="grid grid-cols-6 gap-[30px]">
          {arrivalProduct?.map((data, i) => {
            return <Card data={data} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
