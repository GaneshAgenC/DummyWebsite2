// src/pages/ProductDetail.jsx

import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: "protein-cookies",
    name: "Protein Cookies",
    image: "https://via.placeholder.com/600x400?text=Protein+Cookies",
    description:
      "Soft, chewy, protein-packed cookies perfect for a post-workout snack or guilt-free treat.",
  },
  {
    id: "protein-chips",
    name: "Protein Chips",
    image: "https://via.placeholder.com/600x400?text=Protein+Chips",
    description: "Crunchy and nutritious, boasting 43% protein per serving.",
  },
  {
    id: "trial-pack",
    name: "Trial Pack",
    image: "https://via.placeholder.com/600x400?text=Trial+Pack",
    description: "Sample all our products in one convenient trial pack.",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="bg-white text-gray-800 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p>The product you're looking for does not exist.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white text-gray-800 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover mb-8 rounded"
        />
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p>{product.description}</p>
      </div>
    </main>
  );
};

export default ProductDetail;
