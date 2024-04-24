import Card from "@/components/Common/Card";
import SectionHeader from "@/components/Common/SectionHeader";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const NewArrivals = ({ arrivalProduct }) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
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

  return (
    <div className="w-[390px] lg:w-[1400px] mx-auto mt-[80px]">
      <div className="">
        <SectionHeader title1={"New"} titile2={"Arrivals"} />
        <Slider
          {...settings}
          className="w-[340px] lg:!w-[1400px] !mx-[auto] px-[20px] lg:!px-[10px] py-6 mb-3">
          {arrivalProduct?.slice(0, 10).map((data, i) => {
            return <Card data={data} key={i} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default NewArrivals;
