import "./post.css";
import "./contentStyles.css";
import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "../../component/header";

import editIcon from "../../asset/image/editIcon.svg";
import dragAndDropIcon from "../../asset/image/drag.svg";
import optionsIcon from "../../asset/image/options.svg";

const Tuple = (props) => {
  const [text, setText] = useState("ajgklfahptrgqhnjytgjeiawq");
  function handleKeyInput(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      props.addTuple(e.currentTarget.id);
    }

    if ((e.key === "Delete" || e.key === "Backspace") && text === "") {
      props.deleteTuple(e.currentTarget.id);
    }
  }

  return (
    <div className="tuple">
      <div className="options">
        <img src={dragAndDropIcon} alt="" />
        <img src={optionsIcon} alt="" />
      </div>

      <textarea
        className="default"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyInput}
        id={props.id}
        ref={props.inputRef}
      />
    </div>
  );
};
const Edit = () => {
  const [key, setKey] = useState(uuidv4());
  const [article, setArticle] = useState([
    <Tuple addTuple={addTuple} deleteTuple={deleteTuple} key={key} id={key} />,
  ]);

  useEffect(() => {
    if (document.getElementById(key)) document.getElementById(key).focus();
  }, [article, key]);

  function addTuple(id) {
    const newKey = uuidv4();
    setArticle((prevArticle) => {
      const index = prevArticle.findIndex((tuple) => tuple.key === id);
      return [
        ...prevArticle.slice(0, index + 1),
        <Tuple
          addTuple={addTuple}
          deleteTuple={deleteTuple}
          key={newKey}
          id={newKey}
        />,
        ...prevArticle.slice(index + 1),
      ];
    });
    setKey(newKey);
  }
  function deleteTuple(id) {
    setArticle((prevArticle) => {
      const prevTupleIndex =
        prevArticle.findIndex((tuple) => tuple.key === id) - 1;

      if (prevTupleIndex < 0) return prevArticle;
      setKey(prevArticle[prevTupleIndex].key);
      return prevArticle.filter((tuple) => tuple.key !== id);
    });
  }
  return (
    <div className="article">
      <textarea name="title" placeholder="TITLE" className="title" height="" />
      <div className="line"></div>
      <div className="tuples">{article}</div>
    </div>
  );
};

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
