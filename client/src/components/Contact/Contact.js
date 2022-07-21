import React from "react";
import Banner from "../Banner";
import CardContent from "./CardContent";
import FindUs from "./FindUs";

const Contact = () => {
  return (
    <div className="mt-5 display-4 text-center">
      <Banner image="About-Banner.png" />
      <CardContent />
      <FindUs />
    </div>
  );
};

export default Contact;
