import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";

export default function Menu({ item, key }) {
  return (
    <div className="w-72 border border-gray-300 rounded-lg overflow-hidden shadow-lg m-5 transition-transform transform hover:-translate-y-1 flex flex-col" key={key}>
      <Link to={`/QuickBite/menu/${item._id}`} className="cursor-pointer">
        <img
          src={item.image}
          alt="food image"
          className="w-full h-52 object-cover"
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {item.name}
        </h2>
        {item.available ? (
          <p
            className="text-sm text-gray-700 mb-4 overflow-hidden"
            style={{ maxHeight: "3rem" }}
          >
            Available
          </p>
        ) : (
          <p
            className="text-sm text-gray-700 mb-4 overflow-hidden"
            style={{ maxHeight: "3rem" }}
          >
            Not Available
          </p>
        )}
        <p className="flex items-center text-lg text-gray-900 font-semibold mb-4">
          <span className="mr-2">${item.price}</span>
          {item.discount > 0 && (
            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-sm py-1 px-2 rounded-full inline-block animate-bounce">
              {item.discount}% off
            </span>
          )}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <button className="bg-gradient-to-r from-purple-400 to-pink-600 text-white px-4 py-2 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-400 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl flex items-center">
            Add to <AddShoppingCartIcon className="ml-2" />
          </button>
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
  );
}
