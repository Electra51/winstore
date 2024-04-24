import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { bannerData } from "@/components/Common/StaticData";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  //slide setting
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => <div className="bar-indicator"></div>,
    afterChange: (currentSlide) => {
      setActiveSlide(currentSlide);
    },
  };
  //slide pass function
  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };
  return (
    <div className="relative overflow-hidden  h-[300px] lg:h-[380px] w-[390px] lg:w-full">
      <Slider {...settings} ref={sliderRef}>
        {bannerData?.map((e, i) => {
          return (
            <div key={i}>
              <div className="relative">
                <div className="w-[200px] lg:w-[460px] p-2 absolute top-5 lg:top-16 lg:left-60 left-5">
                  <p className="text-[24px] lg:text-[57px] font-normal leading-[27px] lg:leading-[53px]">
                    {e.title}
                    <span className="text-[#0AAEB9]">{e.title2}</span>
                  </p>

                  <div className="mt-2">
                    <p className="text-[14px] font-normal w-[210px] lg:w-[350px] leading-[15.94px]">
                      {e.subtitle1}
                    </p>
                    <p className="text-[14px] font-normal w-[210px] lg:w-[393px] leading-[15.94px]">
                      {e.subtitle2}
                    </p>
                  </div>
                  <button className="w-[100px] lg:w-[152px] h-[35px] lg:h-[40px] rounded-[5px] bg-[#14B1F0] text-white text-[12px] lg:text-[15px] font-normal flex justify-center items-center mt-2">
                    View More
                  </button>
                </div>
                <div>
                  <div className="h-[300px] lg:h-[380px] w-[390px] lg:w-full">
                    <Image
                      src={e?.image}
                      alt={e?.title}
                      className="h-full w-full object-cover lg:object-fill max-w-full max-h-full"
                    />
                  </div>
                  <div
                    className="w-[125px] lg:w-[165px] h-[129px] lg:h-[159px] rounded-full absolute top-10 right-7 lg:right-56 font-normal text-[30px] lg:text-[47px] leading-[47px] lg:leading-[57.63px] text-white flex justify-center items-center text-wrap"
                    style={{
                      background:
                        "linear-gradient(90deg, #FDC830 0%, #F37335 100%)",
                    }}>
                    {e?.discount}
                    <br />
                    Off
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      {/* slide indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div
          className="bar-indicator"
          onClick={() => goToSlide(0)}
          style={{
            backgroundColor: activeSlide === 0 ? "#034e53" : "#AA9393",
          }}></div>
        <div
          className="bar-indicator"
          onClick={() => goToSlide(1)}
          style={{
            backgroundColor: activeSlide === 1 ? "#034e53" : "#AA9393",
          }}></div>
        <div
          className="bar-indicator"
          onClick={() => goToSlide(2)}
          style={{
            backgroundColor: activeSlide === 2 ? "#034e53" : "#AA9393",
          }}></div>
      </div>
      <style jsx>{`
        .bar-indicator {
          width: 30px;
          height: 5px;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Banner;
