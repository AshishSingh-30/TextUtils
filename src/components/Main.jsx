import React, { useState } from "react";

const Main = (props) => {
  const [text, setText] = useState("");

  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <h3>{props.heading}</h3>
          <textarea
            className="form-control"
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{text.split(" ").length * 0.008} Minutes read</p>
        <p>
          Preview: <span>{text}</span>
        </p>
      </div>
    </>
  );
};

export default Main;
