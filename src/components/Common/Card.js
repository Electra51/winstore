import Image from "next/image";
import React from "react";
const Card = ({ data }) => {
  return (
    <div className="w-[186px] h-[287px] border border-[#00000021] p-[14px]">
      <div>
        <p className="font-normal text-[12px]">{data?.category}</p>
        {data?.title?.length > 12 ? (
          <p className="text-[#034E53] text-[15px] mt-[3px]">
            {data?.title.slice(0, 12) + "..."}
          </p>
        ) : (
          <p className="text-[#034E53] text-[15px] mt-[3px]">{data?.title}</p>
        )}
        <div className="w-[158px] h-[129px] mt-[8px]">
          <Image
            src={data?.image}
            alt=""
            width={158}
            height={129}
            className="h-full w-full object-fill"
          />
        </div>

        <p className="text-[#0AAEB9] text-[15px] mt-[8px]">
          <span className="text-[#697475] text-[13px] line-through pr-1">
            RS 60.000
          </span>
          RS {data?.price}
        </p>
        <div className=" bg-[#15ADB7] w-[158px] h-[35px] text-[15px] flex justify-center items-center mt-[11px]">
          Add to cart
        </div>
      </div>
    </div>
  );
};

export default Card;
