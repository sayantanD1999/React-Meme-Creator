import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";

function DisplayBox() {
  const [src, setSrc] = useState("");
  const text = useSelector((state) => state.text);
  const textColor = useSelector((state) => state.textColor);
  const fontSize = useSelector((state) => state.fontSize);
  const font = useSelector((state) => state.font);

  const imgSelected = useSelector((state) => state.img);

  useEffect(() => {
    console.log(document.getElementById("img"));

    var dvPreview = document.getElementById("dvPreview");
    dvPreview.innerHTML = "";
    var img = document.createElement("IMG");
    img.id = "img";
    img.height = 100;
    img.width = 100;
    img.src = imgSelected;
    dvPreview.appendChild(img);
  }, [imgSelected]);

  const imgHeight = useSelector((state) => state.height);
  const imgWidth = useSelector((state) => state.width);
  const rotate = useSelector((state) => state.rotate);

  var x = "rotate(" + rotate + "deg)";

  console.log(rotate);

  const customStyleText = {
    color: textColor,
    fontFamily: font,
    fontSize: fontSize + "px",
    zIndex: 1,
  };

  const customStyleImg = {
    height: imgHeight,
    width: imgWidth,
    transform: x,
  };
  const cross = {
    marginTop: "20px",
  };

  const customStyle = {
    display: "flex",
    justifyContent: "space-around",
  };

  const download = () => {
    html2canvas(document.getElementById("box")).then(function (canvas) {
      // var c = document.querySelector("#meme canvas");
      // console.log(c);

      // let x = document.querySelector("canvas");
      // x.parentNode.removeChild(x);

      document.getElementById("meme").appendChild(canvas);

      console.log(canvas);
      document.getElementById("preview").style.width = "100%";
    });
  };

  const closePreview = () => {
    document.getElementById("preview").style.width = "0%";
  };

  window.onload = function () {
    var fileUpload = document.getElementById("fileupload");
    fileUpload.onchange = function () {
      if (typeof FileReader != "undefined") {
        var dvPreview = document.getElementById("dvPreview");
        dvPreview.innerHTML = "";
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
        for (var i = 0; i < fileUpload.files.length; i++) {
          var file = fileUpload.files[i];
          if (regex.test(file.name.toLowerCase())) {
            var reader = new FileReader();
            reader.onload = function (e) {
              setSrc(e.target.result);
              var img = document.createElement("IMG");
              img.id = "img";
              img.height = 100;
              img.width = 100;
              img.src = e.target.result;
              dvPreview.appendChild(img);
            };
            reader.readAsDataURL(file);
          } else {
            alert(file.name + " is not a valid image file.");
            dvPreview.innerHTML = "";
            return false;
          }
        }
      } else {
        alert("This browser does not support HTML5 FileReader.");
      }
    };
  };

  return (
    <div id="displayBox">
      <div className="top_btn_div">
        <input
          id="fileupload"
          type="file"
          multiple="multiple"
          className="custom-file-input"
          accept="image/*"
        />
        <input
          type="button"
          value="Convert to img"
          onClick={download}
          id="btnConvert"
        />
      </div>
      <br />

      <div id="box">
        <h3 style={customStyleText}>{text}</h3>
        <div id="dvPreview" style={customStyleImg}></div>
      </div>
      <div id="preview">
        <div style={customStyle}>
          <h3 style={{ color: "#ffff" }}>Long Press and download your meme</h3>
          <span className="icon" style={cross} onClick={closePreview}>
            &times;
          </span>
        </div>{" "}
        <hr />
        <div id="meme"></div>
      </div>
    </div>
  );
}

export default DisplayBox;
