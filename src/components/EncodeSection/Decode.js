/** @format */

import React, { useState } from "react";
import "../EncodeSection/encode.css";

export default function Decode() {
  const [text, setText] = useState("");
  const handleSmallTextGenerator = (event) => {
    setText(event.target.value);
  };

  const handleEncoding = () => {
    const res = atob(text);
    document.getElementById("get_input").innerHTML = res;
  };
  const handleClear = () => {
    document.getElementById("get_input").innerHTML = "";
    document.getElementById("set_input").value = "";
    setText("");
  };
  return (
    <div>
      <h3>
        Enter <small>Text</small> Below
      </h3>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
        voluptas nisi tempore commodi nostrum doloribus repudiandae, aut quos
        illo nobis alias nam animi provident architecto consectetur esse
        sapiente voluptatem impedit.
      </p>
      <div className="holdsDivs">
        <div className="enterForEncode">
          <textarea
            className="form-control"
            rows="8"
            id="set_input"
            placeholder="Type copy or paste your text here to decode"
            onChange={handleSmallTextGenerator}
          ></textarea>

          <div className="encodeButtons">
            <button onClick={handleEncoding}>Decode</button>
            <button onClick={handleClear}>Clear</button>
          </div>
        </div>
        <div className="result">
          <textarea
            className="form-control"
            id="get_input"
            rows="8"
            readOnly
          ></textarea>
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
