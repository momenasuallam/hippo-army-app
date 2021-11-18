import React, { useState, useEffect } from "react";
import Image from "next/image";

function FooterSlideImages() {
  const colors = [
    "/slider1.jpeg",
    "/slider2.jpeg",
    "/slider3.jpeg",
    "/slider4.jpeg",
    "/slider5.jpeg",
    "/slider6.jpeg",
    "/slider7.jpeg",
    "/slider8.jpeg",
  ];
  const delay = 2500;

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div className="row sliderow">
      <div className="col-md-4">
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {colors.map((backgroundColor, index) => (
              <div className="slide" key={index}>
                <Image
                  src={backgroundColor}
                  width="700px"
                  height="700px"
                  alt="slideimg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-4 disnonslide">
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {colors.map((backgroundColor, index) => (
              <div className="slide" key={index}>
                <Image
                  src={backgroundColor}
                  width="700px"
                  height="700px"
                  alt="slideimg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-4 disnonslide">
        <div className="slideshow">
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {colors.map((backgroundColor, index) => (
              <div className="slide" key={index}>
                <Image
                  src={backgroundColor}
                  width="700px"
                  height="700px"
                  alt="slideimg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSlideImages;
