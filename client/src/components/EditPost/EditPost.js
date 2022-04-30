import React, { useState, useEffect, useCallback } from "react";
import "./editPost.css";
import axios from "axios";
import * as ActionCreators from "../../redux/actionCreators";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import HOSTURL from "../../config";

const EditPost = (props) => {
  const dispatch = useDispatch();
  const { showAlert } = bindActionCreators(ActionCreators, dispatch);

  const [imageFile, setImageFile] = useState(props.image);
  const [isImageChanged, setIsImageChanged] = useState(false);
  const [id, setId] = useState(props.id);

  const [title, setTitle] = useState("");
  const [isValidTitle, setIsValidTitle] = useState(false);
  const [isTitleTouched, setIsTitleTouched] = useState(false);
  const [category, setCategory] = useState("");

  const [content, setContent] = useState("");
  const [isValidContent, setIsValidContent] = useState(false);
  const [isContentTouched, setIsContentTouched] = useState(false);

  const [formValid, setFormValid] = useState(false);

  const subFormHandler = (event) => {
    event.preventDefault();
    if (title === "" || content === "" || imageFile === null) {
      return;
    }

    const formData = new FormData();
    formData.append("id", id);
    formData.append("image", imageFile);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    const userDetails = localStorage.getItem("userDetails");
    const userDetailsFormatted = JSON.parse(userDetails);
    formData.append("author", userDetailsFormatted.username);

    axios
      .put(`${HOSTURL}/posts/update`, formData, {
        headers: {
          authorization: `Bearer ${userDetailsFormatted.token}`,
        },
      })
      .then((res) => {
        showAlert(true, "green", "SUCCESS", "post updated");
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

  const loadPost = useCallback(() => {
    try {
      axios.get(`${HOSTURL}/posts/${props.id}`).then((res) => {
        const postData = res.data;
        setTitle(postData.title);
        setContent(postData.content);
        setImageFile(postData.image);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
    setIsContentTouched(true);
  };

  const changeCategoryHandler = (event) => {
    setCategory(event.target.value);
  };

  const setImageHandler = (event) => {
    setImageFile(event.target.files[0]);
    setIsImageChanged(true);
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

  useEffect(() => {
    loadPost();
  }, []);

  return (
    <div className="Edit-Container">
      {!imageFile && isContentTouched && (
        <p className="text-danger Edit-Error">please select an image</p>
      )}
      {imageFile && isImageChanged ? (
        <img
          src={URL.createObjectURL(imageFile)}
          alt=""
          className="Edit-Image"
        />
      ) : (
        <img
          src={`${HOSTURL}/images/${imageFile}`}
          alt=""
          className="Edit-Image"
        />
      )}

      <form onSubmit={subFormHandler}>
        <div className="Admin-Post-Group">
          <label htmlFor="post-image" className="Edit-Label">
            <i className="bi bi-image"></i>
          </label>
          <input
            type="file"
            accept="image/*"
            id="post-image"
            style={{ display: "none" }}
            onChange={setImageHandler}
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
          <p className="text-danger Edit-Error">title is required</p>
        )}
        <textarea
          placeholder="Contents..."
          className="lead bg-light p-3 Edit-Content"
          value={content}
          onChange={contentChangeHandler}
        />
        {!isValidContent && isContentTouched && (
          <p className="text-danger Edit-Error">content is required</p>
        )}
        <div className="Edit-Category">
          <button
            type="submit"
            className="btn btn-secondary Create-Button"
            disabled={!formValid}
          >
            Update Post
          </button>
          <select onChange={changeCategoryHandler} className="Edit-Select">
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

export default EditPost;
