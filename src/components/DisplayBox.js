import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import domtoimage from "dom-to-image";
import saveAs from "file-saver";

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
  // const deg =   useSelector((state) => state.deg);
  // const axis =   useSelector((state) => state.axis);

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

  const download = () => {
    domtoimage.toBlob(document.getElementById("box")).then(function (blob) {
      window.saveAs(blob, "mymeme.png");
    });
  };

  // const download = () => {
  //   html2canvas(document.getElementById("box"), {
  //     allowTaint: true,
  //     useCORS: true,
  //   }).then(function (canvas) {
  //     var anchorTag = document.createElement("a");
  //     document.body.appendChild(anchorTag);
  //     // document.getElementById("txt").style.marginTop = 300 + "px";
  //     anchorTag.download = "filename.jpg";
  //     anchorTag.href = canvas.toDataURL();
  //     anchorTag.target = "_blank";
  //     anchorTag.click();
  //   });
  // };

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
          value="Download"
          onClick={download}
          id="btnConvert"
        />
      </div>
      <br />
      <div id="box">
        <div id="textBox">
          <h3 style={customStyleText}>{text}</h3>
        </div>
        <div id="imgHolder">
          <div id="dvPreview" style={customStyleImg}></div>
        </div>
      </div>
    </div>
  );
}

export default DisplayBox;
