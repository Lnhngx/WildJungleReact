import React, { useState } from "react";
import { CarouselData } from "../components/productCarouselData";
import { Link } from "react-router-dom";

const ProductCarousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="alan_slider">
      <div className="alan_leftbox" onClick={prevSlide}>
        <span className="alan_lefticon material-icons">chevron_left</span>
      </div>
      <div className="alan_rightbox" onClick={nextSlide}>
        <span className="alan_righticon material-icons" >
          chevron_right
        </span>
      </div>
      {CarouselData.map((slider, index) => {
        return (
          <div key={index}>
            <div
              className={index === current ? "alan_slide active" : "alan_slide"}
              
            >
              {index === current && (
                <Link to="">
                  <div className="alan_product_imgli">
                    <img
                      src={slider.image}
                      alt=""
                      className="alan_products_img"
                    />
                  </div>
                </Link>
              )}
            </div>
            <div className="alan_product_img_icon">0{current + 1}/05</div>
          </div>
        );
      })}
    </section>
  );
};

export default ProductCarousel;
