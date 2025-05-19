import React from 'react';

function Cards({ item }) {
  return (
    <div className="p-2 mt-4 my-3"> {/* Padding around each card */}
      <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white  dark:border"> 
        <figure>
          <img
            src={item.image}
            alt="Shoes"
            className="w-full h-60 object-contain" // Optional: keep image tidy
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
         {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions  flex justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                  Buy Now
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
