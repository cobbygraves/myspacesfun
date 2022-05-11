import React from "react";
import "./GalleryItem.css";

const GalleryItem = (props) => {
  return (
    <div className="Gallery-Item-Root">
      <img src={props.photo} alt="" />
      <p className="lead">{props.description}</p>
    </div>
  );
};

export default GalleryItem;
