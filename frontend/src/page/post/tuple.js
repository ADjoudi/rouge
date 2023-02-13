import React from "react";
import "./tuple.css";

import dragAndDropIcon from "../../asset/image/drag.svg";
import optionsIcon from "../../asset/image/options.svg";

const Tuple = ({
  addTuple,
  deleteTuple,
  tuple,
  isEditable,
  saveTextStateChange,
}) => {
  function handleKeyInput(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addTuple(e.currentTarget.id);
      return;
    }
    if (
      (e.key === "Delete" || e.key === "Backspace") &&
      e.currentTarget.textContent === ""
    ) {
      deleteTuple(e.currentTarget.id);
      return;
    }
    if (e.key === "Tab") {
    }
  }
  return (
    <div className="tuple">
      <div className="options">
        <img src={dragAndDropIcon} alt="" />
        <img src={optionsIcon} alt="" />
      </div>
      <div className="tupleContent">
        {React.createElement(
          tuple.type,
          {
            id: tuple.id,
            tabIndex: "0",
            onKeyDown: handleKeyInput,
            onFocus: isEditable,
            onBlur: saveTextStateChange,
          },
          tuple.value
        )}
      </div>
    </div>
  );
};

export default Tuple;
