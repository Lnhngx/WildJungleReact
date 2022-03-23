import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const ProductCarousel = (props) => {
  const [current, setCurrent] = useState(0);
  const pic = props.pic;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const Sid = searchParams.get("id");

  const pictrueArray = pic.filter((v) => v.ProductsPic === parseInt(Sid));
  const img1 = `img/product/${pictrueArray[0]}`;
  const img2 = `img/product/${pictrueArray[1]}`;
  const img3 = `img/product/${pictrueArray[2]}`;
  const img4 = `img/product/${pictrueArray[3]}`;
  const img5 = `img/product/${pictrueArray[4]}`;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const change1 = () => {
    console.log(pictrueArray[0].PicName);
    console.log(pic);
    setCurrent(1);
  };
  const change2 = () => {
    setCurrent(2);
  };
  const change3 = () => {
    setCurrent(3);
  };
  const change4 = () => {
    setCurrent(4);
  };

  //const img5 = `img/product/${pictrueArray[4].PicName}`;
  // const Type1 = (products, type1) => {
  //   let newProducts = [...products];
  //   if (type1++) {
  //     newProducts = [...newProducts].filter((a) => a.ProductsType === 1);
  //   }
  //   return newProducts;
  // };

  const CarouselData = [
    {
      image: `${img1}`,
    },
    {
      image: `${img2}`,
    },
    {
      image: `${img3}`,
    },
    {
      image: `${img4}`,
    },
    {
      image: `${img5}`,
    },
  ];

  const length = CarouselData.length;
  if (!Array.isArray(CarouselData) || CarouselData.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="alan_slider">
        <div className="alan_leftbox" onClick={prevSlide}>
          <span className="alan_lefticon material-icons">chevron_left</span>
        </div>
        <div className="alan_rightbox" onClick={nextSlide}>
          <span className="alan_righticon material-icons">chevron_right</span>
        </div>
        {CarouselData.map((slider, index) => {
          return (
            <div key={index}>
              <div
                className={
                  index === current ? "alan_slide active" : "alan_slide"
                }
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
      <ul className="alan_product_img_ul">
        <li className="alan_product_img_li" onClick={change1}>
          <img src={img1} alt="" />
        </li>
        <li className="alan_product_img_li" onClick={change2}>
          <img src={img2} alt="" />
        </li>
        <li className="alan_product_img_li" onClick={change3}>
          <img src={img3} alt="" />
        </li>
        <li className="alan_product_img_li" onClick={change4}>
          <img src={img4} alt="" />
        </li>
      </ul>
    </>
  );
};

export default ProductCarousel;
