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
import Link from "next/link";

const ProductCategory = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { data, isError, isLoading, error } = useGetCategoryQuery();

  const getImageForCategory = (category) => {
    switch (category) {
      case "electronics":
        return img1;
      case "men's clothing":
        return img2;
      case "women's clothing":
        return img3;
      case "jewelery":
        return img4;
      default:
        return img4;
    }
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #F3EDC9 0%, rgba(255, 255, 255, 0) 100%)",
      }}
      className="px-4 md:px-8 lg:px-12 xl:px-20 py-6">
      <Slider
        {...settings}
        className="w-[330px] lg:!w-[1400px] !mx-[auto] px-[20px] lg:!px-[10px] py-6 mb-3">
        {data?.map((e, i) => {
          console.log("e", e);
          return (
            <div>
              <div className="h-[199px] w-[260px] lg:w-[272px] relative">
                <Image
                  src={getImageForCategory(e)}
                  className="h-full w-full object-fill"
                />

                <div className="absolute bottom-6 left-[-10px]">
                  <div
                    className="w-[269px] h-[49px] flex justify-around items-center bg-[#FEF9F9F2]"
                    style={{ boxShadow: "0px 1px 7px 0px #00000091" }}>
                    <p className="text-[25px] text-[#000000] font-normal">
                      {e.charAt(0).toUpperCase() + e.slice(1)}
                    </p>
                    <Link
                      href={`/products/category/${e}`}
                      className="text-[21px] text-[#14B1F0] font-normal">
                      Shop
                    </Link>
                  </div>
                  <div className="up-arrow"></div>
                </div>
              </div>
            </div>
          );
        })}
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
      <div className="w-[330px] lg:w-[1270px] mx-auto h-[2px] bg-[#0000002B] mt-6"></div>
    </div>
  );
};

export default ProductCategory;
