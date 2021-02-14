import React from "react";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Post = (props) => {
  return (
    <div className="content__postsBody__Post">
      <div className="content__postsBody__Post__author">
        <div className="author__left">
          <Avatar />
          <div className="author__left__userInfo">
            <span>{props.author}</span>
          </div>
        </div>
        <div className="author__right">
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      <div className="content__postsBody__Post__img">
        <img src={props.url} alt="Not Available" />
      </div>
      <div className="content__postsBody__Post__msg">
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Post;
