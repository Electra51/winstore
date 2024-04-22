import React from "react";
import Navbar from "../Common/Navbar/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="h-[100vh]">{children}</div>
      <h3>Footer</h3>
    </div>
  );
};

export default RootLayout;
