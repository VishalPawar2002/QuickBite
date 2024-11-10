import React from 'react';

export default function Cards({ item }) {  // No need for key in props
  return (
    <div className="flex flex-col items-center bg-transparent">
      <img src={item.image} alt={item.name} className="w-64 h-auto object-cover bg-error-content" />
      <p className="mt-2 text-lg font-semibold">{item.name}</p>
    </div>
  );
}





