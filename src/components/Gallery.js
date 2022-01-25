import React from "react";
import { useDispatch } from "react-redux";
import { GrGallery } from "react-icons/gr";

function Gallery() {
  const images = [
    "../Images/img1.jpg",
    "../Images/img2.jpg",
    "../Images/img3.jpg",
    "../Images/img4.jpg",
    "../Images/img5.jpg",
    "../Images/img6.jpg",
    "../Images/img7.jpg",
    "../Images/img8.jpeg",
    "../Images/img9.jpg",
    "../Images/img10.jpg",
    "../Images/img11.jpg",
    "../Images/img12.jpg",
    "../Images/img13.jpg",
    "../Images/img14.jpg",
    "../Images/img15.jpg",
    "../Images/img16.jpg",
    "../Images/img17.jpg",
    "../Images/img18.jpg",
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
