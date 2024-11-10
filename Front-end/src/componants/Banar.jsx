import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pizza from "../assets/pizza50.jpg";
import Add from "../assets/Add.jpg";
import Add2 from "../assets/Add2.jpg";

export default function Banar() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-full h-auto mb-1">
      <Slider {...settings}>
        <div className="relative">
          <img
            src={Pizza}
            alt="First slide"
            className="w-full h-[106px] sm:h-[256px] md:h-[356px] lg:h-[456px] xl:h-[556px] object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 text-white">
            <h5 className="text-lg md:text-2xl">First slide label</h5>
            <p className="text-sm md:text-base">
              Some representative placeholder content for the first slide.
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src={Add}
            alt="Second slide"
            className="w-full h-[106px] sm:h-[256px] md:h-[356px] lg:h-[456px] xl:h-[556px] object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 text-white">
            <h5 className="text-lg md:text-2xl">Second slide label</h5>
            <p className="text-sm md:text-base">
              Some representative placeholder content for the second slide.
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src={Add2}
            alt="Third slide"
            className="w-full h-[106px] sm:h-[256px] md:h-[356px] lg:h-[456px] xl:h-[556px] object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 text-white">
            <h5 className="text-lg md:text-2xl">Third slide label</h5>
            <p className="text-sm md:text-base">
              Some representative placeholder content for the third slide.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} flex items-center justify-center`}
      style={{
        ...style,
        display: "block",
        right: "10px",
        zIndex: 1,
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} flex items-center justify-center`}
      style={{
        ...style,
        display: "block",
        left: "10px",
        zIndex: 1,
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    ></div>
  );
}
