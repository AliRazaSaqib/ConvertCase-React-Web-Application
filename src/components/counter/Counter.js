/** @format */

import React, { useState, useEffect, useRef } from "react";
import "../counter/Counter.css";

export default function Counter() {
  const [text, setText] = useState("");
  const ref = useRef();
  const [clickOutside, setclickOutside] = useState(false);

  // it will detect the click outside the component
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (clickOutside && ref.current && !ref.current.contains(e.target)) {
        setclickOutside(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    document.getElementById("successMessage").classList.add("d-none");
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [clickOutside]);

  //Convert Text to UpperCase
  const handleUpperCase = () => {
    let convertUpper = text.toLocaleUpperCase();
    setText(convertUpper);
  };

  //Convert Text to LowerCase
  const handleLowerCase = () => {
    let convertLower = text.toLocaleLowerCase();
    setText(convertLower);
  };

  //handleTitleCase text
  const handleTitleCase = () => {
    let titleCase = text
      .split(" ")
      .map((str) => str[0].toUpperCase() + str.substr(1).toLowerCase())
      .join(" ");
    setText(titleCase);
  };

  //handleSentenceCase text
  const handleSentenceCase = () => {
    let sentenceCase = text
      .toLowerCase()
      .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
        return c.toUpperCase();
      });

    setText(sentenceCase);
  };

  //Show text in invserCase
  const handleInverseCase = () => {
    let inverCase = text.split("").reverse().join("");
    setText(inverCase);
  };

  //Reset textArea
  const handleClearText = () => {
    setText("");
  };

  //Copy text to clipboard
  const handleClipBoard = () => {
    var copyText = document.getElementById("word_counter");

    copyText.select();
    copyText.setSelectionRange(0, 2000);
    navigator.clipboard.writeText(copyText.value);
    if (copyText) {
      document.getElementById("successMessage").classList.remove("d-none");
    }
  };

  //handleTextPreview after enter text
  const handleTextPreview = (preview) => {
    preview = text;
    console.log(preview);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);

    const textLength = document.getElementById("word_counter").value.length;
    if (textLength > 2000) {
      alert("You cannot enter more than 2000 characters, try one more time");
      setText("");
    }
  };

  return (
    <div ref={ref}>
      <div
        className="counter-main-div"
        onClick={() => setclickOutside((oldState) => !oldState)}
      >
        {/* <h2>{props.heading}</h2> */}
        <textarea
          className="form-control"
          id="word_counter"
          rows="8"
          value={text}
          onChange={handleOnChange}
          placeholder="Type copy or paste your content here"
        ></textarea>
      </div>
      <div className="show_message d-none mt-2" id="successMessage">
        Text Copy to Clickboard
      </div>

      <div className="mt-3 button_design">
        <button onClick={handleUpperCase}>ConvertToUpperCase</button>
        <button onClick={handleLowerCase}>ConvertToLowerCase</button>
        <button onClick={handleTitleCase}>TitleCase</button>
        <button onClick={handleSentenceCase}>SentenceCase</button>
        <button onClick={handleInverseCase}>InverCase</button>
        <button onClick={handleClearText}>ClearText</button>
        <button onClick={handleClipBoard}>ClearToClipBoard</button>
        <button onClick={handleTextPreview}>PreviewCompleteText</button>
      </div>
      <div className="mt-4 word_counter_show">
        <p>
          Character Count:
          <span className="charater-count">{text.length}</span>
          <span className="seperator">|</span>
        </p>
        <p>
          Word Count:
          <span className="word-count">{text.split(" ").length}</span>
          <span className="seperator">|</span>
        </p>
        <p>
          Line Count:
          <span className="word-count">{text.split("\n").length}</span>
        </p>
      </div>
    </div>
  );
}
