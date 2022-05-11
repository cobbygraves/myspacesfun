import React, { useState } from "react";
import "./MediaItem.css";
import EditMedia from "../../EditMedia/EditMedia";

const MediaItem = (props) => {
  const [edit, setEdit] = useState(false);

  const editMediaHandler = () => {
    setEdit(!edit);
  };

  return (
    <div>
      <div className="Admin-Post-Item">
        <h4 className="lead">{props.title} </h4>
        <div className="Admin-Post-Buttons">
          <button
            className="me-4 btn-sm btn-outline-primary"
            onClick={editMediaHandler}
          >
            Edit<i className="bi bi-pencil-square"></i>
          </button>
          <button
            className="btn-sm btn-outline-danger"
            onClick={() => props.deleteMedia(props.id)}
          >
            Delete<i className="bi bi-trash3"></i>
          </button>
        </div>
      </div>
      <div>{edit && <EditMedia id={props.id} image={props.pic} />}</div>
      <hr />
    </div>
  );
};

export default MediaItem;
