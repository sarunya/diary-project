import React from "react"
import $ from "jquery";
import "turn.js";

import "./../../css/Diary.css";

import Turn from "./Turn.js";

const options = {
  width: 1200,
  height: 680,
  autoCenter: true,
  display: "double",
  acceleration: true,
  elevation: 50,
  gradients: !$.isTouch,
  when: {
    turned: function (e, page) {
      console.log("Current view: ", $(this).turn("view"));
    }
  }
};

const pages = [
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg"
];

const Sample = () => {
  return (
    <Turn options={options} className="magazine">
      {pages.map((page, index) => (
        <div key={index} className="page">
          {/* <img src={page} alt="" /> */}
          {/* <textarea>
            This is the first line.
            See, how the text fits here, also if there is a linebreak at the end? It works nicely.

            Great.
          </textarea> */}

          <div class="paper">
              <div class="paper-content">
                  <textarea autofocus>Hello there !&#10;Here's a paper text area, feel free to type something ...</textarea>
              </div>
          </div>
        </div>
      ))}
    </Turn>
  );
};

export default Sample;
