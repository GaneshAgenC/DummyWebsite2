// src/pages/Products.jsx

import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "protein-cookies",
    name: "Protein Cookies",
    image: "https://via.placeholder.com/300x200?text=Protein+Cookies",
    description:
      "Soft, chewy, protein-packed cookies perfect for a post-workout snack or guilt-free treat.",
  },
  {
    id: "protein-chips",
    name: "Protein Chips",
    image: "https://via.placeholder.com/300x200?text=Protein+Chips",
    description: "Crunchy and nutritious, boasting 43% protein per serving.",
  },
  {
    id: "trial-pack",
    name: "Trial Pack",
    image: "https://via.placeholder.com/300x200?text=Trial+Pack",
    description: "Sample all our products in one convenient trial pack.",
  },
];

const Products = () => {
  return (
    <main className="bg-white text-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-100 p-6 rounded-lg shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="mb-4">{product.description}</p>
              <Link
                to={`/products/${product.id}`}
                className="inline-block bg-indigo-600 text-white font-semibold px-4 py-2 rounded hover:bg-indigo-700 transition duration-300"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
