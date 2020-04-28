import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";


import "turn.js";

import "./resize.js"
import "./styles.css";

class Turn extends React.Component {
  static defaultProps = {
    style: {},
    className: "",
    options: {}
  };
  

  componentDidMount() {
    if (this.el) {
      $(this.el).turn(Object.assign({}, this.props.options));
    }
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    if (this.el) {
      $(this.el)
        .turn("destroy")
        .remove();
    }
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  handleKeyDown = event => {
    if (event.keyCode === 37) {
      $(this.el).turn("previous");
    }
    if (event.keyCode === 39) {
      $(this.el).turn("next");
    }
  };

  render() {
    return (
      <div
        className={this.props.className}
        style={Object.assign({}, this.props.style)}
        ref={el => (this.el = el)}
      >
        {this.props.children}
      </div>
    );
  }
}

const options = {
  width: 1524,
  height: 431,
  autoCenter: true,
  display: "double",
  acceleration: true,
  elevation: 50,
  gradients: !$.isTouch,
  when: {
    turned: function(e, page) {
      console.log("Current view: ", $(this).turn("view"));
    }
  }
};

const url = "https://bookoffree.com/wp-content/themes/dt-the7-child/turn-js/pages/";

// eslint-disable-next-line
const pages = new Array;

for(var i = 1; i < 240; i++){
  pages.push( url + i + ".jpg");
}

const App = () => {
  return (
    <Turn options={options} className="magazine">
      {pages.map((page, index) => (
        <div key={index} className="page">
          <img src={page} alt={"Book of Free See Inside Page:"+ index} />
        </div>
      ))}
    </Turn>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
