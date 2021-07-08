import $ from "jquery";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import Buttons from "./Buttons"
import "turn.js";
import "./resize.js"
import "./styles.css";
class Turn extends Component {
  static defaultProps = {
    style: {},
    className: "",
    options: {},
  };

  componentDidMount() {
    if (this.el) {
      $(this.el).turn(Object.assign({}, this.props.options));
    }
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  constructor(props) {
    super(props);

    this.state = {
      context: props.context,
      clicked: true
    };

    // this.onBtnClick = this.onBtnClick.bind(this);
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
  width: 1688,
  height: 825,
  autoCenter: true,
  display: "single",
  acceleration: true,
  elevation: 50,
  gradients: true,
  page: 1,
  pages: 30,
  next: true
};

const url = "https://bookoffree.com/wp-content/themes/dt-the7-child/turn-js/pagesDFW2021/";

// eslint-disable-next-line
const pages = new Array;

for(var i = 1; i < 30; i++){
  pages.push( url + i + ".jpg");
}







const App = () => {
  return (
    <div id="new-root">
      <Buttons />
      <Turn options={options} className="magazine-2">
        {pages.map((page, index) => (
          <div key={index} className="page">
            <img src={page} alt="Book of Free See Inside" />
          </div>
        ))}
      </Turn>
      </div>
  );
};


const rootElement = document.getElementById("new-root");

ReactDOM.render(<App />,rootElement);
