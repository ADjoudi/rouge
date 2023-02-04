import React from "react";
import "./profile.css";
import Header from "../../component/header";

import archiveIcon from "../../asset/image/archive.svg";
import bookmarkIcon from "../../asset/image/bookmarkEmpty.svg";
import commentsIcon from "../../asset/image/commentEmpty.svg";
import pointIcon from "../../asset/image/point.svg";

const Profile = (props) => {
  return (
    <div id="profile" onClick={props.hideMenu}>
      <Header />
      <div className="page">
        <h1 id="title">My Publications</h1>
        <div className="nav">
          <a>
            <img src={archiveIcon} alt="" />
            <h3>My Publications</h3>
          </a>
          <a>
            <img src={bookmarkIcon} alt="" />
            <h3>Bookmarks</h3>
          </a>
          <div className="subNav">
            <a>
              <img src={pointIcon} alt="" />
              <h3>Anchors</h3>
            </a>
            <a>
              <img src={pointIcon} alt="" />
              <h3>Pending</h3>
            </a>
            <a>
              <img src={pointIcon} alt="" />
              <h3>Finished</h3>
            </a>
          </div>
          <a>
            <img src={commentsIcon} alt="" />
            <h3>Comments</h3>
          </a>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
};

export default Profile;
