import React from 'react';
import { Link } from 'react-router-dom'; // Using Link for React Router compatibility
import { links } from '../constants/links'; // Import shared links
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" text-gray-300 py-12 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "rgb(0, 32, 109)" }}>
            <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* About Section */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
                    <p className="text-gray-300">
                        Box Company specializes in eco-friendly packaging solutions, committed to providing quality products while reducing environmental impact.
                    </p>
                </div>

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

                {/* Contact Info Section */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                    <p className="text-gray-300">PLOT NO. A-47, BEHIND INDORAMA GATE NO.1, BUTIBORI MIDC, BUTIBORI, NAGPUR, MAHARASHTRA - 441122.</p>
                    <p className="text-gray-300 mt-2">Phone: +91-9028382728.</p>
                    <p className="text-gray-300 mt-2">Email: info@kamla.in</p>
                   
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
