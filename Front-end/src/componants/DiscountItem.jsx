import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../componants/Cards";
import Axios from "axios";

export default function DiscountItem() {
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
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <Slider {...settings}>
        {png.map((item) => (
          <Cards item={item} key={item._id} />
        ))}
      </Slider>
    </div>
  );
}

