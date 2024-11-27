import React from 'react';
import { motion } from 'framer-motion';

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
  { id: 1, logo: amul },
  { id: 2, logo: apml },
  { id: 3, logo: aventis },
  { id: 4, logo: balmer },
  { id: 5, logo: bp },
  { id: 6, logo: BRITANNIA },
  { id: 7, logo: dinshaws },
  { id: 8, logo: gopal },
  { id: 9, logo: havmor },
  { id: 10, logo: heritage },
  { id: 11, logo: hp },
  { id: 12, logo: ioc },
  { id: 13, logo: mescab },
  { id: 14, logo: motherdairy },
  { id: 15, logo: nubeno },
  { id: 16, logo: pagariya },
  { id: 17, logo: prabhat },
  { id: 18, logo: rollick },
  { id: 19, logo: sumul },
  { id: 20, logo: sury },
  { id: 21, logo: utex_industries_logo },
  { id: 22, logo: VADILALIND },
];

const Clients = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24 mt-[6.3rem]" id="clients">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Clients</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A glimpse of the esteemed clients we work with.
          </p>
        </div>

        {/* Client Images Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {clients.map((client) => (
            <motion.div
              key={client.id}
              className="flex items-center justify-center bg-white rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Client Image */}
              <img
                src={client.logo}
                alt={`Client ${client.id}`}
                className="w-35 h-35 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
