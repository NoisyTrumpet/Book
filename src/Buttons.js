import React from "react";
import Icon from './SVG/circle.svg'
import $ from "jquery";

import "turn.js"


const Buttons = () => {

    return (
        <div className="pageControls">
            <img className="prev navigation previous-button" src={Icon} onClick={() => $('.magazine').turn('previous')} alt="Previous Page" />
            <img className="next navigation" src={Icon} onClick={() => $('.magazine').turn('next')} alt="Next Page" />
        </div>
    )
}

export default Buttons;