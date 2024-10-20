// DiscountItem.jsx
import React from "react";
import items from "../../public/items.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

export default function DiscountItem() {
  const filterData = items.filter((data) => data.discount > 0);
  console.log(filterData);

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
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 sm:mt[-30px] ">
      <div>
        {/* <h1 className="font-semibold text-xl pb-2">Limited-Time Deals</h1> */}
        {/* <p className="text-black opacity-60 hover:opacity-90">
          Hurry, These Deals Won’t Last Long! Don’t miss your chance to grab
          amazing discounts on your favorite items.
          <br />
          Shop now and take advantage of these limited-time offers before
          they’re gone for good!
        </p> */}
      </div>
      <div>
        <Slider {...settings}>
          {filterData.map((item) => {
            return <Cards item={item} key={item.id} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

// Limited-Time Deals
// <p className="text-black opacity-60 hover:opacity-90">
//             Hurry, These Deals Won’t Last Long! Don’t miss your chance to grab amazing discounts on your favorite items.
//             <br />
//             Shop now and take advantage of these limited-time offers before they’re gone for good!
//           </p>

