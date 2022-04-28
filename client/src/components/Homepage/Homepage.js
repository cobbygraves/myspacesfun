import React, { useState, useEffect, useCallback } from "react";
import Carousel from "../Carousel/Carousel";
import Home from "../Home/Home";
import Blogs from "../Blogs/Blogs";
import SideBar from "../SideBar/SideBar";
import Reviews from "../Reviews/Reviews";
import axios from "axios";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import * as ActionCreators from "../../redux/ActionCreators";
import HOSTURL from "../../Config";

const Homepage = () => {
  const [blogs, setBlogs] = useState([]);
  const dispatch = useDispatch();
  const { showAlert } = bindActionCreators(ActionCreators, dispatch);

  const loadPosts = useCallback(() => {
    try {
      axios.get(`${HOSTURL}/posts`).then((res) => {
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
  }, []);

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <Carousel />
      <Reviews />
      <Home>
        <Blogs blogs={blogs} />
        <SideBar />
      </Home>
    </div>
  );
};

export default Homepage;
