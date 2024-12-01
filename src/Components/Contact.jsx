import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import baclImage from '../Assets/slides/S1.jpg'

const ContactUs = () => {

  let address = "https://www.google.com/maps/place/20%C2%B054'59.5%22N+78%C2%B057'14.3%22E/@20.9165303,78.9514081,17z/data=!3m1!4b1!4m4!3m3!8m2!3d20.9165303!4d78.953983?hl=en&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"

  const Hello = () => {
    window.open(address, "_blank");
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat p-6 mt-[6rem]"
      style={{
        backgroundImage: `url(${baclImage})`, // Replace with your image path
      }}
    >
      {/* Contact Info Section */}
      <div className="max-w-4xl w-full bg-white bg-opacity-80 shadow-2xl rounded-lg p-8 border border-gray-300 mb-12">

        <h2 className="text-4xl font-bold text-center text-teal-700 mb-10">Get in Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FiPhone className="w-10 h-10 mx-auto text-teal-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700">Call Us</h3>
            <p className="text-gray-600 text-lg mt-2">
              <span>+91-8369848287</span>
              <br />
              <span>+91-7400493069</span>
            </p>
          </div>
          <div className="text-center border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FiMail className="w-10 h-10 mx-auto text-teal-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700">Email Us</h3>
            <a href="mailto:info@arihantpack.com" className="text-red-600 text-lg mt-2 hover:underline">
              info@kamla.in
            </a>
          </div>
          <button onClick={Hello} className="text-center border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FiMapPin className="w-10 h-10 mx-auto text-teal-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700">Visit Us</h3>
            <p className="text-gray-600 text-lg mt-2">See our locations below</p>
          </button>
        </div>

        {/* Locations Section */}
        <div className="mt-10 space-y-6">
          <div className="p-6 bg-teal-50 border border-teal-200 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-teal-700">Location (Nagpur, Maharashtra)</h4>
            <p className="text-gray-600 mt-2">
              PLOT NO. A-47, BEHIND INDORAMA GATE NO.1, BUTIBORI MIDC, BUTIBORI, NAGPUR, MAHARASHTRA - 441122.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
