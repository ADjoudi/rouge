import "./post.css";
import React from "react";

import Header from "../../component/header";
import Edit from "./edit";

import editIcon from "../../asset/image/editIcon.svg";

const Post = (props) => {
  return (
    <div id="postPage" onClick={props.hideMenu}>
      <Header />
      <div className="content">
        <div className="header">
          <nav>
            <a href="/profile">Archive</a>
            <span>/</span>
            <a href="/profile">New article</a>
            <img src={editIcon} alt="" />
          </nav>
          <div className="action">
            <a href="/preview">preview</a>
            <button>Publish</button>
          </div>
        </div>
        <Edit />
      </div>
    </div>
  );
};

export default Post;
