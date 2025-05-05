// src/pages/Home.jsx

import React from "react";

const Home = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Fuel Your Day with Win Everyday
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Delicious high-protein, low-carb snacks crafted for fitness
            enthusiasts, keto dieters, and health-conscious individuals.
          </p>
          <a
            href="/products"
            className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Explore Products
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">High Protein</h3>
            <p>Up to 43% protein per serving to keep you energized.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Low Net Carbs</h3>
            <p>Only 2g–4g net carbs, perfect for keto and low-carb diets.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">No Added Sugar</h3>
            <p>Sweetened naturally with stevia and erythritol.</p>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Bestsellers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <img
                src="https://wineveryday.in/images/cookies.jpg"
                alt="Protein Cookies"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">Protein Cookies</h3>
              <p>
                Made with almond flour and whey protein, offering 29% protein
                per serving.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <img
                src="https://wineveryday.in/images/chips.jpg"
                alt="Protein Chips"
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">Protein Chips</h3>
              <p>Crunchy and nutritious, boasting 43% protein per serving.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Snack Smart?</h2>
        <p className="mb-8">
          Join thousands who trust Win Everyday for their healthy snacking
          needs.
        </p>
        <a
          href="/products"
          className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          Shop Now
        </a>
      </section>
    </main>
  );
};

export default Home;
