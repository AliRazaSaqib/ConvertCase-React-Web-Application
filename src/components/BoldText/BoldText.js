/** @format */

import React, { useState } from "react";
import Swal from "sweetalert2";
import "../BoldText/boldText.css";

export default function BoldText() {
  const [text, setText] = useState("");

  const triggerAlert = () => {
    Swal.fire({
      title: "Please Enter text first than click on button",
      confirmButtonClass: "btn-dark",
    });
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    document.getElementById("set_input").value = "";
    setText("");
  };

  const handleTextBold = () => {
    let checkEmpty = document.getElementById("set_input").value;
    if (checkEmpty === "") {
      triggerAlert();
    } else {
      document.getElementById("set_input").style.fontWeight = "bold";
    }
  };
  return (
    <div>
      <h3>
        Make <small>Text</small> Bold
      </h3>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
        voluptas nisi tempore commodi nostrum doloribus repudiandae, aut quos
        illo nobis alias nam animi provident architecto consectetur esse
        sapiente voluptatem impedit.
      </p>
      <div className="holdsDivs">
        <div className="enterForEncode textBold">
          <textarea
            className="form-control"
            rows="8"
            id="set_input"
            placeholder="Type copy or paste your text here to make it bold"
            onChange={handleOnChange}
          ></textarea>

          <div className="encodeButtons">
            <button onClick={handleTextBold}>Bold</button>
            <button onClick={handleClear}>Clear</button>
          </div>
        </div>
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
