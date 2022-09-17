import React, { Component, useRef } from "react";
import { createRoot } from "react-dom/client";
import Buttons from "./Buttons";
import "./styles.css";

import HTMLFlipBook from "react-pageflip";


const url =
  "https://bookoffree.com/wp-content/themes/dt-the7-child/turn-js/pages916/";

// eslint-disable-next-line

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <div key={props.index} className="page">
        <img
          src={props.page}
          alt={`Book of Free See Inside Page: ${props.page}`}
        />
      </div>
    </div>
  );
});

const App = () => {
  const pages = new Array();

  for (var i = 1; i < 193; i++) {
    pages.push(url + i + ".jpg");
  }
  const book = useRef();

  const handleNextPage = () => {
    book.current.pageFlip().flipNext();
  };

  const handlePrevPage = () => {
    book.current.pageFlip().flipPrev();
  };

  return (
    <div className="wrapper">
      <Buttons
        turnToNextPage={handleNextPage}
        turnToPrevPage={handlePrevPage}
      />
      <HTMLFlipBook
        width={675}
        height={1050}
        maxWidth={`100vw`}
        minWidth={`none`}
        ref={book}
      >
        {pages.map((page, index) => (
          <Page key={index} index={index} page={page} />
        ))}
      </HTMLFlipBook>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
