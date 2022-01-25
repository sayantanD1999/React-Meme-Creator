// const to_po = (e) => {
//   return e;
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "setText":
      return { ...state, text: action.val };
    case "setTextColor":
      return { ...state, textColor: action.val };
    case "setFont":
      return { ...state, font: action.val };
    case "setFontSize":
      return { ...state, fontSize: action.val };
    case "setRotate":
      return { ...state, rotate: action.val };
    case "size":
      return {
        ...state,
        height: action.val.height + "%",
        width: action.val.width + "%",
      };
    case "setImg":
      return { ...state, img: action.val };

    default:
      return state;
  }
};

const initialState = {
  text: "Sample Text",
  textColor: "black",
  font: "san-serif",
  fontSize: 20,
  height: 60 + "%",
  width: 60 + "%",
  rotate: 0,
  deg: 0,
  axis: "rotateY",
  img: " ",
};

export default reducer;
