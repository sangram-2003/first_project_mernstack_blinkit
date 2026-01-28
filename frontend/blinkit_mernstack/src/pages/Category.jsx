import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/product.js";
import { useState } from "react";

const Category = () => {
    
  const { categorySlug } = useParams();

  const filteredProducts = products.filter(
    (item) => item.categorySlug === categorySlug
  );
  
//quentity state
const [quantity , setQuantity] = useState({});

const increaseQty = (id) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseQty = (id) => {
    setQuantity((prev) => {
      if (!prev[id] || prev[id] === 1) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: prev[id] - 1 };
    });
  };


  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold mb-6 capitalize">
        {categorySlug?.replace(/-/g, " ")}
      </h2>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
  {filteredProducts.map((product) => (
    <div
      key={product.id}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-3"
    >
      {/* Image */}
      <div className="w-full h-32 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain"
        />
      </div>

      {/* Name */}
      <h2 className="text-sm font-medium text-gray-800 mt-2 line-clamp-2">
        {product.name}
      </h2>

      {/* Quantity / description */}
      <p className="text-xs text-gray-500 mt-1">
        {product.description}
        {product.quantity}
      </p>

      {/* Price + Button */}
      <div className="flex items-center justify-between mt-3">
        <span className="text-sm font-semibold text-gray-900">
          ₹{product.price}
        </span>

       {/* {Quantity}  */}
       {!quantity[product.id] ? (
  <button
    onClick={() => increaseQty(product.id)}
    className="border border-green-600 text-green-600 text-xs font-semibold px-3 py-1 rounded-lg hover:bg-green-600 hover:text-white transition"
  >
    ADD
  </button>
) : (
  <div className="flex items-center border border-green-600 rounded-lg overflow-hidden">
    <button
      onClick={() => decreaseQty(product.id)}
      className="px-2 py-1 text-green-600 font-bold hover:bg-green-100"
    >
      −
    </button>

    <span className="px-3 text-sm font-semibold text-green-700">
      {quantity[product.id]}
    </span>

    <button
      onClick={() => increaseQty(product.id)}
      className="px-2 py-1 text-green-600 font-bold hover:bg-green-100"
    >
      +
    </button>
  </div>
)}

       

       
       

      </div>
    </div>
  ))}
</div>

      )}
    </div>
  );
};

export default Category;
