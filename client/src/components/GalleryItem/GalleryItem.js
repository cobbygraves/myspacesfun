import React from "react";
import "./GalleryItem.css";
import HOSTURL from "../../config";

const GalleryItem = (props) => {
  return (
    <div className="Gallery-Item-Root">
      <img
        src={`${HOSTURL}/images/${props.photo}`}
        alt=""
        onClick={props.showImage}
      />
      <p className="mt-2 lead">{props.description}</p>
    </div>
  );
};

export default GalleryItem;
