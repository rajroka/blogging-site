'use client';

import React from 'react';
import {
  FaStoreAlt,
  FaTruck,
  FaDollarSign,
  FaClock,
} from 'react-icons/fa';

const Customerservice = () => {
  return (
    <section
      aria-label="Customer Service Features"
      className="w-full py-12 px-6 md:px-16 bg-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-gray-900">
        
        {/* Curb-side Pickup Feature */}
        <article className="flex items-start gap-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaStoreAlt size={28} className="text-emerald-600" aria-hidden="true" />
          <div>
            <h3 className="font-semibold text-xl">Curb-side Pickup</h3>
            <p className="text-gray-600 mt-1 text-sm">Pickup available for your convenience</p>
          </div>
        </article>

        {/* Free Shipping Feature */}
        <article className="flex items-start gap-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaTruck size={28} className="text-emerald-600" aria-hidden="true" />
          <div>
            <h3 className="font-semibold text-xl">Free Shipping</h3>
            <p className="text-gray-600 mt-1 text-sm">On orders over $50</p>
          </div>
        </article>

        {/* Low Prices Feature */}
        <article className="flex items-start gap-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaDollarSign size={28} className="text-emerald-600" aria-hidden="true" />
          <div>
            <h3 className="font-semibold text-xl">Low Prices</h3>
            <p className="text-gray-600 mt-1 text-sm">Guaranteed best deals</p>
          </div>
        </article>

        {/* 24/7 Support Feature */}
        <article className="flex items-start gap-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaClock size={28} className="text-emerald-600" aria-hidden="true" />
          <div>
            <h3 className="font-semibold text-xl">24/7 Support</h3>
            <p className="text-gray-600 mt-1 text-sm">Always here to help</p>
          </div>
        </article>

      </div>
    </section>
  );
};

export default Customerservice;
