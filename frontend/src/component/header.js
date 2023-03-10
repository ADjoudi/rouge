import React from "react";
import "./css/header.css";
import moment from "moment";

import newPost from "../asset/image/newPost.svg";
import settings from "../asset/image/settings.svg";
import archive from "../asset/image/archive.svg";
import profile from "../asset/image/profile.svg";
import logOut from "../asset/image/logOut.svg";

function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.visibility === "visible") {
    menu.style.visibility = "hidden";
  } else {
    menu.style.visibility = "visible";
  }
}

const Menu = () => {
  return (
    <div id="menu">
      <a href="/post">
        <img src={newPost} alt="" />
        <h2>NEW POST</h2>
      </a>
      <a href="/settings">
        <img src={settings} alt="" />
        <h2>SETTINGS</h2>
      </a>
      <a href="/archive">
        <img src={archive} alt="" />
        <h2>ARCHIVE</h2>
      </a>
      <a href="/profile">
        <img src={profile} alt="" />
        <h2>PROFILE</h2>
      </a>
      <a href="/logout">
        <img src={logOut} alt="" />
        <h2>LOG OUT</h2>
      </a>
    </div>
  );
};

const Header = (props) => {
  const dateFormatted = moment().format("dddd[,] Do [of] MMMM YYYY");

  if (true) {
    return (
      <div id="header">
        <h1 className="logo">ROUGE</h1>
        <h2 id="todayDate">{dateFormatted}</h2>
        <nav>
          <a href="/">Home</a>
          <img id="profileImage" alt="profile" onClick={toggleMenu} />
          <Menu />
        </nav>
      </div>
    );
  } else {
    return (
      <div id="header">
        <h1 className="logo">ROUGE</h1>
        <h2 id="todayDate">{dateFormatted}</h2>
        <nav>
          <a href="/">Home</a>
          <a href="/sign-up">
            <button>Sign up</button>
          </a>
        </nav>
      </div>
    );
  }
};

export default Header;
