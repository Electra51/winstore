import Image from "next/image";
import React from "react";
import image1 from "../../../assets/banner/banner1.png";
const Card = () => {
  return (
    <div className="w-[186px] h-[287px] border border-[#00000021] p-[14px]">
      <div>
        <p className="font-normal text-[12px]">Bin Bakar Electronics</p>
        <p className="text-[#034E53] text-[15px] mt-[3px]">
          Samsung 40N5300 S..
        </p>
        <div className="w-[158px] h-[129px] mt-[8px]">
          <Image src={image1} className="h-[full w-full object-fill" />
        </div>

        <p className="text-[#0AAEB9] text-[15px] mt-[8px]">
          <span className="text-[#697475] text-[13px] line-through">
            RS 60.000
          </span>
          RS 56.000
        </p>
        <div className=" bg-[#15ADB7] w-[158px] h-[35px] text-[15px] flex justify-center items-center mt-[11px]">
          Add to cart
        </div>
      </div>
    </div>
  );
};

export default Card;
