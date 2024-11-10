import React from "react";


export default function Baner2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-100">
      <div className="relative">
        <img src="https://th.bing.com/th/id/OIP.a9A_ilA5hEH2rnDJ48fccgHaE8?rs=1&pid=ImgDetMain" alt="Meal Box" className="w-full h-48 object-cover" />
        <div className="absolute bottom-0 left-0 w-full p-4 text-black bg-white bg-opacity-75">
          <h5 className="text-lg md:text-2xl">Meal Box</h5>
          <p className="text-sm md:text-base">Various Indian dishes including rice, naan, and curries.</p>
        </div>
      </div>
      
      <div className="relative">
        <img src="https://th.bing.com/th/id/OIP.k4JMO5bD97BK3hxEHefrmAHaFP?rs=1&pid=ImgDetMain" alt="Sandwiches" className="w-full h-48 object-cover" />
        <div className="absolute bottom-0 left-0 w-full p-4 text-white bg-black bg-opacity-50">
          <h5 className="text-lg md:text-2xl">Introducing SANDWICHES @ ₹83</h5>
          <p className="text-sm md:text-base">With EAT CLUB Membership</p>
          <p className="text-sm md:text-base line-through">Original Price ₹119</p>
        </div>
      </div>
      
      <div className="relative">
        <img src="https://img.freepik.com/free-vector/black-friday-sale-banner-with-discount-offer-details_1017-41262.jpg?ga=GA1.1.1941823864.1708795854&semt=ais_hybrid" alt="Discount Offer" className="w-full h-48 object-cover" />
        <div className="absolute bottom-0 left-0 w-full p-4 text-white bg-black bg-opacity-50">
          <h5 className="text-lg md:text-2xl">Order on EAT CLUB and get ₹200 OFF</h5>
          <p className="text-sm md:text-base">On first 3 orders</p>
          <p className="text-sm md:text-base">Code: FIRST3</p>
        </div>
      </div>
      
      <div className="relative">
        <img src="https://img.lovepik.com/element/45007/4727.png_860.png" alt="Free Item" className="w-full h-48 object-cover" />
        <div className="absolute bottom-0 left-0 w-full p-4 text-white bg-black bg-opacity-50">
          <h5 className="text-lg md:text-2xl">FREE Choco Lava Cake & Coke</h5>
          <p className="text-sm md:text-base">Worth ₹118</p>
        </div>
      </div>
    </div>
  );
}
