import React from "react";
import Banner from "../Banner";
import CardContent from "./CardContent";
import FindUs from "./FindUs";

const Contact = () => {
  return (
    <div
      className="mt-5 display-4 text-center"
      style={{ position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: "17vh",
          left: "7vw",
          width: "45vw",
          color: "#837977",
        }}
      >
        <h1
          className=" display-3"
          style={{ textAlign: "left", color: "#2D241D" }}
        >
          Get in touch
        </h1>
        <h4 className="mt-3" style={{ textAlign: "justify" }}>
          Want to hear from you? We'd love to do business with you. Here's how
          you can reach us...
        </h4>
      </div>
      <Banner image="About-Banner.png" />
      <CardContent />
      <FindUs />
    </div>
  );
};

export default Contact;
