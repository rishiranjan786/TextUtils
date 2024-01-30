import React, { useState } from "react";
// import Alert from './Alert';

export default function Textarea(props) {
  
  const handleUpClick = () => {
    // console.log("click1")
    let upText = text.toUpperCase();
    setText(upText);
    // document.querySelector(".alertbox").style.display= "flex";
    props.showAlert("Converted into uppercase", "Success");
  };

  const handleLoClick = () => {
    let loText = text.toLowerCase();
    setText(loText);
    // document.querySelector(".alertbox").style.display= "flex";
    props.showAlert("Converted into lowercase", "Success");
  };

  const handleClearClick = () => {
    let clearText = "";
    setText(clearText);
    // document.querySelector(".alertbox").style.display= "flex";
    props.showAlert("All clear", "Success");
  };

  const handleOnChange = (event) => {
    // console.log("change")
    setText(event.target.value);
    // document.querySelector(".alertbox").style.display= "flex";
  };

  const handleCopy = () => {
    let text = document.getElementById("ta");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    // document.querySelector(".alertbox").style.display= "flex";
    props.showAlert("Copied data", "Success");
  };

  const handleSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    // document.querySelector(".alertbox").style.display= "flex";
    props.showAlert("Extra spaces has been removed", "Success");
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div id="contanior">
        <h1>{props.heading}</h1>
        <div>
          <textarea id="ta" value={text} onChange={handleOnChange}></textarea>
        </div>
        <div id="btn">
          <button disabled={text.length===0} id="btn1" onClick={handleUpClick}>Convert to uppercase</button>
          <button disabled={text.length===0} id="btn2" onClick={handleLoClick}>Convert to lowercase</button>
          <button disabled={text.length===0} id="btn3" onClick={handleClearClick}>Clear Text</button>
          <button disabled={text.length===0} id="btn4" onClick={handleCopy}>Copy</button>
          <button disabled={text.length===0} id="btn5" onClick={handleSpace}>Remove Spaces</button>
        </div>
      </div>
      <div id="contanior">
        <h1>Your Text Summary</h1>
        <p className="para">How many words: {text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words</p>
        <p className="para">How many characters: {text.length} characters</p>
        <p className="para">
          How many time to read: {0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes to
          read
        </p>
        <h2>Preview</h2>
        <p className="para">{text}</p>
      </div>
    </>
  );
}
