import React from "react";
import OwlCarousel from "react-owl-carousel";
import "./Reviews.css";

const Reviews = () => {
  const options = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 3,
      },
      400: {
        items: 3,
      },
      600: {
        items: 3,
      },
      800: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  };

  return (
    <div className="slider">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="text-muted text-center my-2">Products Listing</h4>
            <OwlCarousel
              className="slider-items owl-carousel"
              {...options}
              id="slider_cat"
            >
              <div className="item">
                <div className="cat_box">
                  <div className="cate-box1">
                    <div className="cat_offer_text">
                      <img
                        src={require("../../assets/images/crysler.jpg")}
                        alt="abc"
                      />
                      <h5 className="small">Dad to be reunited with twins</h5>
                      {/* <!-- <div className="all_items">45 item</div> --> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="cat_box">
                  <div className="cate-box1">
                    <div className="cat_offer_text">
                      <img
                        src={require("../../assets/images/wallthree.jpg")}
                        alt="abc"
                      />
                      <h5 className="small">Afternoon trivia challenge</h5>
                      {/* <!-- <div className="all_items">49 item</div> --> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="cat_box">
                  <div className="cate-box1">
                    <div className="cat_offer_text">
                      <img
                        src={require("../../assets/images/car.jpg")}
                        alt="abc"
                      />
                      <h5 className="small">
                        Fisheran witness rare sight of white shark
                      </h5>
                      {/* <!-- <div className="all_items">7 item</div> --> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="cat_box">
                  <div className="cate-box1">
                    <div className="cat_offer_text">
                      <img
                        src={require("../../assets/images/bedroom.jpg")}
                        alt="abc"
                      />
                      <h5 className="small">The subrau legacy is no more</h5>
                      {/* <!-- <div className="all_items">19 item</div> --> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="cat_box">
                  <div className="cate-box1">
                    <div className="cat_offer_text">
                      <img
                        src={require("../../assets/images/space4.jpg")}
                        alt="abc"
                      />
                      <h5 className="small">
                        Many losers if Austria snares rugby
                      </h5>
                      {/* <!-- <div className="all_items">40 item</div> --> */}
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
