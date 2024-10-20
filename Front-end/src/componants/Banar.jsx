import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Pizza from "../assets/pizza50.jpg";


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
    prevArrow: <SamplePrevArrow />
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
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
            <h5 className="text-lg md:text-2xl">First slide label</h5>
            <p className="text-sm md:text-base">Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="https://plus.unsplash.com/premium_photo-1679076060484-1852c96149d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emElMjB3aXRoJTIwaW5kaWFuJTIwa2lkcyUyMHJhY3RhbmdsZSUyMGltYWdlfGVufDB8fDB8fHww" 
            alt="Second slide" 
            className="w-full h-[106px] sm:h-[256px] md:h-[356px] lg:h-[456px] xl:h-[556px] object-cover" 
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
            <h5 className="text-lg md:text-2xl">Second slide label</h5>
            <p className="text-sm md:text-base">Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src="https://via.placeholder.com/1200x600" 
            alt="Third slide" 
            className="w-full h-[106px] sm:h-[256px] md:h-[356px] lg:h-[456px] xl:h-[556px] object-cover" 
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
            <h5 className="text-lg md:text-2xl">Third slide label</h5>
            <p className="text-sm md:text-base">Some representative placeholder content for the third slide.</p>
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
      className={`${className} bg-gray-800 bg-opacity-50 hover:bg-gray-600 rounded-full p-4 text-xl`}
      style={{ ...style, display: "block", right: "20px", zIndex: 1 }}
      onClick={onClick}
    >
      ❯
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-800 bg-opacity-50 hover:bg-gray-600 rounded-full p-4 text-xl`}
      style={{ ...style, display: "block", left: "20px", zIndex: 1 }}
      onClick={onClick}
    >
      ❮
    </div>
  );
}
