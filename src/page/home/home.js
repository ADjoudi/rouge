import React from "react";
import Header from "../../component/header";
import Footer from "../../component/footer";
import "./home.css";

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
const Home = () => {
  return (
    <div id="home" onClick={hideMenu}>
      <Header />
      <div id="content">
        <h1 className="title">FEATURED</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
