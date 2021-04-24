// takes in an array
// Showcases item from array
// showcases dots to show what item of the array is being displayed
// Has controllers to go left and right

import React, { useState } from "react";

const Carousel = ({ array = [] }) => {
  const [selector, setSelector] = useState(0);

  //   array length = 5
  //  selector = 0
  //  as long as selector is less or equal to array length we are okay

  const nextSlide = () => {
    selector < array.length ? setSelector(selector++) : setSelector(0);
  };

  const previousSlide = () => {
    selector < 0 ? setSelector(array.length) : setSelector(selector--);
  };

  // Create a state for a selector
  // Create functionality for adding and removing

  return (
    <div>
      <div onClick={previousSlide}>{"<"}</div>
      {array[selector]}
      <div onClick={nextSlide}>{">"}</div>
      <div>
        {array.map((i) => (
          <a
            stlye={selector === i ? { background: black } : null}
            onClick={setSelector(i)}
          >
            o
          </a>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
