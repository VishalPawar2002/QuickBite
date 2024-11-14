import React, { useEffect, useState, useCallback } from "react";
import Axios from "axios";
import Button from "@mui/material/Button";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import ReviewCard from "../review/ReviewCard";


export default function Show() {
  const [item, setItem] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await Axios.get(`http://localhost:8080/QuickBite/menu/${id}`);
        setItem(response.data);
        setReviews(response.data.review);
      } catch (error) {
        console.error("Error fetching item", error);
      }
    };

    if (id) fetchItem();
  }, [id]);

  // Function to handle adding a new review to the frontend list
  const handleAddReview = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  // Function to handle deleting a review
  const handleDeleteReview = useCallback(async (reviewId) => {
    const previousReviews = [...reviews];
    
    // Optimistic update: Remove the review immediately
    setReviews((prevReviews) => prevReviews.filter((review) => review._id !== reviewId));
  
    try {
      await Axios.delete(`http://localhost:8080/QuickBite/menu/${id}/review/${reviewId}`);
    } catch (error) {
      console.error("Error deleting review", error);
      // Revert if delete fails
      setReviews(previousReviews);
    }
  }, [reviews, id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-24 m-auto max-w-6xl lg:gap-0" key={item._id}>
        <div className="w-full lg:w-1/2 p-4 lg:p-8">
          <img src={item.image} alt={item.name} className="h-auto lg:h-96 w-full lg:w-auto rounded object-cover" />
        </div>
        <div className="w-full lg:w-1/2 p-4 lg:p-8 lg:mr-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{item.name}</h1>
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
            <li><span className="font-semibold">Category:</span> {item.category}</li>
            <li className={item.vegNonVeg === "veg" ? "text-gray-900" : "text-red-600"}>
              <span className="font-semibold text-gray-900">Type: </span>
              {item.vegNonVeg === "veg" ? "Veg" : "Non Veg"}
            </li>
            <li className={item.available ? "text-gray-900" : "text-gray-900 line-through"}>
              {item.available ? "Available" : "Not Available"}
            </li>
          </ul>
          <div className="flex place-content-between mt-4">
            <Button variant="contained" endIcon={<ElectricBikeIcon />} style={{ backgroundColor: "orange", color: "white" }}>
              Order Now
            </Button>
            <select className="bg-white border border-gray-300 text-gray-700 text-sm rounded-md py-2 px-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <hr />

      {/* Review Form Component */}
      <div className="flex items-center justify-center flex-col">
        <ReviewForm id={id} onAddReview={handleAddReview} />
      </div>
      <hr className="mb-1" />

      {/* Display each review */}
      <div className="flex flex-wrap justify-center gap-2">
        {reviews.map((review) => (
          <ReviewCard
            key={review._id}
            comment={review.comment}
            rating={review.rating}
            date={review.createdAt}
            reviewId={review._id}
            id={id}
            onDelete={() => handleDeleteReview(review._id)}
          />
        ))}
      </div>
    </div>
  );
}
