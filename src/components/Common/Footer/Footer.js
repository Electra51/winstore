import React from "react";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import SocialIcon from "../SocialIcon";
import img1 from "../../../assets/footerImage/1.png";
import img2 from "../../../assets/footerImage/2.png";
import img3 from "../../../assets/footerImage/3.png";
import img4 from "../../../assets/footerImage/4.png";
const Footer = () => {
  return (
    <div className="mt-[200px]">
      <div className="h-[407px] bg-[#393939]">
        <div className="w-[1205px] mx-auto mt-[58px]">
          <div className="flex justify-between items-start ">
            <div>
              <Image src={logo} alt="" />
              <p className="text-[18px] font-normal text-[#00CAD7] leading-[17px] mt-[14px]">
                Got questions? Call us 24/7!
              </p>
              <div className="text-[13px] font-normal mt-[10px] text-white">
                <p>03 111 666 144</p>
                <p>0317 1777015.</p>
              </div>
              <div className="mt-[10px] text-white">
                <p className="text-[18px] font-normal text-[#00CAD7] ">
                  Contact info
                </p>
                <p className="text-[13px] font-normal ">info@winstore.pk</p>
              </div>
              <div className="mt-[10px]">
                <SocialIcon />
              </div>
            </div>
            <div>
              <p className="text-[18px] font-normal text-[#00CAD7] leading-[17px]">
                Trending
              </p>
              <div className="text-white space-y-3 mt-[21px]">
                <p className="text-[13px] font-normal">Installments</p>
                <p className="text-[13px] font-normal">Electronics</p>
                <p className="text-[13px] font-normal">Grocery</p>
                <p className="text-[13px] font-normal">Health & Beauty</p>
                <p className="text-[13px] font-normal">Home Appliances</p>
                <p className="text-[13px] font-normal">Mobile Accessories</p>
              </div>
            </div>
            <div>
              <p className="text-[18px] font-normal text-[#00CAD7] leading-[17px]">
                Information
              </p>
              <div className="text-white space-y-3 mt-[21px]">
                <p className="text-[13px] font-normal">About Us</p>
                <p className="text-[13px] font-normal">Contact Us</p>
                <p className="text-[13px] font-normal">FAQs</p>
                <p className="text-[13px] font-normal">Shipping & Return</p>
                <p className="text-[13px] font-normal">Privacy policy</p>
                <p className="text-[13px] font-normal">Terms & Conditions</p>
              </div>
            </div>
            <div>
              <p className="text-[18px] font-normal text-[#00CAD7] leading-[17px]">
                Customer Care
              </p>
              <div className="text-white space-y-3 mt-[21px]">
                <p className="text-[13px] font-normal">My Account</p>
                <p className="text-[13px] font-normal">Track Your Order</p>
                <p className="text-[13px] font-normal">Recently Viewed</p>
                <p className="text-[13px] font-normal">Wishlist</p>
                <p className="text-[13px] font-normal">Compare</p>
                <p className="text-[13px] font-normal">Become a Vendor</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center gap-[11px] mt-8">
            <Image src={img1} alt="" />
            <Image src={img2} alt="" />
            <Image src={img3} alt="" />
            <Image src={img4} alt="" />
          </div>
        </div>
      </div>
      <div className="h-[59px] flex justify-normal items-center bg-[#161616] font-normal text-[18px] leading-[17px] text-white">
        <p className="w-[1205px] mx-auto">
          © 2021 Winstore. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
