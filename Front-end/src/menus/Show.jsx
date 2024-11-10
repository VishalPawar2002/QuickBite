import React, { useEffect, useState } from "react";
import Axios from "axios";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import { useParams, useNavigate } from "react-router-dom";
import ReviewForm from "../Show/ReviewForm";
import ReviewCard from "../review/ReviewCard";


export default function Show() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await Axios.get(
          `http://localhost:8080/QuickBite/menu/${id}`
        );
        setItem(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching item", error);
      }
    };
    if (id) {
      fetchItem();
    }
  }, [id]);
  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-24 m-auto max-w-6xl lg:gap-0 ">
        <div className="w-full lg:w-1/2 p-4 lg:p-8">
          <img
            src={item.image}
            alt={item.name}
            className="h-auto lg:h-96 w-full lg:w-auto rounded object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-4 lg:p-8 lg:mr-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {item.name}
          </h1>
          <h5 className="flex items-center text-2xl text-gray-700 font-bold">
            ${item.price}
            {item.discount > 0 && (
              <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-sm py-1 px-2 rounded-full inline-block animate-bounce ml-2">
                {item.discount}% off
              </span>
            )}
          </h5>
          <p className="text-md text-gray-600 mt-2">{item.description}</p>
          <br />
          <ul className="list-disc pl-5 text-gray-700 -mt-2">
            <li className="">
              <span className="font-semibold">Category:</span> {item.category}
            </li>
            <li
              className={
                item.vegNonVeg === "veg" ? "text-gray-900" : "text-red-600"
              }
            >
              <span className="font-semibold text-gray-900">Type: </span>
              {item.vegNonVeg === "veg" ? "Veg" : "Non Veg"}
            </li>
            <li
              className={
                item.available ? "text-gray-900" : "text-gray-900 line-through"
              }
            >
              {item.available ? "Available" : "Not Available"}
            </li>
          </ul>
          <div className="flex place-content-between mt-4">
            <Button
              variant="contained"
              type="submit"
              endIcon={<ElectricBikeIcon />}
              style={{ backgroundColor: "orange", color: "white" }}
            >
              Order Now
            </Button>
            <select className="bg-white border border-gray-300 text-gray-700 text-sm rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-300">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      </div>
              <hr/>
      <div className="flex items-center justify-center flex-col">
        <ReviewForm id={id} />
      </div>
      <hr className="mb-1"/>
      <div>
        <ReviewCard />
      </div>
    </div>
  );
}
