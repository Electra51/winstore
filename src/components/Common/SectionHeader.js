import React from "react";

const SectionHeader = ({ title1, titile2 }) => {
  return (
    <p className="text-[28px] font-normal">
      <span className="text-[#00CAD7] pl-10 lg:pl-2">{title1}</span> {titile2}
    </p>
  );
};

export default SectionHeader;
