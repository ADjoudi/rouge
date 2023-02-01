import "./landing.css";
import React from "react";
import track from "../../asset/image/track.svg";

import Header from "../../component/header";
import Footer from "../../component/footer";

function hideMenu(e) {
  const menu = document.getElementById("menu");
  if (
    e.target.id !== "menu" &&
    e.target.id !== "profileImage" &&
    menu.style.visibility === "visible"
  ) {
    menu.style.visibility = "hidden";
  }
}
const Landing = () => {
  return (
    <div id="landing" onClick={hideMenu}>
      <Header />
      <div id="content">
        <h1 className="hero">EXPRESSION</h1>
        <img id="track" src={track} alt="" />
        <div className="proposition">
          <h3>Broadcast your thoughts</h3>
          <p>
            The likelyhood of someone finding your post is non existing this
            site was made to showcase the developer’ ability to create a blogger{" "}
          </p>
          <button>Create an account</button>
        </div>
        <div className="proposition">
          <h3>Explore new ideas</h3>
          <p>
            The likelyhood of someone finding your post is non existing this
            site was made to showcase the developer’ ability to create a blogger{" "}
          </p>
          <button>Browse</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
