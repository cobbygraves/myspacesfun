import React from "react";
import "./Home.css";

const Home = (props) => {
  return (
    <div className="Home-Page" style={{ marginTop: 45, marginBottom: 75 }}>
      {props.children}
    </div>
  );
};

export default Home;
