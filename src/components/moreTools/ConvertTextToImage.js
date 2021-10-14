/** @format */

import React, { useState } from "react";
import Swal from "sweetalert2";
import "../moreTools/MoreTools.css";
export default function ConvertTextToImage() {
  const [text, setText] = useState("");

  const triggerAlert = () => {
    Swal.fire({
      title: "Please Enter text first than click on button",
      confirmButtonClass: "btn-dark",
    });
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    if (text.length >= 50) {
      Swal.fire({
        title: "You can enter maximum 50 words to convert text into image",
        confirmButtonClass: "btn-dark",
      });
    }
  };

  const handleClear = () => {
    document.getElementById("set_input").value = "";
    setText("");
  };

  const handleTextToImage = () => {
    const checkEmpty = document.getElementById("set_input").value;
    if (checkEmpty == "") {
      triggerAlert();
    } else {
      let canvas = document.getElementById("textCanvas"),
        ctx = canvas.getContext("2d"),
        img = document.getElementById("image");

      const grow = (el) => {
        el.style.height = "10rem";
        el.style.height = el.scrollHeight + "px";
      };

      const generate = () => {
        let text = document
          .getElementById("set_input")
          .value.split("\n")
          .join("\n");
        let x = 12.5;
        let y = 15;
        let lineheight = 30;
        let lines = text.split("\n");
        let lineLengthOrder = lines.slice(0).sort(function (a, b) {
          return b.length - a.length;
        });
        ctx.canvas.width = ctx.measureText(lineLengthOrder[0]).width + 25;
        ctx.canvas.height = lines.length * lineheight;

        ctx.fillStyle = "#232323";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.textBaseline = "middle";
        ctx.font = "20px Anonymous Pro";
        ctx.fillStyle = "#BBBBBB";
        for (let i = 0; i < lines.length; i++)
          ctx.fillText(lines[i], x, y + i * lineheight);
        img.src = ctx.canvas.toDataURL();
      };
      document.getElementById("submit").addEventListener("click", function () {
        document.getElementById("image").style.display = "block";
      });
    }
    // } else {
    //   var ctx = document.getElementById("textCanvas").getContext("2d");
    //   var imageElem = document.getElementById("image");
    //   var atext = document.getElementById("set_input");

    //   //split text into lines and find the longest one
    //   let lines = atext.value.split("\n");
    //   ctx.font = "30px Verdana";
    //   let longest = lines.reduce((r, e) => (r.length < e.length ? e : r), "");
    //   ctx.fillStyle = "green";
    //   ctx.fillRect(10, 10, 150, 100);
    //   ctx.canvas.width = ctx.measureText(longest).width + 90;
    //   ctx.font = "30px Verdana";

    //   for (let i = 0; i < lines.length; i++) {
    //     ctx.fillText(lines[i], 20, 40 * i + 40);
    //   }
    //   imageElem.src = ctx.canvas.toDataURL();
    //   // console.log(imageElem.src);
    // }
  };

  // to chnage image div backgroud color in button click
  const lightGrayBackgroundColor = () => {
    document.getElementById("imageBackground").style.backgroundColor =
      "#ABB8C3";
    document.getElementById("imageBackground").style.color = "white";
  };
  const lightGreenBackgroundColor = () => {
    document.getElementById("imageBackground").style.backgroundColor =
      "#7BDCB5";
  };
  const lightBlueBackgroundColor = () => {
    document.getElementById("imageBackground").style.backgroundColor =
      "#8ED1FC";
  };
  const lightPinkBackgroundColor = () => {
    document.getElementById("imageBackground").style.backgroundColor =
      "#F78DA7";
  };
  const lightYellowBackgroundColor = () => {
    document.getElementById("imageBackground").style.backgroundColor =
      "#FCB900";
  };
  const lightPurpoleBackgroundColor = () => {
    document.getElementById("imageBackground").style.backgroundColor =
      "#D4C4FB";
  };
  const darkPurpoleBackgroundColor = () => {
    document.getElementById("imageBackground").style.backgroundColor =
      "#9900EF";
  };
  const LightYellowBackgroundColor = () => {
    document.getElementById("imageBackground").style.backgroundColor =
      "#DCE775";
  };

  return (
    <div>
      <h3>
        Show <small>Image</small> Below
      </h3>
      <div className="image_backgroundChnage">
        <button
          className="buttonDesign"
          id="lightGray"
          onClick={lightGrayBackgroundColor}
          style={{ backgroundColor: "#abb8c3" }}
        ></button>
        <button
          className="buttonDesign"
          id="lightGreen"
          onClick={lightGreenBackgroundColor}
          style={{ backgroundColor: "#7BDCB5" }}
        ></button>
        <button
          className="buttonDesign"
          id="lightBlue"
          onClick={lightBlueBackgroundColor}
          style={{ backgroundColor: "#8ED1FC" }}
        ></button>
        <button
          className="buttonDesign #F78DA7"
          id="lightPink"
          onClick={lightPinkBackgroundColor}
          style={{ backgroundColor: "#F78DA7" }}
        ></button>
        <button
          className="buttonDesign"
          id="lightPink"
          onClick={lightYellowBackgroundColor}
          style={{ backgroundColor: "#FCB900" }}
        ></button>
        <button
          className="buttonDesign #F78DA7"
          id="lightPink"
          onClick={darkPurpoleBackgroundColor}
          style={{ backgroundColor: "#9900EF" }}
        ></button>
        <button
          className="buttonDesign #F78DA7"
          id="lightPink"
          onClick={LightYellowBackgroundColor}
          style={{ backgroundColor: "#DCE775" }}
        ></button>
        <button
          className="buttonDesign #F78DA7"
          id="lightPink"
          onClick={lightPurpoleBackgroundColor}
          style={{ backgroundColor: "#d4c4fb" }}
        ></button>
        <p>Choose color to change image background </p>
      </div>
      <div className="holdsDivs">
        <canvas className="canvaWidth" id="textCanvas"></canvas>
        <div className="setImage" id="imageBackground">
          <img id="image" />
        </div>

        <div className="enterForEncode textBold">
          <textarea
            className="form-control"
            rows="8"
            id="set_input"
            placeholder="Type copy or paste your text here to make it Italic"
            onChange={handleOnChange}
          ></textarea>

          <div className="encodeButtons">
            <button onClick={handleTextToImage}>Convert</button>
            <button onClick={handleClear}>Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
}
