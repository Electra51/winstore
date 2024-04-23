import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";
import Image from "next/image";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => <div className="bar-indicator"></div>,
    afterChange: (currentSlide) => {
      setActiveSlide(currentSlide);
    },
  };
  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };
  return (
    <div className="w-full relative">
      <Slider {...settings} ref={sliderRef}>
        <div>
          <div className="relative">
            <div className="w-[460px] p-2 absolute top-16 left-60">
              <p className="text-[57px] font-normal leading-[53px]">
                Shop{" "}
                <span className="text-[#0AAEB9]">Computer & experience </span>
              </p>

              <div className="mt-2">
                <p className="text-[14px] font-normal w-[393px] leading-[15.94px]">
                  You cannot inspect quality into the product; it is already
                  <br /> there.
                </p>
                <p className="text-[14px] font-normal w-[393px] leading-[15.94px]">
                  I am not a product of my circumstances. I am a product of my
                  decisions.
                </p>
              </div>
              <button className="w-[152px] h-[40px] rounded-[5px] bg-[#14B1F0] text-white text-[15px] font-normal flex justify-center items-center mt-2">
                View More
              </button>
            </div>
            <div>
              <div className="h-[380px] w-full">
                <Image src={banner1} className="h-full w-full object-fill" />
              </div>
              <div
                className="w-[165px] h-[159px] rounded-full absolute top-10 right-56 font-normal text-[47px] leading-[57.63px] text-white flex justify-center items-center text-wrap"
                style={{
                  background:
                    "linear-gradient(90deg, #FDC830 0%, #F37335 100%)",
                }}>
                40%
                <br />
                Off
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="w-[420px] mx-auto p-2 absolute top-20 left-1/2 transform -translate-x-1/2">
              <p className="text-[57px] font-normal leading-[53px] text-center">
                Shop{" "}
                <span className="text-[#ED9B82]">Computer & experience </span>
              </p>

              <div className="mt-2 text-center">
                <p className="text-[14px] font-normal w-[393px] leading-[15.94px]">
                  You cannot inspect quality into the product; it is already
                  <br /> there.
                </p>
                <p className="text-[14px] font-normal w-[393px] leading-[15.94px]">
                  I am not a product of my circumstances. I am a product of my
                  decisions.
                </p>
              </div>
              <button className="w-[152px] h-[40px] rounded-[5px] bg-[#ED9B82] text-white text-[15px] font-normal flex justify-center items-center mt-2 mx-auto">
                View More
              </button>
            </div>
            <div>
              <div className="h-[380px] w-full">
                <Image src={banner2} className="h-full w-full object-fill" />
              </div>
              <div
                className="w-[165px] h-[159px] rounded-full absolute top-10 right-56 font-normal text-[47px] leading-[57.63px] text-white flex justify-center items-center text-wrap"
                style={{
                  background:
                    "linear-gradient(90deg, #FDC830 0%, #F37335 100%)",
                }}>
                25%
                <br />
                Off
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="w-[420px] p-2 absolute top-16 left-60">
              <p className="text-[57px] font-normal leading-[53px]">
                Shop{" "}
                <span className="text-[#0AAEB9]">Computer & experience </span>
              </p>

              <div className="mt-2">
                <p className="text-[14px] font-normal w-[393px] leading-[15.94px]">
                  You cannot inspect quality into the product; it is already
                  <br /> there.
                </p>
                <p className="text-[14px] font-normal w-[393px] leading-[15.94px]">
                  I am not a product of my circumstances. I am a product of my
                  decisions.
                </p>
              </div>
              <button className="w-[152px] h-[40px] rounded-[5px] bg-[#14B1F0] text-white text-[15px] font-normal flex justify-center items-center mt-2">
                View More
              </button>
            </div>
            <div>
              <div className="h-[380px] w-full">
                <Image src={banner3} className="h-full w-full object-fill" />
              </div>
              <div
                className="w-[165px] h-[159px] rounded-full absolute top-10 right-56 font-normal text-[47px] leading-[57.63px] text-white flex justify-center items-center text-wrap"
                style={{
                  background:
                    "linear-gradient(90deg, #FDC830 0%, #F37335 100%)",
                }}>
                50%
                <br />
                Off
              </div>
            </div>
          </div>
        </div>
      </Slider>
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
          width: 30px; // Adjust width of the bar
          height: 5px; // Adjust height of the bar
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Banner;
