import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Show() {
  const [item, setItem] = useState(null);
  const { id } = useParams(); // Get the id from the URL parameters

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await Axios.get(`http://localhost:8080/QuickBite/menu/${id}`);
        setItem(response.data); // Set the fetched item data
        console.log(response.data); // Debug: log the fetched data
      } catch (error) {
        console.error("Error fetching item", error);
      }
    };
    if (id) {
      fetchItem(); // Fetch item only if the id is available
    }
  }, [id]); // Dependency on id, so fetch when id changes

  if (!item) return <div>Loading...</div>; // Show loading state

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{item.name}</h1>
      <img src={item.image} alt={item.name} className="w-full h-64 object-cover my-4" />
      <p className="text-gray-700">{item.description}</p>
      <p className="text-lg font-semibold mt-4">Price: ₹{item.price}</p>
      {item.discount > 0 && (
        <p className="bg-red-500 text-white font-bold text-sm py-1 px-2 rounded-full inline-block mt-2">
          {item.discount}% off
        </p>
      )}
    </div>
  );
}
