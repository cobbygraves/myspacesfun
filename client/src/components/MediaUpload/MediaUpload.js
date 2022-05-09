import React, { useState, useEffect } from "react";
import "./MediaUpload.css";

const MediaUpload = (props) => {
  const [contentFile, setContentFile] = useState({});
  const [contentURL, setContentURL] = useState("");

  const [title, setTitle] = useState("");
  const [isValidTitle, setIsValidTitle] = useState(false);
  const [isTitleTouched, setIsTitleTouched] = useState(false);

  const [formValid, setFormValid] = useState(false);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    setIsTitleTouched(true);
  };

  useEffect(() => {
    if (!isValidTitle || !contentFile) {
      setFormValid(false);
      return;
    } else {
      setFormValid(true);
    }
  }, [isValidTitle, contentFile]);

  useEffect(() => {
    if (title !== "") {
      setIsValidTitle(true);
    } else {
      setIsValidTitle(false);
    }
  }, [title]);

  const addContentHandler = () => {};

  const imageChangeHandler = (event) => {
    if (event.target.files[0]) {
      const imgFile = event.target.files[0];
      const imageURL = URL.createObjectURL(imgFile);
      setContentFile(imgFile);
      setContentURL(imageURL);
    }
  };
  return (
    <div className="Admin-Create-Post">
      {!contentFile && isTitleTouched && (
        <p className="text-danger Admin-Error">
          please select an{" "}
          {(contentFile && contentFile.type === "image/jpeg") ||
          contentFile.type === "image/png"
            ? " Image"
            : " Video"}
        </p>
      )}
      {(contentFile && contentFile.type === "image/jpeg") ||
      contentFile.type === "image/png" ? (
        <img src={contentURL} alt="" />
      ) : (
        <video className="Upload-Video" src={contentURL} controls></video>
      )}

      <form onSubmit={addContentHandler}>
        <div className="Admin-Post-Group">
          <label htmlFor="media" className="Post-Label">
            <i className="bi bi-image"></i>
          </label>
          <input
            type="file"
            accept="image/*, video/mp4"
            id="media"
            style={{ display: "none" }}
            onChange={imageChangeHandler}
          />
          <input
            type="text"
            className="Admin-Post-Title"
            placeholder="Title"
            value={title}
            onChange={titleChangeHandler}
          />
        </div>
        {!isValidTitle && isTitleTouched && (
          <p className="text-danger Admin-Error">title is required</p>
        )}
        <button
          type="submit"
          className="btn btn-secondary Upload-Button"
          disabled={!formValid}
        >
          Add
          {(contentFile && contentFile.type === "image/jpeg") ||
          contentFile.type === "image/png"
            ? " Image"
            : " Video"}
        </button>
      </form>
    </div>
  );
};

export default MediaUpload;
