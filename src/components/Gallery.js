import React from "react";
import { useDispatch } from "react-redux";
import { GrGallery } from "react-icons/gr";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";
import img4 from "./Images/img4.jpg";
import img5 from "./Images/img5.jpg";
import img6 from "./Images/img6.jpg";
import img7 from "./Images/img7.jpg";
import img8 from "./Images/img8.jpeg";
import img9 from "./Images/img9.jpg";
import img10 from "./Images/img10.jpg";
import img11 from "./Images/img11.jpg";
import img12 from "./Images/img12.jpg";
import img13 from "./Images/img13.jpg";
import img14 from "./Images/img14.jpg";
import img15 from "./Images/img15.jpg";
import img16 from "./Images/img16.jpg";
import img17 from "./Images/img17.jpg";
import img18 from "./Images/img18.jpg";
import img19 from "./Images/img19.jpg";
import img20 from "./Images/img20.jpg";
import img21 from "./Images/img21.jpg";

function Gallery() {
  // const images = [
  //   "Images/img1.jpg",
  //   "../Images/img2.jpg",
  //   "../Images/img3.jpg",
  //   "../Images/img4.jpg",
  //   "../Images/img5.jpg",
  //   "../Images/img6.jpg",
  //   "../Images/img7.jpg",
  //   "../Images/img8.jpeg",
  //   "../Images/img9.jpg",
  //   "../Images/img10.jpg",
  //   "../Images/img11.jpg",
  //   "../Images/img12.jpg",
  //   "../Images/img13.jpg",
  //   "../Images/img14.jpg",
  //   "../Images/img15.jpg",
  //   "../Images/img16.jpg",
  //   "../Images/img17.jpg",
  //   "../Images/img18.jpg",
  // ];

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
  ];

  const dispatch = useDispatch();
  const setImg = (e) => {
    console.log(e);
    dispatch({
      type: "setImg",
      val: e,
    });
    closeGallery();
  };

  const showGallery = () => {
    document.getElementById("gallery").style.width = "100%";
  };

  const closeGallery = () => {
    document.getElementById("gallery").style.width = "0%";
  };

  const customStyle = {
    display: "flex",
    justifyContent: "space-around",
  };
  const cross = {
    marginTop: "20px",
  };
  return (
    <div>
      <button onClick={showGallery} id="gallery_button">
        <GrGallery className="icon" />
      </button>
      <div id="gallery">
        <div style={customStyle}>
          <h2 style={{ color: "#ffff" }}>Popular Meme Templates</h2>
          <span className="icon" style={cross} onClick={closeGallery}>
            &times;
          </span>
        </div>{" "}
        <hr />
        {/* <img src={img1} alt="" /> */}
        <div id="gallery_img_holder">
          {images.map((img, index) => {
            return (
              <div className="img_div">
                <img
                  className="template_img"
                  src={img}
                  key={index}
                  onClick={() => {
                    setImg(img);
                  }}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
