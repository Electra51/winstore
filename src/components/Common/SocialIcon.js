import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const SocialIcon = () => {
  return (
    <div className="flex justify-normal items-center gap-4 text-white">
      <FaFacebookF className="text-[24px]" />
      <FaTwitter className="text-[24px]" />
      <FaLinkedinIn className="text-[24px]" />
      <FaInstagram className="text-[24px]" />
    </div>
  );
};

export default SocialIcon;
