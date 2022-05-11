import axios from "axios";
import React, { useState, useEffect } from "react";
import "./CreatePost.css";
import * as ActionCreators from "../../../redux/ActionCreators";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import HOSTURL from "../../../config";

const CreatePost = () => {
  const dispatch = useDispatch();
  const { showAlert } = bindActionCreators(ActionCreators, dispatch);

  const [imageFile, setImageFile] = useState(null);

  const [title, setTitle] = useState("");
  const [isValidTitle, setIsValidTitle] = useState(false);
  const [isTitleTouched, setIsTitleTouched] = useState(false);

  const [content, setContent] = useState("");
  const [isValidContent, setIsValidContent] = useState(false);
  const [isContentTouched, setIsContentTouched] = useState(false);

  const [category, setCategory] = useState("");

  const [formValid, setFormValid] = useState(false);

  const addPostFormHandler = (event) => {
    event.preventDefault();
    if (title === "" || content === "" || imageFile === null) {
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    const userDetails = localStorage.getItem("userDetails");
    const userDetailsFormatted = JSON.parse(userDetails);
    formData.append("author", userDetailsFormatted.username);

    axios
      .post(`${HOSTURL}/posts/create`, formData, {
        headers: {
          authorization: `Bearer ${userDetailsFormatted.token}`,
        },
      })
      .then((res) => {
        showAlert(true, "green", "SUCCESS", "post created");
        setTitle("");
        setContent("");
        setImageFile(null);
        setFormValid(false);
        setIsContentTouched(false);
        setIsTitleTouched(false);
      })
      .catch((err) =>
        showAlert(true, "#ff0000", "UNAUTHORIZED", "Please Login")
      );
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    setIsTitleTouched(true);
  };

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
    setIsContentTouched(true);
  };

  const changeCategoryHandler = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    if (!isValidTitle || !isValidContent || !imageFile) {
      setFormValid(false);
      return;
    } else {
      setFormValid(true);
    }
  }, [isValidTitle, isValidContent, imageFile]);

  useEffect(() => {
    if (title !== "") {
      setIsValidTitle(true);
    } else {
      setIsValidTitle(false);
    }
  }, [title]);

  useEffect(() => {
    if (content !== "") {
      setIsValidContent(true);
    } else {
      setIsValidContent(false);
    }
  }, [content]);

  return (
    <div className="Admin-Create-Post">
      {!imageFile && isContentTouched && (
        <p className="text-danger Admin-Error">please select an image</p>
      )}
      {imageFile && <img src={URL.createObjectURL(imageFile)} alt="" />}

      <form onSubmit={addPostFormHandler}>
        <div className="Admin-Post-Group">
          <label htmlFor="post-image" className="Post-Label">
            <i className="bi bi-image"></i>
          </label>
          <input
            type="file"
            accept="image/*"
            id="post-image"
            style={{ display: "none" }}
            onChange={(event) => setImageFile(event.target.files[0])}
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
        <textarea
          placeholder="Contents..."
          className="Admin-Post-Content lead bg-light p-4"
          value={content}
          onChange={contentChangeHandler}
        />
        {!isValidContent && isContentTouched && (
          <p className="text-danger Admin-Error">content is required</p>
        )}
        <div className="Category">
          <button
            type="submit"
            className="btn btn-secondary Create-Button"
            disabled={!formValid}
          >
            Create Post
          </button>
          <select onChange={changeCategoryHandler} className="Create-Select">
            <option value="">select category</option>
            <option value="Hangout">Hangout</option>
            <option value="Home">Home</option>
            <option value="Office">Office</option>
            <option value="Kids">Kids</option>
            <option value="Mobility">Mobility</option>
            <option value="Outdoor">Outdoor</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
