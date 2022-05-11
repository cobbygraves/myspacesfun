import React, { useCallback, useEffect, useState } from "react";
import "./MediaItems.css";
import MediaItem from "../MediaItem/MediaItem";
import axios from "axios";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import * as ActionCreators from "../../../redux/ActionCreators";
import HOSTURL from "../../../config";

const MediaItems = () => {
  const [media, setMedia] = useState(null);
  const dispatch = useDispatch();
  const { showAlert } = bindActionCreators(ActionCreators, dispatch);
  const userDetails = localStorage.getItem("userDetails");
  const userDetailsFormatted = JSON.parse(userDetails);

  const loadMediaAPI = useCallback(() => {
    try {
      axios.get(`${HOSTURL}/media`).then((res) => {
        setMedia(res.data);
      });
    } catch (err) {
      showAlert(true, "#ff0000", "ERROR", "internal server error");
    }
  }, []);

  const deleteMediaHandler = (postID) => {
    axios
      .delete(`${HOSTURL}/media/${postID}`, {
        headers: {
          authorization: `Bearer ${userDetailsFormatted.token}`,
        },
      })
      .then((res) => {
        showAlert(true, "#22b994", "SUCCESSS", "Media Deleted Successfully...");
      })
      .catch((err) => {
        showAlert(true, "#ff0000", "ERROR", "internal server error");
      });
  };

  useEffect(() => {
    loadMediaAPI();
  }, []);

  return (
    <div className="Admin-Post-Items">
      <hr />
      {media ? (
        media.map((mediaItem) => {
          return (
            <MediaItem
              title={mediaItem.title}
              key={mediaItem.id}
              deleteMedia={deleteMediaHandler}
              id={mediaItem.id}
              pic={mediaItem.media}
            />
          );
        })
      ) : (
        <h3 className="text-muted text-center">Loading...</h3>
      )}
    </div>
  );
};

export default MediaItems;
