import React from "react";
import "./Gallery.css";
import Home from "../Home/Home";
// import Carousel from "../Carousel/Carousel";
// import Reviews from "../Reviews/Reviews";
import GalleryItems from "../GalleryItems/GalleryItems";

export default function Gallery() {
  return (
    <div className="display-3 text-center" style={{ marginTop: 65 }}>
      {/* <Carousel /> */}
      {/* <Reviews /> */}
      <h1 className="text-center text-muted mt-3">Gallery</h1>
      <Home>
        <GalleryItems />
      </Home>
    </div>
  );
}
