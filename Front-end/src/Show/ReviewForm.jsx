import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function ReviewForm({ onAddReview }) {  // Accept `onAddReview` as a prop
  const [review, setReview] = useState({ rating: 0, comment: '' });
  const [errors, setErrors] = useState({ rating: '', comment: '' });
  const { id } = useParams();

  const handleChange = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = { rating: '', comment: '' };
    let isValid = true;

    if (review.rating === 0) {
      formErrors.rating = 'Please provide a rating.';
      isValid = false;
    }

    if (review.comment.trim() === '') {
      formErrors.comment = 'Please write a comment.';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Immediately add the review locally
      const tempReview = { ...review, _id: Date.now().toString(), createdAt: new Date().toISOString() };
      onAddReview(tempReview); // Add temporary review to the list
     
      try {
        const response = await axios.post(`http://localhost:8080/QuickBite/menu/${id}/review`, review);
        setReview({ rating: 0, comment: '' });
        setErrors({ rating: '', comment: '' });
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  

  return (
    <form onSubmit={handleSubmit} id='myForm' noValidate>
      <div>
        <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
        <input
          type="range"
          name="rating"
          min={1}
          max={5}
          step={1}
          id='rating'
          value={review.rating}
          onChange={handleChange}
          className="w-full mt-4"
        />
      </div>
      <div className="relative w-6/6">
        <div>
          <label htmlFor="comment" className="block text-gray-700 text-sm font-bold mb-2">Comment</label>
          <textarea
            className="border border-gray-300 rounded-md p-2 w-full mt-4 bg-white pr-32 sm:w-full sm:px-2"
            placeholder="Add a review"
            cols={110}
            rows={7}
            name="comment"
            id='comment'
            value={review.comment}
            onChange={handleChange}
            required
          />
          <div className="absolute bottom-4 right-4 flex items-center space-x-2">
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </div>
          {errors.comment && <div className="text-red-500 text-xs italic">{errors.comment}</div>}
        </div>
      </div>
    </form>
  );
}
