import React from "react";
import "./home.css";

const Home = (props) => {
  return (
    <div className="Home-Page" style={{ marginTop: 45, marginBottom: 75 }}>
      {props.children}
    </div>
  );
};

export default Home;
