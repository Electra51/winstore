import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { ImHeadphones } from "react-icons/im";
import { LuUser } from "react-icons/lu";
import cartLogo from "../../../assets/cart.png";
import { MdMenu } from "react-icons/md";
import {
  FaRegHeart,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import SocialIcon from "../SocialIcon";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    console.log("hi");
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <div className="bg-[#288d94eb] h-[20px]">
          <div className="flex gap-x-2 items-center justify-center h-[20px] py-1 text-white">
            <p className="text-[9px]">Call Us Now</p>
            <div className="flex justify-normal items-center">
              <ImHeadphones className="text-[12px]" />
              <p className="text-[13px] pl-[2px]">+011 5827918</p>
            </div>
            <p className="text-[13px]">Sign In</p>
          </div>
        </div>

        <div className="md:hidden bg-[#03484D] h-[60px]">
          <div className="flex justify-between items-center p-4 ">
            <div className="flex justify-normal" onClick={toggleDrawer}>
              <MdMenu className="text-3xl text-white" />
              <Image
                src={logo}
                width={100}
                alt="winstore-logo"
                className="mt-[-6px] ml-[-17px]"
              />
            </div>
            <div className="flex justify-normal items-center gap-2">
              <div className="flex justify-normal items-center gap-3 text-white">
                <LuUser className="text-[18px]" />
                <FaRegHeart className="text-[18px]" />
                <div className="flex justify-normal items-center gap-1">
                  <div className="relative">
                    <p className="text-[12px] text-yellow-300 absolute top-[-15px] right-1">
                      3
                    </p>
                    <Image src={cartLogo} alt="" width={18} />
                  </div>
                  <p className="text-[15px]">Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0E3B3E] h-[45px]">
          <div className="w-[380px] rounded-md relative mx-auto">
            <select
              className="w-[127px] h-[39px] rounded-l-md px-2"
              defaultValue="placeholder">
              <option>All categories</option>
              <option>hello</option>
              <option>hello</option>
            </select>
            <input
              type="text"
              placeholder="Search for products"
              className="w-[253px] h-[39px] rounded-r-md px-2"
            />
            <div className="absolute top-[1px] right-[1px] bg-[#B6B6B6] rounded-r-md">
              <div className="w-[43px] h-[37px] flex justify-center items-center rounded-r-md">
                <FiSearch className="text-2xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <div className="fixed top-0 left-0 h-screen w-64 bg-[#0E3B3E] z-50">
          {/* Drawer Content */}
          <div className="p-4">
            <div className="flex justify-between items-center mb-8">
              <Image src={logo} alt="winstore-logo" width={150} height={50} />
              <IoClose className="text-3xl text-white" onClick={toggleDrawer} />
            </div>

            <div className="flex flex-col gap-y-4 text-white">
              <p className="text-lg">Home</p>
              <p className="text-lg">Easy Monthly Installments</p>
              <p className="text-lg">Shop by Brands</p>
              <p className="text-lg">Become a Vendor</p>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex space-x-4 text-white">
              <FaFacebookF className="text-xl" />
              <FaTwitter className="text-xl" />
              <FaLinkedinIn className="text-xl" />
              <FaInstagram className="text-xl" />
            </div>
          </div>
        </div>
      )}

      <nav className="lg:flex hidden bg-[#03484D] h-[72px]">
        <div className="w-[1400px] mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex justify-normal items-center gap-12 h-[72px]">
              <Image src={logo} alt="winstore-logo" />
              <div className="w-[534px] rounded-md relative">
                <select
                  className="w-[157px] h-[39px] rounded-l-md px-2"
                  defaultValue="placeholder">
                  <option>All categories</option>
                  <option>hello</option>
                  <option>hello</option>
                </select>
                <input
                  type="text"
                  placeholder="Search for products"
                  className="w-[377px] h-[39px] rounded-r-md px-2"
                />
                <div className="absolute top-[1px] right-[1px] bg-[#B6B6B6] rounded-r-md">
                  <div className="w-[43px] h-[37px] flex justify-center items-center rounded-r-md">
                    <FiSearch className="text-2xl text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-normal items-center gap-16">
              <div className="flex flex-col gap-y-1 text-white">
                <p className="text-[9px]">Call Us Now</p>
                <div className="flex justify-normal items-center">
                  <ImHeadphones className="text-[24px]" />
                  <p className="text-[13px] pl-[2px]">+011 5827918</p>
                </div>
                <p className="text-[13px]">Sign In</p>
              </div>
              <div className="flex justify-normal items-center gap-7 text-white">
                <LuUser className="text-[24px]" />
                <FaRegHeart className="text-[24px]" />
                <div className="flex justify-normal items-center gap-1">
                  <div className="relative">
                    <p className=" text-yellow-300 absolute top-[-15px] right-1">
                      3
                    </p>
                    <Image src={cartLogo} alt="" />
                  </div>
                  <p className="text-[15px]">Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="lg:flex hidden h-[50px] bg-[#0E3B3E]"
        style={{
          boxShadow: "0px 4px 9px 0px #00000063",
        }}>
        <div className="w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex justify-normal items-center gap-9 text-white h-[50px]">
            <div className="flex justify-normal items-center gap-[12px]">
              <MdMenu className="text-[24px]" />
              <p className="text-[17px]">Brouse By Category</p>
            </div>
            <p className="text-[14px]">Home</p>
            <p className="text-[14px]">Easy Monthly Installments</p>
            <p className="text-[14px]">Shop by Brands</p>
            <p className="text-[14px]">Become a Vendor</p>
          </div>
          <SocialIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
