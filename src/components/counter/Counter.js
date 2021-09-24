/** @format */

import React, { useState, useEffect, useRef } from "react";
import "../counter/Counter.css";
import Swal from "sweetalert2";

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

  //allert function
  const triggerAlert = () => {
    Swal.fire({
      title: "Please Enter text first than click on button",
      confirmButtonClass: "btn-dark",
    });
  };
  //for copyclipboard
  const clipBoardAlert = () => {
    Swal.fire({
      title: "There is no text to copy",
      confirmButtonClass: "btn-dark",
    });
  };

  //Convert Text to UpperCase
  const handleUpperCase = () => {
    let checkEmpty = document.getElementById("word_counter").value;
    let convertUpper = text.toLocaleUpperCase();
    if (checkEmpty === "") {
      triggerAlert();
    } else {
      setText(convertUpper);
    }
  };

  //Convert Text to LowerCase
  const handleLowerCase = () => {
    let checkEmpty = document.getElementById("word_counter").value;
    let convertLower = text.toLocaleLowerCase();
    if (checkEmpty === "") {
      triggerAlert();
    } else {
      setText(convertLower);
    }
  };

  //handleTitleCase text
  const handleTitleCase = () => {
    let checkEmpty = document.getElementById("word_counter").value;
    if (checkEmpty === "") {
      triggerAlert();
    } else {
      let titleCase = text
        .split(" ")
        .map((str) => str[0].toUpperCase() + str.substr(1).toLowerCase())
        .join(" ");
      setText(titleCase);
    }
  };

  //handleSentenceCase text
  const handleSentenceCase = () => {
    let checkEmpty = document.getElementById("word_counter").value;
    if (checkEmpty === "") {
      triggerAlert();
    } else {
      let sentenceCase = text
        .toLowerCase()
        .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
          return c.toUpperCase();
        });

      setText(sentenceCase);
    }
  };

  //Show text in invserCase
  let clicked = false;
  const handleInverseCase = () => {
    let checkEmpty = document.getElementById("word_counter").value;
    if (checkEmpty === "") {
      triggerAlert();
    } else if (clicked) {
      handleUpperCase();
      clicked = false;
    } else {
      handleLowerCase();
      clicked = true;
    }
  };

  //Reset textArea
  const handleClearText = () => {
    setText("");
  };

  //Copy text to clipboard
  const handleClipBoard = () => {
    let copyText = document.getElementById("word_counter");
    let checkEmpty = document.getElementById("word_counter").value;
    if (checkEmpty === "") {
      clipBoardAlert();
    } else {
      copyText.select();
      copyText.setSelectionRange(0, 2000);
      navigator.clipboard.writeText(copyText.value);
      if (copyText) {
        document.getElementById("successMessage").classList.remove("d-none");
      }
    }
  };

  //handleAlternateCase after enter text
  const handleAlternateCase = () => {
    let checkEmpty = document.getElementById("word_counter").value;
    if (checkEmpty === "") {
      triggerAlert();
    } else {
      let invString = (s) =>
        s.replace(/[a-z]/gi, (c) => c[`to${(s = !s) ? "Low" : "Upp"}erCase`]());
      setText(invString(text));
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div ref={ref}>
      <div
        className="counter-main-div"
        onClick={() => setclickOutside((oldState) => !oldState)}
      >
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
        <button onClick={handleAlternateCase}>AlternateCase</button>
        <button onClick={handleClipBoard}>ClearToClipBoard</button>
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
