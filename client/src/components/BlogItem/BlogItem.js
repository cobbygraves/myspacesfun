/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./blogitem.css";
import { Link } from "react-router-dom";

const BlogItem = (props) => {
  return (
    <div
      className="card mt-3 mx-auto shadow"
      style={{ width: "100%", textAlign: "center" }}
    >
      <img
        src={props.imgSrc}
        className="card-img-top img-fluid"
        alt="..."
        style={{ width: "100%", height: 200 }}
      />
      <div className="card-body">
        <h5 className={`card-title ${props.cat} Card-Title`}>{props.title}</h5>
        <p className="card-text Card-Item-Preview">{props.content}</p>
        <Link to={`/post/${props.id}`}>
          <button className="btn btn-light text-muted">read more</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
