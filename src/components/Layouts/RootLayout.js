import React from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
