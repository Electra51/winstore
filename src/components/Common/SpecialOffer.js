import React from "react";

const SpecialOffer = ({ color }) => {
  return (
    <div>
      <p className={`text-[36px] font-normal`} style={{ color: `${color}` }}>
        Special
      </p>
      <p className="text-[36px] font-normal"> Offer</p>
    </div>
  );
};

export default SpecialOffer;
