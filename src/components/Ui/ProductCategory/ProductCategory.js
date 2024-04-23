import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../../assets/categoryImage/category1.png";
import img2 from "../../../assets/categoryImage/category2.png";
import img3 from "../../../assets/categoryImage/category3.png";
import img4 from "../../../assets/categoryImage/category4.png";
import Image from "next/image";
import { useGetCategoryQuery } from "@/Redux/api/api";
const ProductCategory = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  const { data, isError, isLoading, error } = useGetCategoryQuery();
  console.log("data", data);
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #F3EDC9 0%, rgba(255, 255, 255, 0) 100%)",
      }}>
      <Slider {...settings} className="!w-[1400px] !mx-[auto] !px-[55px] py-6">
        <div>
          <div className="h-[199px] w-[272px] relative">
            <Image src={img1} className="h-full w-full object-fill " />
            <div className="absolute bottom-6 left-[-10px]">
              <div
                className="w-[269px] h-[49px] flex justify-around items-center bg-[#FEF9F9F2]"
                style={{ boxShadow: "0px 1px 7px 0px #00000091" }}>
                <p className="text-[25px] text-[#000000] font-normal">
                  Electronics
                </p>
                <p className="text-[21px] text-[#14B1F0] font-normal">Shop</p>
              </div>
              <div className="up-arrow"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-[199px] w-[272px] relative">
            <Image src={img2} className="h-full w-full object-fill " />
            <div className="absolute bottom-6 left-[-10px]">
              <div
                className="w-[269px] h-[49px] flex justify-around items-center bg-[#FEF9F9F2]"
                style={{ boxShadow: "0px 1px 7px 0px #00000091" }}>
                <p className="text-[25px] text-[#000000] font-normal">
                  Electronics
                </p>
                <p className="text-[21px] text-[#14B1F0] font-normal">Shop</p>
              </div>
              <div className="up-arrow "></div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-[199px] w-[272px] relative">
            <Image src={img3} className="h-full w-full object-fill " />
            <div className="absolute bottom-6 left-[-10px]">
              <div
                className="w-[269px] h-[49px] flex justify-around items-center bg-[#FEF9F9F2]"
                style={{ boxShadow: "0px 1px 7px 0px #00000091" }}>
                <p className="text-[25px] text-[#000000] font-normal">
                  Electronics
                </p>
                <p className="text-[21px] text-[#14B1F0] font-normal">Shop</p>
              </div>
              <div className="up-arrow "></div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-[199px] w-[272px] relative">
            <Image src={img4} className="h-full w-full object-fill " />
            <div className="absolute bottom-6 left-[-10px]">
              <div
                className="w-[269px] h-[49px] flex justify-around items-center bg-[#FEF9F9F2]"
                style={{ boxShadow: "0px 1px 7px 0px #00000091" }}>
                <p className="text-[25px] text-[#000000] font-normal">
                  Electronics
                </p>
                <p className="text-[21px] text-[#14B1F0] font-normal">Shop</p>
              </div>
              <div className="up-arrow "></div>
            </div>
          </div>
        </div>
      </Slider>
      <style jsx>{`
        .up-arrow {
          position: absolute;
          left: -32px;
          bottom: 17px;
          width: 0;
          height: 0;
          border-left: 11px solid transparent;
          border-right: 0px solid transparent;
          border-bottom: 13px solid #220f0f;
          margin: 2rem;
        }
      `}</style>
      <div className="w-[1270px] h-[2px] bg-[#0000002B] mx-auto mt-[36px]"></div>
    </div>
  );
};

export default ProductCategory;
