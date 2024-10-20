import React from 'react';

export default function Cards({item}) {
  return (
   
    <div className="mt-4 my-3 p-3 ">
  <div className="card w-92 shadow-xl bg-white p-2">
    <figure className="w-full h-64">
      <img src={item.imageUrl} alt="Item" className="w-full h-full object-cover" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {item.name}
        <div className="badge badge-secondary text-white">{item.discount}% off</div>
      </h2>
      <p className="text-sm overflow-ellipsis overflow-hidden">{item.description}</p>
      <div className="card-actions justify-between">
        <div className="badge badge-outline ">${item.price}</div>
        <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white">
          Buy Now
        </div>
      </div>
    </div>
  </div>
</div>



  
  




  );
}




