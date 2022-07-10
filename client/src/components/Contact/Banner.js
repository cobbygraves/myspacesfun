import React from "react";

const Banner = () => {
  return (
    <div style={{ position: "static", top: 0, left: 0 }}>
      <img
        src={require("../../assets/images/About-Banner.png")}
        style={{ width: "100%", height: 400 }}
      />
    </div>
  );
};

export default Banner;
