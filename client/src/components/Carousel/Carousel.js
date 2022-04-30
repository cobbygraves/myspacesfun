import React from "react";
import { REVIEWS } from "../../data";
import "./carousel.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      style={{ boxShadow: "0px 0px 15px #000000" }}
    >
      <div className="carousel-inner">
        {REVIEWS.map((review) => (
          <div
            className={`carousel-item ${review.active}`}
            key={review.image}
            style={{ position: "relative", height: "55vh" }}
          >
            <img
              src={require(`../../assets/images/${review.image}`)}
              className="w-100"
              style={{ height: "100%", marginTop: 50 }}
              alt="..."
            />
            <div className="Carousel-Description">
              <h3 className="text-center display-5 text-light">
                {review.content}
              </h3>
              <button
                className="btn btn-outline-light mt-3"
                style={{
                  width: "125px",
                  boxShadow: "0px 0px 15px #ffffff",
                }}
              >
                View Space
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
