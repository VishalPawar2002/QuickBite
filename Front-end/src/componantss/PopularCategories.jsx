import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import Axios from "axios";

export default function PopularCategories() {
  const [png, setPng] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get("http://localhost:8080/QuickBite/png");
      setPng(res.data);
    };
    fetchData();
  }, []);

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
    //   <Slider {...settings}>
    //     {png.map((item) => (
    //       <Cards item={item} key={item._id} />
    //     ))}
    //   </Slider>
    // </div>
    <div className="container px-4 md:px-6 items-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800">
        Popular Categories
      </h2>
      <div className="flex flex-col justify-around align-middle m">
      <Slider {...settings}>
        {png.map((item) => (
          <div key={item._id} className="flex flex-col items-center mb-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-[200px] h-[200px] rounded-full shadow-lg transition-transform hover:scale-105"
            />
            <p className="mt-2 text-lg font-semibold">{item.name}</p>
          </div>
        ))}
      </Slider>
      </div>
    </div>

  );
}
