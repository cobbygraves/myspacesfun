import React, { useState, useEffect } from "react";
import "./GalleryItems.css";
import axios from "axios";
import GalleryItem from "../GalleryItem/GalleryItem";
import HOSTURL from "../../config";

function GalleryItems() {
  const [galleryItems, setGalleryItems] = useState([]);

  const showImageHandler = (imageName) => {
    window.open(`${HOSTURL}/images/${imageName}`);
  };

  useEffect(() => {
    axios
      .get(`${HOSTURL}/media`)
      .then((res) => {
        setGalleryItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="Gallery-Items">
      {galleryItems ? (
        galleryItems.map((eachGallery) => (
          <GalleryItem
            key={eachGallery.id}
            description={eachGallery.title}
            photo={eachGallery.media}
            showImage={() => showImageHandler(eachGallery.media)}
          />
        ))
      ) : (
        <h2 className="text-muted text-center">loading gallery</h2>
      )}
    </div>
  );
}

export default GalleryItems;
