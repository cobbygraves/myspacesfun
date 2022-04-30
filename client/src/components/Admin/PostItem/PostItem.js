import React, { useState } from "react";
import "./postItem.css";
import EditPost from "../../editPost/editPost";

const PostItem = (props) => {
  const [edit, setEdit] = useState(false);

  const editPostHandler = () => {
    setEdit(!edit);
  };

  return (
    <>
      <div className="Admin-Post-Item">
        <h4 className="lead">{props.title} </h4>
        <div className="Admin-Post-Buttons">
          <button
            className={
              props.isPublished
                ? "me-4 btn-sm btn-outline-warning"
                : "me-4 btn-sm btn-outline-success"
            }
            onClick={() => props.publish(props.id)}
          >
            {props.isPublished ? "unpublish" : "publish"}
            <i
              className={
                props.isPublished ? "bi bi-x-square" : "bi bi-check2-square"
              }
            ></i>
          </button>

          <button
            className="me-4 btn-sm btn-outline-primary"
            onClick={editPostHandler}
          >
            Edit<i className="bi bi-pencil-square"></i>
          </button>
          <button
            className="btn-sm btn-outline-danger"
            onClick={() => props.deletePost(props.id)}
          >
            Delete<i className="bi bi-trash3"></i>
          </button>
        </div>
      </div>
      <div>{edit && <EditPost id={props.id} image={props.pic} />}</div>
      <hr />
    </>
  );
};

export default PostItem;
