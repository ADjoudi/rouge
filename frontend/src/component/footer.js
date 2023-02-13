import "./css/footer.css";
import React from "react";

const Footer = () => {
  const links = document.getElementsByTagName("button");
  console.log(links);
  const fillSpace = (e) => {
    for (let link of links) {
      if (link === e.currentTarget) {
        link.classList = "classFill";
      } else {
        link.classList = -"classFill";
      }
    }
  };
  return (
    <footer>
      <h3>Contact</h3>
      <section id="contactInfo">
        <button onMouseOver={fillSpace} className="classFill">
          Email
        </button>
        <button onMouseOver={fillSpace}>Github</button>
        <button onMouseOver={fillSpace}>LinkedIn</button>
      </section>
      <h3>My Other Projects</h3>
      <section id="projectLinks">
        <a href="/">Portfolio</a>
        <a href="/">Social.AD</a>
        <a href="/">Canvas.AD</a>
      </section>
    </footer>
  );
};

export default Footer;
