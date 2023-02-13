import React, { useState, useEffect } from "react";
import "./edit.css";
import { v4 as uuidv4 } from "uuid";

import Tuple from "./tuple";

const Edit = () => {
  /*article
  article = {
    id: uuidv4()
    title: article title,
    content: text array
  }
  */
  /*text is ordered and styled depending on type
 text = [
   {
     id: uuidv4()
     type: sematic Html,
     value: text content
    },
    {
      id: uuidv4()
      type: sematic Html,
      value: text content
    }
  ]
  */
  const [key, setKey] = useState(uuidv4());
  const [title, setTitle] = useState("TITLE");
  const [text, setText] = useState([{ id: key, type: "p", value: "" }]);
  const [article, setArticle] = useState({ id: uuidv4(), title, text });

  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementById(key);
      element.focus();
    }, 0);
  }, [key]);
  useEffect(() => {
    setArticle((prevArticle) => {
      return { ...prevArticle, title, text };
    });
  }, [title, text]);

  function addTuple(id) {
    const newKey = uuidv4();
    setKey(newKey);

    setText((prevText) => {
      const index = prevText.findIndex((tuple) => tuple.id === id);

      return [
        ...prevText.slice(0, index + 1),
        {
          id: newKey,
          type: "p",
          value: "",
        },
        ...prevText.slice(index + 1),
      ];
    });
  }
  function deleteTuple(id) {
    const currentIdIndex = text.findIndex((tuple) => tuple.id === id);
    if (currentIdIndex === 0) return;
    const prevTupleIndex = currentIdIndex - 1;

    setText((prevText) => {
      return prevText.filter((tuple) => tuple.id !== id);
    });
    setKey(text[prevTupleIndex].id);
  }
  function saveTitleStateChange(e) {
    isNotEditable(e);
    setTitle(e.currentTarget.textContent);
  }
  function saveTextStateChange(e) {
    isNotEditable(e);
    const id = e.currentTarget.id;
    const add = e.currentTarget.textContent;

    setText((prevText) =>
      prevText.map((tuple) => {
        if (tuple.id === id) {
          return { ...tuple, value: add };
        }
        return tuple;
      })
    );
  }
  function isEditable(e) {
    e.currentTarget.contentEditable = true;
    // start typing here after focus
  }
  function isNotEditable(e) {
    e.currentTarget.contentEditable = false;
    console.log(article);
  }
  return (
    <div className="article">
      <h1
        name="title"
        className="title"
        tabIndex="0"
        onFocus={isEditable}
        onBlur={saveTitleStateChange}
      >
        {title}
      </h1>
      <div className="line"></div>
      <div className="tuples">
        {text.map((tuple) => (
          <Tuple
            key={tuple.id}
            tuple={tuple}
            addTuple={addTuple}
            deleteTuple={deleteTuple}
            isEditable={isEditable}
            saveTextStateChange={saveTextStateChange}
          />
        ))}
      </div>
    </div>
  );
};
export default Edit;
