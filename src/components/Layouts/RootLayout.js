import React from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="h-[100vh]">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
