import React, { useState, useEffect } from "react";
import "./MediaUpload.css";
import axios from "axios";
import HOSTURL from "../../config";
import * as ActionCreators from "../../redux/ActionCreators";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

const MediaUpload = () => {
  const dispatch = useDispatch();
  const { showAlert } = bindActionCreators(ActionCreators, dispatch);

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

  const addContentHandler = (event) => {
    event.preventDefault();
    if (title === "" || contentFile === null) {
      return;
    }
    const userDetails = localStorage.getItem("userDetails");
    const userDetailsFormatted = JSON.parse(userDetails);
    const formData = new FormData();
    formData.append("image", contentFile);
    formData.append("title", title);
    axios
      .post(`${HOSTURL}/media/create`, formData, {
        headers: {
          authorization: `Bearer ${userDetailsFormatted.token}`,
        },
      })
      .then((res) => {
        showAlert(true, "green", "SUCCESS", "media created");
        setTitle("");
        setContentFile({});
      })
      .catch((err) => {
        showAlert(true, "#ff0000", "UNAUTHORIZED", "Please Login");
      });
  };

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
        <p className="text-danger Admin-Error">please select an image</p>
      )}
      {contentFile && <img src={contentURL} alt="" />}
      <form onSubmit={addContentHandler}>
        <div className="Admin-Post-Group">
          <label htmlFor="media" className="Post-Label">
            <i className="bi bi-image"></i>
          </label>
          <input
            type="file"
            accept="image/*"
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
          Add Media
        </button>
      </form>
    </div>
  );
};

export default MediaUpload;
