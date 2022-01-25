import DisplayBox from "./components/DisplayBox";
import Text from "./components/Text";
import Font from "./components/Font";
import FontSize from "./components/FontSize";
import ImgSize from "./components/ImgSize";
import Rotation from "./components/Rotation";
import TextColor from "./components/TextColor";
import Gallery from "./components/Gallery";

import { BiCrop } from "react-icons/bi";
import { BiText } from "react-icons/bi";
import { BiFontSize } from "react-icons/bi";
import { BiRotateRight } from "react-icons/bi";
import { BiColorFill } from "react-icons/bi";
import { BiFontFamily } from "react-icons/bi";

function App() {
  const showFeature = (e) => {
    console.log(e);
    var all_features = document.getElementsByClassName("features");
    for (let i = 0; i < all_features.length; i++) {
      all_features[i].style.display = "none";
    }
    document.getElementById(e).style.display = "block";
  };
  return (
    <div className="App">
      <div id="div1">
        <DisplayBox />
        <Gallery/>
      </div>

      <div id="div2">
        <div className="features" id="img_size">
          <ImgSize />
        </div>
        <div className="features" id="text">
          <Text />
        </div>
        <div className="features" id="font_size">
          <FontSize />
        </div>
        <div className="features" id="font">
          <Font />
        </div>
        <div className="features" id="text_color">
          <TextColor />
        </div>
        <div className="features" id="rotation">
          <Rotation />
        </div>
      </div>

      <div id="button_container">
        <div className="featureBtn" onClick={() => showFeature("img_size")}>
          <BiCrop className="icon" />
        </div>
        <div className="featureBtn" onClick={() => showFeature("text")}>
          <BiText className="icon" />
        </div>
        <div className="featureBtn" onClick={() => showFeature("font_size")}>
          <BiFontSize className="icon" />
        </div>
        <div className="featureBtn" onClick={() => showFeature("font")}>
          <BiFontFamily className="icon" />
        </div>
        <div className="featureBtn" onClick={() => showFeature("text_color")}>
          <BiColorFill className="icon" />
        </div>
        <div className="featureBtn" onClick={() => showFeature("rotation")}>
          <BiRotateRight className="icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
