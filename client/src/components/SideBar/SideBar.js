import React, { useState } from "react";
import { CATEGORIES } from "../../data";
import "./sideBar.css";

const images = [
  "bottlesthree.jpg",
  "differentBottles.jpg",
  "flowerPot.jpg",
  "redBottles.jpg",
  "wallthree.jpg",
];
let image = Math.floor(Math.random() * 5);

const SideBar = (props) => {
  const [showCategories, setShowcategories] = useState(false);

  return (
    <div className="mt-3 p-3 Sidebar border">
      <h3 className="text-center mt-1 lead">Follow Us</h3>
      <div className="Follow-Us">
        <button className="btn btn-text">
          <i className="bi bi-facebook text-primary"></i>
        </button>
        <button className="btn btn-text">
          {" "}
          <i className="bi bi-instagram"></i>
        </button>
        <button className="btn btn-text">
          {" "}
          <i className="bi bi-youtube text-danger"></i>
        </button>
        <button className="btn btn-text">
          {" "}
          <i className="bi bi-envelope"></i>
        </button>
      </div>
      <hr style={{ border: "1px solid black", width: "100%" }} />
      <h3 className="text-center mt-3 lead">Advertisement</h3>
      <a href="#1">
        <img
          src={require(`../../assets/images/${images[image]}`)}
          className="card-img-top img-fluid"
          alt="..."
          style={{ width: "100%", marginBottom: 20 }}
        />
      </a>
      {/* <hr style={{ border: "1px solid black", width: "100%" }} /> */}

      <video width="100%" controls autoPlay muted>
        <source
          src={require("../../assets/videos/advert.mp4")}
          type="video/mp4"
        />
      </video>
      <hr style={{ border: "1px solid black", width: "100%" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="text-center mt-3 mr-2 lead">Categories</h3>
        <i
          style={{ fontSize: 25, cursor: "pointer" }}
          className={`bi ${
            showCategories ? "bi-caret-up" : "bi-caret-down"
          } mt-3 mx-2`}
          onClick={() => setShowcategories(!showCategories)}
        ></i>
      </div>
      {showCategories && (
        <ul
          className="shadow mt-2"
          style={{ width: "100%", listStyle: "none", padding: 0 }}
        >
          {CATEGORIES.map((cat) => (
            <li
              key={cat}
              className="text-center border border-bottom Sidebar-Category-Item"
            >
              <button
                className="btn btn-text lead"
                onClick={() => props.categoriesPosts(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SideBar;
