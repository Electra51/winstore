import React from "react";

const RootLayout = ({ children }) => {
  return (
    <div>
      <h2>Header</h2>
      <div className="h-[100vh]">{children}</div>
      <h3>Footer</h3>
    </div>
  );
};

export default RootLayout;
