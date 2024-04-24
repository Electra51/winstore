import SectionHeader from "@/components/Common/SectionHeader";
import Image from "next/image";
import React, { useState } from "react";
import SpecialOffer from "@/components/Common/SpecialOffer";
import {
  useGetCategoryQuery,
  useGetProductsByCategoryQuery,
} from "@/Redux/api/api";
import { IoMdStar } from "react-icons/io";
import Link from "next/link";

const BestDeal = () => {
  const [activeTab, setActiveTab] = useState("electronics");
  const { data: categories } = useGetCategoryQuery();
  const { data: products, isLoading } =
    useGetProductsByCategoryQuery(activeTab);
  //for tab handling
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-[380px] lg:w-[1400px] mx-auto mt-[80px] pb-[70px]">
      <div className="flex lg:flex-row flex-col justify-between items-start lg:items-center mb-[20px]">
        <SectionHeader title1={"Best"} titile2={"Deals"} />
        <div className="lg:hidden flex justify-normal items-center gap-5 mx-auto w-[340px] overflow-x-auto">
          {categories?.map((tab) => (
            <p
              key={tab}
              className={`text-[15px] lg:text-[19px] font-normal leading-[56px] cursor-pointer text-nowrap uppercase ${
                activeTab === tab ? "border-b-2 border-[#00CAD7]" : ""
              }`}
              onClick={() => handleTabClick(tab)}>
              {tab}
            </p>
          ))}
        </div>
        <div className="hidden lg:flex justify-normal items-center gap-5">
          {categories?.map((tab) => (
            <p
              key={tab}
              className={`text-[15px] lg:text-[19px] font-normal leading-[56px] cursor-pointer text-nowrap uppercase ${
                activeTab === tab ? "border-b-2 border-[#00CAD7]" : ""
              }`}
              onClick={() => handleTabClick(tab)}>
              {tab}
            </p>
          ))}
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-3 gap-4">
        {!isLoading &&
          products?.map((product, index) => (
            <div
              key={index}
              className={`space-y-3 ${index === 1 ? "row-span-2" : ""}`}>
              <Link
                href={`/products/${product?.id}`}
                className={`w-[414px] border border-[#0000001C] ${
                  index === 1 ? "h-[588px]" : "h-[286px]"
                }`}>
                {index === 3 ? (
                  <div className="grid grid-cols-2 gap-y-4 p-5">
                    <SpecialOffer color={index === 3 && "#c93c2d"} />
                    <div
                      className="w-[90px] h-[91px] text-[24px] leading-[29px] flex justify-center items-center rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, #EE9CA7 0%, #FFDDE1 100%)",
                      }}>
                      Save <br /> 10%
                    </div>
                    <div className="">
                      {product?.title?.length > 16 ? (
                        <p className="text-[19px] font-normal text-black">
                          {product?.title.slice(0, 16) + "..."}
                        </p>
                      ) : (
                        <p className="text-[19px] font-normal text-black">
                          {product?.title}
                        </p>
                      )}
                      <p className="text-[20px] font-normal text-[#00CAD7]">
                        Rs.{product?.price}
                      </p>
                      <div className="flex justify-normal items-center font-normal text-black">
                        <IoMdStar className="text-xl text-orange-500" />
                        <p className="text-[14px]">{product?.rating?.rate} </p>
                        <span className="text-[14px] pl-0.5">
                          ({product?.rating?.count} reveiws)
                        </span>
                      </div>
                    </div>

                    <div className="w-[192px] h-[120px]">
                      <Image
                        width={192}
                        height={120}
                        src={product?.image}
                        alt=""
                        className="h-full w-full object-fill"
                      />
                    </div>
                  </div>
                ) : index === 1 ? (
                  <div className=" p-5 relative">
                    <div className="absolute top-8 left-8">
                      <SpecialOffer color={index === 1 && "#c93c2d"} />
                    </div>
                    <div
                      className="w-[141px] h-[143px] text-[24px] leading-[29px] flex justify-center items-center rounded-full absolute top-8 right-8 text-white"
                      style={{
                        background:
                          "linear-gradient(90deg, #FF512F 0%, #DD2476 100%)",
                      }}>
                      Save <br /> 10%
                    </div>

                    <div className="w-[371.5px] h-[459px]">
                      <Image
                        width={371.5}
                        height={459}
                        src={product?.image}
                        alt=""
                        className="h-full w-full object-fill"
                      />
                    </div>
                    <div className="">
                      {product?.title?.length > 16 ? (
                        <p className="text-[19px] font-normal text-black">
                          {product?.title.slice(0, 16) + "..."}
                        </p>
                      ) : (
                        <p className="text-[19px] font-normal text-black">
                          {product?.title}
                        </p>
                      )}
                      <p className="text-[20px] font-normal text-[#00CAD7]">
                        Rs.{product?.price}
                      </p>
                      <div className="flex justify-normal items-center font-normal text-black">
                        <IoMdStar className="text-xl text-orange-500" />
                        <p className="text-[14px]">{product?.rating?.rate} </p>
                        <span className="text-[14px] pl-0.5">
                          ({product?.rating?.count} reveiws)
                        </span>
                      </div>
                    </div>
                  </div>
                ) : index === 4 ? (
                  <div className="grid grid-cols-2 gap-y-4 p-5 relative">
                    <SpecialOffer color={index === 4 && "#c93c2d"} />
                    <div
                      className="w-[141px] h-[143px] text-[24px] leading-[29px] flex justify-center items-center rounded-full z-10"
                      style={{
                        background:
                          "linear-gradient(90deg, #F09819 0%, #EDDE5D 100%)",
                      }}>
                      Save <br /> 10%
                    </div>
                    <div className="">
                      {product?.title?.length > 16 ? (
                        <p className="text-[19px] font-normal text-black">
                          {product?.title.slice(0, 16) + "..."}
                        </p>
                      ) : (
                        <p className="text-[19px] font-normal text-black">
                          {product?.title}
                        </p>
                      )}
                      <p className="text-[20px] font-normal text-[#00CAD7]">
                        Rs.{product?.price}
                      </p>
                      <div className="flex justify-normal items-center font-normal text-black">
                        <IoMdStar className="text-xl text-orange-500" />
                        <p className="text-[14px]">{product?.rating?.rate} </p>
                        <span className="text-[14px] pl-0.5">
                          ({product?.rating?.count} reveiws)
                        </span>
                      </div>
                    </div>

                    <div className="w-[192px] h-[120px] absolute top-16 left-32 rotate-12">
                      <Image
                        width={192}
                        height={120}
                        src={product?.image}
                        alt=""
                        className="h-full w-full object-fill"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-y-4 p-5">
                    <div className="">
                      {product?.title?.length > 16 ? (
                        <p className="text-[19px] font-normal text-black">
                          {product?.title.slice(0, 16) + "..."}
                        </p>
                      ) : (
                        <p className="text-[19px] font-normal text-black">
                          {product?.title}
                        </p>
                      )}
                      <p className="text-[20px] font-normal text-[#00CAD7]">
                        Rs.{product?.price}
                      </p>
                      <div className="flex justify-normal items-center font-normal text-black">
                        <IoMdStar className="text-xl text-orange-500" />
                        <p className="text-[14px]">{product?.rating?.rate} </p>
                        <span className="text-[14px] pl-0.5">
                          ({product?.rating?.count} reveiws)
                        </span>
                      </div>
                    </div>
                    <SpecialOffer
                      color={
                        index === 1 || index === 3
                          ? "#c93c2d"
                          : index === 2
                          ? "#214e54"
                          : "#00CAD7"
                      }
                    />
                    <div
                      className="w-[137px] h-[91px] text-[24px] leading-[29px] flex justify-center items-center "
                      style={{
                        background:
                          "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
                      }}>
                      Save <br /> 10%
                    </div>
                    <div className="w-[192px] h-[120px]">
                      <Image
                        width={192}
                        height={120}
                        src={product?.image}
                        alt=""
                        className="h-full w-full object-fill"
                      />
                    </div>
                  </div>
                )}
              </Link>
            </div>
          ))}
      </div>

      <div className="lg:hidden grid grid-cols-1 gap-4">
        {!isLoading &&
          products?.map((product, index) => (
            <div key={index} className={`space-y-3`}>
              <Link
                href={`/products/${product?.id}`}
                className={`w-[350px] mx-auto border border-[#0000001C] h-[286px]`}>
                <div className="grid grid-cols-2 gap-y-4 p-5">
                  <div className="">
                    {product?.title?.length > 16 ? (
                      <p className="text-[17px] font-normal text-black">
                        {product?.title.slice(0, 16) + "..."}
                      </p>
                    ) : (
                      <p className="text-[17px] font-normal text-black">
                        {product?.title}
                      </p>
                    )}
                    <p className="text-[18px] font-normal text-[#00CAD7]">
                      Rs.{product?.price}
                    </p>
                    <div className="flex justify-normal items-center font-normal text-black">
                      <IoMdStar className="text-xl text-orange-500" />
                      <p className="text-[14px]">{product?.rating?.rate} </p>
                      <span className="text-[14px] pl-0.5">
                        ({product?.rating?.count} reveiws)
                      </span>
                    </div>
                  </div>
                  <SpecialOffer
                    color={
                      index === 1 || index === 3
                        ? "#c93c2d"
                        : index === 2
                        ? "#214e54"
                        : "#00CAD7"
                    }
                  />
                  <div
                    className="w-[137px] h-[91px] text-[24px] leading-[29px] flex justify-center items-center "
                    style={{
                      background:
                        "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
                    }}>
                    Save <br /> 10%
                  </div>
                  <div className="w-[140px] h-[120px]">
                    <Image
                      width={140}
                      height={120}
                      src={product?.image}
                      alt=""
                      className="h-full w-full object-fill"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BestDeal;
