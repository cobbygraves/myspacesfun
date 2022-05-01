import React, { useState, useEffect, useCallback } from "react";
import Carousel from "../Carousel/Carousel";
import Home from "../Home/Home";
import Blogs from "../Blogs/Blogs";
import SideBar from "../Sidebar/Sidebar";
import Reviews from "../Reviews/Reviews";
import axios from "axios";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import * as ActionCreators from "../../redux/ActionCreators";
import HOSTURL from "../../config";

const Homepage = () => {
  const [blogs, setBlogs] = useState([]);
  const [catTitle, setCatTitle] = useState("");
  const dispatch = useDispatch();
  const { showAlert } = bindActionCreators(ActionCreators, dispatch);

  const categoriesHandler = (postCat) => {
    try {
      axios.get(`${HOSTURL}/posts/category/${postCat}`).then((res) => {
        setCatTitle(postCat);
        setBlogs(res.data);
      });
    } catch (err) {
      showAlert(
        true,
        "#ff0000",
        "SERVER ERROR",
        "Something was wrong with the server"
      );
    }
  };

  const loadPosts = useCallback(() => {
    try {
      axios.get(`${HOSTURL}/posts`).then((res) => {
        setBlogs(res.data);
        setCatTitle("Home");
      });
    } catch (err) {
      showAlert(
        true,
        "#ff0000",
        "SERVER ERROR",
        "Something was wrong with the server"
      );
    }
  }, []);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <div>
      <Carousel />
      <Reviews />
      <h3 className="text-center text-muted mt-2">{catTitle}</h3>
      <Home>
        <Blogs blogs={blogs} />
        <SideBar categoriesPosts={categoriesHandler} />
      </Home>
    </div>
  );
};

export default Homepage;
