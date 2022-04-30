import React, { useCallback, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./singlepost.css";
import Home from "../home/home";
import SideBar from "../sidebar/sidebar";
import axios from "axios";
import HOSTURL from "../../config";

const SinglePost = (props) => {
  const { id } = useParams();

  const [selectedPost, setSelectedPost] = useState({
    id: "data5",
    title: "Your office organization",
    image: "pic.jpg",
    content:
      "Deserunt aliquip anim dolor tempor excepteur. Sint aliqua incididunt dolore qui.Consequat laboris dolor laborum Lorem est ut tempor ipsum.Ad elit esse est tempor irure consectetur.Proident excepteur duis consequat tempor ipsum non nulla est in ea amet mollit tempor. Anim reprehenderit ex aliquip sint amet ut ea ad reprehenderit ad.Lorem nisi nulla id sunt laborum enim ex amet.Sit tempor ullamco in qui.",
    category: "Home",
    author: "cobbygraves",
    date: { month: "July", year: "2019" },
  });

  const findPost = useCallback(() => {
    axios
      .get(`${HOSTURL}/posts/${id}`)
      .then((res) => {
        setSelectedPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    findPost();
  }, [findPost, id]);
  return (
    <div className="SinglePost">
      <Home>
        <div className="px-2 mt-3" style={{ width: "100%" }}>
          <img src={`${HOSTURL}/images/${selectedPost.image}`} alt="" />
          <div className="SinglePost-Details">
            <span>
              <b>Author: </b>
              <span className="text-muted">{selectedPost.author}</span>
            </span>
            <span>
              <b>Published: </b>{" "}
              <span className="text-muted">
                {selectedPost.date.month} {selectedPost.date.year}
              </span>
            </span>
          </div>
          <h2 className="mt-3">{selectedPost && selectedPost.title}</h2>
          <p>{selectedPost && selectedPost.content}</p>
        </div>

        <SideBar />
      </Home>
    </div>
  );
};

export default SinglePost;
