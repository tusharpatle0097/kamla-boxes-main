import React from 'react';
import { Link } from 'react-router-dom'; // Using Link for React Router compatibility
import { links } from '../constants/links'; // Import shared links

const Footer = () => {
    return (
        <footer className="text-gray-300 py-12 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "rgb(0, 32, 109)" }}>
            <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[20%,37.5%,37.5%] gap-12">
                {/* Quick Links Section */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {links.map(link => (
                            <li key={link.name}>
                                <Link to={link.path} className="hover:text-blue-400 transition duration-300">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* About Section */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Location</h3>
                    <div className="map-container" style={{ width: '100%', height: '450px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3726.8953942444114!2d78.9539722!3d20.916527799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU0JzU5LjUiTiA3OMKwNTcnMTQuMyJF!5e0!3m2!1sen!2sin!4v1733069690185!5m2!1sen!2sin"
                            width="100%"  // Make it responsive
                            height="100%" // Adjust height if needed
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

                {/* Contact Info Section */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                    <p className="text-gray-300">PLOT NO. A-47, BEHIND INDORAMA GATE NO.1, BUTIBORI MIDC, BUTIBORI, NAGPUR, MAHARASHTRA - 441122.</p>
                    <p className="text-gray-300 mt-2">Phone: +91-8369848287, +91-7400493069</p>
                    <p className="text-gray-300 mt-2">Email: info@kamla.co.in</p>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-grey-400 text-sm">
                &copy; Copyright © 2024 KCBMPL All Rights Reserved | Designed by KAMLA AI
            </div>
        </footer>
    );
};

export default Footer;
