import React from "react";
import BlogItem from "../BlogItem/BlogItem";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import "./Blogs.css";
import HOSTURL from "../../Config";

const Blogs = (props) => {
  return (
    <div className="Blogs container">
      <div className="row">
        {props.blogs.length !== 0 ? (
          props.blogs.map((blog) => {
            if (blog.published) {
              return (
                <div className="col-sm-2 col-md-4 col-xl-3" key={blog.id}>
                  <ErrorBoundary>
                    <BlogItem
                      imgSrc={`${HOSTURL}/images/${blog.image}`}
                      title={blog.title}
                      content={blog.content}
                      category={blog.category}
                      cat={blog.category}
                      id={blog.id}
                    />
                  </ErrorBoundary>
                </div>
              );
            }
          })
        ) : (
          <h3 className="text-muted text-center">Loading...</h3>
        )}
      </div>
    </div>
  );
};

export default Blogs;
