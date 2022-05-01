import React from "react";
import ReactDOM from "react-dom";
import "./Alert.css";

const Alert = (props) => {
  const contents = (
    <div
      className="Alert-Root fixed-bottom mx-auto"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div
        className={
          "d-flex justify-content-between pt-2 px-2 text-light  rounded "
        }
        style={{ backgroundColor: props.color }}
      >
        <i className="bi bi-exclamation-triangle-fill"></i>
        <p>
          <strong>{props.title}</strong>
        </p>
        <button
          onClick={props.closeAlert}
          type="button"
          className="btn-close"
          aria-label="Close"
        ></button>
      </div>
      <p className="py-3 px-1 text-center border-1 bg-light text-dark">
        {props.message}
      </p>
    </div>
  );

  return ReactDOM.createPortal(contents, document.querySelector("#toast"));
};

export default Alert;
