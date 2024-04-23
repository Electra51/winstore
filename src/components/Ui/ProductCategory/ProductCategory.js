import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../../assets/categoryImage/category1.png";
import img2 from "../../../assets/categoryImage/category2.png";
import img3 from "../../../assets/categoryImage/category3.png";
import img4 from "../../../assets/categoryImage/category4.png";
import Image from "next/image";
const ProductCategory = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div>
      <Slider {...settings} className="!w-[1500px] !mx-[auto] !px-[100px]">
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
              <div className="up-arrow "></div>
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
    </div>
  );
};

export default ProductCategory;
