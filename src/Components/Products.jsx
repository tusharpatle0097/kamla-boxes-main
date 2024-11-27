import React from 'react';
import { motion } from 'framer-motion';
import Corrugated from '../Assets/corbox.png';
import Cartons from '../Assets/cartons.png';
import Duplex from '../Assets/duplex.png';
import Monocartons from '../Assets/monocarton.png';
import Fancy from '../Assets/fancyboxes.png';
import Partitioned from '../Assets/boxPart.png';

const products = [
  {
    id: 1,
    title: 'Corrugated Boxes',
    description: 'A sustainable and durable packaging solution made from recycled materials.',
    image: Corrugated,
  },
  {
    id: 2,
    title: 'Cartons',
    description: 'High-quality printing with custom designs to showcase your brand.',
    image: Cartons,
  },
  {
    id: 3,
    title: 'Duplex Boxes',
    description: 'Luxurious and elegant packaging for high-end products and gifts.',
    image: Duplex,
  },
  {
    id: 4,
    title: 'Monocartons',
    description: 'Strong, corrugated boxes designed for secure shipping and handling.',
    image: Monocartons,
  },
  {
    id: 5,
    title: 'Fancy Boxes',
    description: 'Robust storage boxes for organizing and protecting your items.',
    image: Fancy,
  },
  {
    id: 6,
    title: 'Partitioned Boxes',
    description: 'Customizable boxes perfect for subscription services and product sets.',
    image: Partitioned,
  },
];

const Products = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24 mt-[6.3rem]" id="products">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Products</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover our range of eco-friendly and customizable packaging solutions crafted to elevate your brand.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Centered Product Image */}
              <div className="flex justify-center items-center h-64 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain h-full w-full p-4"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
