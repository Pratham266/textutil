import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase.", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces.", "success");
  };
  const handleCopyText=()=>{
    navigator.clipboard.writeText(text);

  };
  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear the text content.", "success");
  };

  const handleBlClick = () => {
    let newText = (document.getElementById("myBox").style.fontWeight = "500");
    console.log(newText);
    props.showAlert("Converted to Bold.", "success");
  };

  const handleOnChange = (event) => {
    //console.log('Onchange')
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#04152f" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#020e1f",
              color: props.mode === "dark" ? "white" : "#04152f",
            }}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-2"
          onClick={handleClClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-2"
          onClick={handleBlClick}
        >
          Bold Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-2"
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        {/* <button className="btn btn-primary mx-1" style={myStyle} onClick={toggleStyle}>{btntext}</button> */}
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#04152f" }}
      >
        <h3>You text summary</h3>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} chracters
        </p>
        <p>
          {text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length * 0.008}{" "}
          Minutes read
        </p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Enter text for Preview"}</p>
      </div>
    </>
  );
}
