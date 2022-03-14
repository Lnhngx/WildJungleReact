import React, { useState } from "react";
import { CarouselData } from "./CarouselData";
import { Link } from "react-router-dom";

const HomeCarousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="ning_homeslider">
      <span
        className="ning_homecarousellefticon material-icons"
        onClick={prevSlide}
      >
        chevron_left
      </span>
      <span
        className="ning_homecarouselrighticon material-icons"
        onClick={nextSlide}
      >
        chevron_right
      </span>
      {CarouselData.map((slider, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <Link to="">
                <img
                  src={slider.image}
                  alt=""
                  className="ning_homecarouselimg"
                />
              </Link>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default HomeCarousel;
