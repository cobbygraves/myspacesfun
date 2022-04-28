import React, { useCallback, useEffect, useState } from "react";
import "./PostItems.css";
import PostItem from "../PostItem/PostItem";
import axios from "axios";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import * as ActionCreators from "../../../redux/ActionCreators";
import HOSTURL from "../../../Config";

const PostItems = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const { showAlert } = bindActionCreators(ActionCreators, dispatch);
  const userDetails = localStorage.getItem("userDetails");
  const userDetailsFormatted = JSON.parse(userDetails);

  const loadPostAPI = useCallback(() => {
    try {
      axios.get(`${HOSTURL}/posts`).then((res) => {
        setPosts(res.data);
      });
    } catch (err) {
      showAlert(true, "#ff0000", "ERROR", "internal server error");
    }
  }, []);

  const deletePostHandler = (postID) => {
    axios
      .delete(`${HOSTURL}/posts/${postID}`, {
        headers: {
          authorization: `Bearer ${userDetailsFormatted.token}`,
        },
      })
      .then((res) => {
        showAlert(true, "#22b994", "SUCCESSS", "Post Deleted Successfully...");
      })
      .catch((err) => {
        showAlert(true, "#ff0000", "ERROR", "internal server error");
      });
  };

  const publishHandler = (id) => {
    const postsCopy = [...posts];
    const selectedPost = postsCopy.find((eachPost) => eachPost.id === id);
    selectedPost.published = !selectedPost.published;
    axios
      .put(`${HOSTURL}/posts/publish`, selectedPost, {
        headers: {
          authorization: `Bearer ${userDetailsFormatted.token}`,
        },
      })
      .then((res) =>
        showAlert(true, "#22b994", "SUCCESSS", "Post status changed")
      )
      .catch((err) =>
        showAlert(true, "#ff0000", "ERROR", "internal server error")
      );
  };

  useEffect(() => {
    loadPostAPI();
  }, []);

  return (
    <div className="Admin-Post-Items">
      <hr />
      {posts.length !== 0 ? (
        posts.map((post) => {
          return (
            <PostItem
              title={post.title}
              key={post.id}
              deletePost={deletePostHandler}
              id={post.id}
              pic={post.image}
              publish={publishHandler}
              isPublished={post.published}
            />
          );
        })
      ) : (
        <h3 className="text-muted text-center">Loading...</h3>
      )}
    </div>
  );
};

export default PostItems;
