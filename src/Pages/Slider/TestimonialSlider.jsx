import React from "react";
import Slider from "react-slick";
import ava01 from "../../Assets/images/ava-1.jpg";
import ava02 from "../../Assets/images/ava-2.jpg";
import ava03 from "../../Assets/images/ava-3.jpg";
export default function TestimonialSlider() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 3000,
    autoplayspeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava01} alt="ava01" className="rounded"></img>
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava02} alt="ava02" className="rounded"></img>
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava03} alt="ava03" className="rounded"></img>
          <h6>Jhon Doe</h6>
        </div>
      </div>
    </Slider>
  );
}
