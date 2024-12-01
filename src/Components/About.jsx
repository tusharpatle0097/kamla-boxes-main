import React, { useState, useEffect } from "react";
import MadhurSir from '../Assets/MadhurSir.jpeg';
import Footer from "./Footer";
import { motion } from 'framer-motion';


const AboutUs = () => {


  const teamMembers = [

    {
      role: "Group CEO & CFO",
      name: "Mr. Samrat Galundia",
      description: `A Chartered Accountant by profession, joins the group with an enriched experience of 11 years in various industries including well-known companies like J.P. Morgan, Mahindra & Mahindra, Shrenuj & Co. Ltd, St. Jude Medical (Hong Kong) Ltd, Lodha & Co. His key skills include Planning & Analysis, Budgeting, MIS, Performance Tracking, Controllership, Tax matters, and Financial Modelling. He is primarily in charge of the group’s financial affairs.`,
    },
    {
      role: "Group CMO",
      name: "Mr. Madhur Bhandari",
      description: `A hardcore professional with excellent management, marketing, and networking skills has been associated with the packaging industry for over 15 years. His primary focus to drive the sales has resulted in a multi-fold increase in the group’s sales and customer base over the last 5 years. His hands-on experience in manufacturing and marketing boxes, multi-layered films, and other packaging materials gives him the winning edge.`,
    },
    {
      role: "Group Creative Designer",
      name: "Mrs Shalaka Bendkhale Bhandari",
      // description: `She has been associated with Tanita India Pvt. Ltd , Konark Fixtures Ltd., Samsika Marketing Pvt Ltd.`,
      description: `A hardcore professional with excellent management and networking skills. She has been associated with packaging and specifically flexible packaging industry for over 20 years. She has been associated with Tanita India Pvt. Ltd , Konark Fixtures Ltd., Samsika Marketing Pvt Ltd.`,

    },
    {
      role: "Group HR & Admin-Incharge ",
      name: "Mr. Rakesh Hariprasad Rai",
      description: `A certified professional in the field of packaging along with Human Resource Development. A creative intellect person with experience of almost 22 years into resource development and creative designing. He is instrumental in developing new techniques and various new designs to meet customer requirements and to add value to clients' packaging processes.`,
    },
  ];


  return (
    <>
      <section className="bg-gray-50 pb-20 mt-[6.3rem]">


        <div className="text-center py-20">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
        </div>

        {/* /// */}


        <div className="bg-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="lg:w-[48%]">
                <motion.div
                  className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold" style={{ color: "rgb(0, 32, 109)" }}>Group Founder</h2>
                  <h3 className="text-lg text-red-500 mt-1">Mr. Arun Bhandari</h3>
                  <p className="text-gray-600 mt-4">We are one of the leading manufacturers of corrugated boxes and duplex cartons in the country. Established in the year 1979, we have over three decades of experience in this field. Our founder Mr. Arun Bhandari is one of the distinguished creed of the first-generation entrepreneurs, who has, through vision and dedication, carved a niche for himself in the field of corrugated boxes and duplex cartons manufacturing. His farsightedness has placed “KAMLA” group as a key player in the packaging league.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>


        {/* ///// */}

        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold" style={{ color: "rgb(0, 32, 109)" }}>{member.role}</h2>
                  <h3 className="text-lg text-red-500 mt-1">{member.name}</h3>
                  <p className="text-gray-600 mt-4">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>


      </section>

    </>

  );
};

export default AboutUs;
