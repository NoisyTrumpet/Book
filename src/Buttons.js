import React from "react";
import Icon from "./SVG/circle.svg";

const Buttons = ({ turnToNextPage, turnToPrevPage }) => {
  return (
    <div className="pageControls">
      <img
        className="prev navigation previous-button"
        src={Icon}
        onClick={turnToPrevPage}
        alt="Previous Page"
      />
      <img
        className="next navigation"
        src={Icon}
        onClick={turnToNextPage}
        alt="Next Page"
      />
    </div>
  );
};

export default Buttons;
