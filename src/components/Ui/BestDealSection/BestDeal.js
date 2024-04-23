import SectionHeader from "@/components/Common/SectionHeader";
import Image from "next/image";
import React from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import img1 from "../../../assets/bestImage/1.png";
import img2 from "../../../assets/hello.png";
import img3 from "../../../assets/2.png";
import img4 from "../../../assets/4.png";
import img5 from "../../../assets/3.png";
import SpecialOffer from "@/components/Common/SpecialOffer";
const BestDeal = () => {
  return (
    <div className="w-[1400px] mx-auto">
      <div className="flex justify-between items-center">
        <SectionHeader title1={"Best"} titile2={"Deals"} />
        <div className="flex justify-normal items-center gap-6">
          <div className="flex justify-normal items-center gap-5">
            <p className="text-[19px] font-normal leading-[56px] cursor-pointer">
              Kitchen Appliances
            </p>
            <p className="text-[19px] font-normal leading-[56px] cursor-pointer">
              Consoles
            </p>
            <p className="text-[19px] font-normal leading-[56px] cursor-pointer">
              TV & Videos
            </p>
            <p className="text-[19px] font-normal leading-[56px] cursor-pointer">
              Cell Phones
            </p>
            <p className="text-[19px] font-normal leading-[56px] cursor-pointer">
              Grocery
            </p>
          </div>
          <div className="flex justify-normal items-center gap-1">
            <BiSolidLeftArrow />
            <BiSolidRightArrow />
          </div>
        </div>
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-2">
        <div className=" space-y-4">
          <div className="w-[414px] h-[286px] border border-[#0000001C] grid grid-cols-2 p-6 gap-y-5">
            <div className="">
              <p className="text-[19px] font-normal text-black">
                Nintendo Switch{" "}
              </p>
              <p className="text-[19px] font-normal text-black">Console</p>
              <p className="text-[20px] font-normal text-[#00CAD7]">
                Rs.65,208{" "}
              </p>
              <p className="text-[16px] font-normal text-black">
                Rs.<span className=" line-through">66,000</span>
              </p>
            </div>

            <SpecialOffer color="#00CAD7" />

            <div
              className="w-[137px] h-[91px] text-[24px] leading-[29px] flex justify-center items-center "
              style={{
                background: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
              }}>
              Save <br /> 10%
            </div>
            <div className="w-[192px] h-[120px]">
              <Image src={img1} alt="" className="h-full w-full object-fill" />
            </div>
          </div>
          <div className="w-[414px] h-[286px] border border-[#0000001C] grid grid-cols-2 p-6 gap-y-5">
            <SpecialOffer color="#c93c2d" />

            <div
              className="w-[90px] h-[91px] text-[24px] leading-[29px] flex justify-center items-center rounded-full"
              style={{
                background: "linear-gradient(90deg, #EE9CA7 0%, #FFDDE1 100%)",
              }}>
              Save <br /> 10%
            </div>
            <div className="">
              <p className="text-[19px] font-normal text-black">
                Nintendo Switch{" "}
              </p>
              <p className="text-[19px] font-normal text-black">Console</p>
              <p className="text-[20px] font-normal text-red-500">Rs.65,208 </p>
              <p className="text-[16px] font-normal text-black">
                Rs.<span className=" line-through">66,000</span>
              </p>
              <p className="text-[19px] font-normal text-[#00CAD7]">
                Already Sold: 6{" "}
              </p>
              <p className="text-[19px] font-normal text-[#00CAD7]">
                Available: 30{" "}
              </p>
            </div>
            <div className="w-[192px] h-[120px]">
              <Image src={img4} alt="" className="h-full w-full object-fill" />
            </div>
          </div>
        </div>
        <div className="row-span-2">
          <div className="w-[414px] h-[588px] border border-[#0000001C] grid grid-cols-2 p-6 gap-y-5">
            <div className="">
              <p className="text-[19px] font-normal text-black">
                Nintendo Switch{" "}
              </p>
              <p className="text-[19px] font-normal text-black">Console</p>
              <p className="text-[20px] font-normal text-[#00CAD7]">
                Rs.65,208{" "}
              </p>
              <p className="text-[16px] font-normal text-black">
                Rs.<span className=" line-through">66,000</span>
              </p>
            </div>

            <SpecialOffer color="#c93c2d" />
            <div
              className="w-[137px] h-[91px] text-[24px] leading-[29px] flex justify-center items-center "
              style={{
                background: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
              }}>
              Save <br /> 10%
            </div>
            <div className="w-[192px] h-[120px]">
              <Image src={img1} alt="" className="h-full w-full object-fill" />
            </div>
          </div>
        </div>
        <div className=" space-y-4">
          <div className="w-[414px] h-[286px] border border-[#0000001C] grid grid-cols-2 p-6 gap-y-5">
            <div className="">
              <p className="text-[19px] font-normal text-black">
                Nintendo Switch{" "}
              </p>
              <p className="text-[19px] font-normal text-black">Console</p>
              <p className="text-[20px] font-normal text-[#00CAD7]">
                Rs.65,208{" "}
              </p>
              <p className="text-[16px] font-normal text-black">
                Rs.<span className=" line-through">66,000</span>
              </p>
            </div>

            <SpecialOffer color="#214e54" />
            <div
              className="w-[137px] h-[91px] text-[24px] leading-[29px] flex justify-center items-center relative"
              style={{
                background:
                  "linear-gradient(180deg, #EECFCC 0%, rgba(238, 207, 204, 0) 100%)",
              }}>
              <Image src={img2} alt="" />
              <p className="absolute top-5 left-5">
                {" "}
                Save <br /> 10%
              </p>
            </div>
            <div className="w-[192px] h-[120px]">
              <Image src={img3} alt="" className="h-full w-full object-fill" />
            </div>
          </div>
          <div className="w-[414px] h-[286px] border border-[#0000001C] grid grid-cols-2 p-6 gap-y-5">
            <div className="">
              <p className="text-[19px] font-normal text-black">
                Nintendo Switch{" "}
              </p>
              <p className="text-[19px] font-normal text-black">Console</p>
              <p className="text-[20px] font-normal text-[#00CAD7]">
                Rs.65,208{" "}
              </p>
              <p className="text-[16px] font-normal text-black">
                Rs.<span className=" line-through">66,000</span>
              </p>
            </div>

            <SpecialOffer color="#00CAD7" />
            <div
              className="w-[137px] h-[91px] text-[24px] leading-[29px] flex justify-center items-center "
              style={{
                background: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
              }}>
              Save <br /> 10%
            </div>
            <div className="w-[192px] h-[120px]">
              <Image src={img5} alt="" className="h-full w-full object-fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
