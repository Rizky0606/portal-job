import React from "react";
import Navbar from "../../organisms/Navbar";

const LandingPageTemplate = ({ children }) => {
  return (
    <div>
      <div className="bg-landingpage"></div>
      <Navbar />
      <div id="content">{children}</div>
    </div>
  );
};

export default LandingPageTemplate;
