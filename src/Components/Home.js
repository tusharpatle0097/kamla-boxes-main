import React, { useState,useEffect } from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import { motion } from 'framer-motion';
import Corrugated from '../Assets/corbox.png';
import Cartons from '../Assets/cartons.png';
import Duplex from '../Assets/duplex.png';
import Monocartons from '../Assets/monocarton.png';
import Fancy from '../Assets/fancyboxes.png';
import Partitioned from '../Assets/boxPart.png';

import amul from '../Assets/clients/amul.png';
import apml from '../Assets/clients/apml.png';
import aventis from '../Assets/clients/aventis.png';
import balmer from '../Assets/clients/balmer-lawrie-logo.png';
import bp from '../Assets/clients/bp.png';
import BRITANNIA from '../Assets/clients/BRITANNIA.NS.png';
import dinshaws from '../Assets/clients/dinshaws.png';
import gopal from '../Assets/clients/gopal.png';
import havmor from '../Assets/clients/havmor.jpeg';
import heritage from '../Assets/clients/heritage.png';
import hp from '../Assets/clients/hp.png';
import ioc from '../Assets/clients/IOC.NS.png';
import mescab from '../Assets/clients/mescab.png';
import motherdairy from '../Assets/clients/motherdairy.png';
import nubeno from '../Assets/clients/nubeno.png';
import pagariya from '../Assets/clients/pagariya.jpg';
import prabhat from '../Assets/clients/prabhat.png';
import rollick from '../Assets/clients/Rollick Frozen Desserts Distributorship.png';
import sumul from '../Assets/clients/sumul.png';
import sury from '../Assets/clients/sury.png';
import utex_industries_logo from '../Assets/clients/utex_industries_logo.jpg';
import VADILALIND from '../Assets/clients/VADILALIND.NS.png';

const clients = [
  { id: 1, name: 'Client One', logo: amul },
  { id: 2, name: 'Client Two', logo: apml },
  { id: 3, name: 'Client Three', logo: aventis },
  { id: 4, name: 'Client Four', logo: balmer },
  { id: 5, name: 'Client Five', logo: bp },
  { id: 6, name: 'Client Six', logo: BRITANNIA },
  { id: 7, name: 'Client Seven', logo: dinshaws },
  { id: 8, name: 'Client Eight', logo: gopal },
  { id: 8, name: 'Client Eight', logo: havmor },
  { id: 8, name: 'Client Eight', logo: heritage },
  { id: 8, name: 'Client Eight', logo: hp },
  { id: 8, name: 'Client Eight', logo: ioc },
  { id: 8, name: 'Client Eight', logo: mescab },
  { id: 8, name: 'Client Eight', logo: motherdairy },
  { id: 8, name: 'Client Eight', logo: nubeno },
  { id: 8, name: 'Client Eight', logo: pagariya },
  { id: 8, name: 'Client Eight', logo: prabhat },
  { id: 8, name: 'Client Eight', logo: rollick },
  { id: 8, name: 'Client Eight', logo: sumul },
  { id: 8, name: 'Client Eight', logo: sury },
  { id: 8, name: 'Client Eight', logo: utex_industries_logo },
  { id: 8, name: 'Client Eight', logo: VADILALIND },
];



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




const Home = () => {








  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [products.length]);

  const visibleProducts = products.slice(index, index + 4).concat(
    index + 4 > products.length
      ? products.slice(0, (index + 4) % products.length)
      : []
  );




  return (
    <div>
      <Carousel />
      <section className="relative bg-white py-20 px-6 md:px-12 lg:px-24" id="about">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12">

          {/* Left Side: Image with Motion and Hover Effect */}
          <motion.div
            className="lg:w-1/2 w-full overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2013/07/12/17/46/box-152428_1280.png"
              alt="Box Company - Our Vision"
              className="w-50px h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          {/* Right Side: Text Content and Milestones */}
          <div className="lg:w-1/2 flex flex-col items-center space-y-12">

            {/* Introduction Section with Heading and Description */}
            <motion.div
              className="text-center lg:text-left space-y-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">About Company</h2>

              </div>
              <p className="text-lg  max-w-lg lg:mx-0 mx-auto">
                Company leads the industry with customizable, eco-friendly packaging solutions. Our mission is to create impact-driven packaging that combines innovation, quality, and sustainability.
              </p>
              <p className="text-base  max-w-md lg:mx-0 mx-auto">
                By blending technology and a commitment to the environment, we help businesses make a lasting impression while supporting a greener future.
              </p>
            </motion.div>

            {/* Milestones Section with Icons and Descriptions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              {[
                { icon: '🏆', title: '10+ Years in Business', description: 'Experience that guarantees quality.' },
                { icon: '🌱', title: '100% Sustainable Materials', description: 'Committed to eco-friendly practices.' },
                { icon: '🚚', title: '1M+ Boxes Delivered', description: 'Trusted by industries worldwide.' },
                { icon: '🤝', title: '500+ Clients Served', description: 'Building partnerships that last.' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl">{item.icon}</div>
                  <h4 className="text-lg font-semibold ">{item.title}</h4>
                  <p className="text-sm ">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Call-to-Action (CTA) Button */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* <a
                                href="#contact"
                                className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-green-600 transition-all duration-300"
                            >
                                Connect With Us
                            </a> */}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24" id="products">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Products</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover our range of eco-friendly and customizable packaging solutions crafted to elevate your brand.
          </p>
        </div>

        {/* Slider View */}
        <div className="relative flex items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {visibleProducts.map((product, idx) => (
              <motion.div
                key={product.id || idx}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Product Image */}
                <div className="flex justify-center items-center h-48">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

      <section className="bg-gray-100 py-20 px-6 md:px-12 lg:px-24" id="clients">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Our Clients</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We’re proud to have partnered with industry leaders and renowned brands to deliver exceptional packaging solutions.
            </p>
          </div>

          {/* Scrolling Client Logos */}
          <div className="overflow-hidden py-6">
            <div className="flex items-center space-x-8 animate-scroll">
              {clients.concat(clients).map((client, index) => (
                <img
                  key={`${client.id}-${index}`} // Unique key
                  src={client.logo}
                  alt={client.name}
                  className="w-35 h-16 object-contain"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Animation for marquee effect */}
        <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 30s linear infinite;
          width: calc(200% + 16px); /* Ensure seamless scrolling */
        }
      `}</style>
      </section>

      {/* <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24" id="contact">
      <div className="container mx-auto max-w-2xl bg-white p-10 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-10">
          Have questions? Fill out the form below, and we’ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
              />
              <label
                htmlFor="name"
                className="absolute top-0 left-3 p-1 bg-white text-gray-600 transform -translate-y-1/2 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:top-0 peer-focus:left-3 peer-focus:bg-white peer-focus:text-blue-500"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
              />
              <label
                htmlFor="email"
                className="absolute top-0 left-3 p-1 bg-white text-gray-600 transform -translate-y-1/2 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:top-0 peer-focus:left-3 peer-focus:bg-white peer-focus:text-blue-500"
              >
                Email
              </label>
            </div>
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder=" "
              rows="5"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute top-0 left-3 p-1 bg-white text-gray-600 transform -translate-y-1/2 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:top-0 peer-focus:left-3 peer-focus:bg-white peer-focus:text-blue-500"
            >
              Message
            </label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section> */}

      <Footer />
    </div>
  )
}

export default Home