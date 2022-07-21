import React from "react";

const Banner = (props) => {
  return (
    <div style={{ position: "static", top: 0, left: 0 }}>
      <img
        src={require(`../assets/images/${props.image}`)}
        style={{ width: "100%", height: "75vh" }}
      />
    </div>
  );
};

export default Banner;
