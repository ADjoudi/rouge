import React from "react";
import Header from "../../component/header";
import Footer from "../../component/footer";
import "./home.css";

const Home = (props) => {
  return (
    <div id="home" onClick={props.hideMenu}>
      <Header />
      <div id="content">
        <h1 className="title">FEATURED</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
