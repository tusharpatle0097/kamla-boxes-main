import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/logo2.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // React Router's useLocation hook to get current path
    const location = useLocation();

    // Toggle function for mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Define links as an array of objects
    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Clients", path: "/clients" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="from-blue-500 to-purple-600 p-5 shadow-md fixed top-0 w-full z-50" style={{ backgroundColor: "rgb(0, 32, 109)" }}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo or Brand Name */}
                <div className="text-white font-bold text-xl">
                    <div className='flex gap-4 center justify-center items-center'>
                        <span><img src={logo} alt="Logo" className="w-[70px] h-auto" /></span>
                        <span className='text-[15px]' style={{ fontFamily: "ui-monospace" }}> Kamla Corrogated Box Manufacturing Pvt Ltd.</span>
                    </div>
                </div>

                {/* Hamburger Icon for Mobile Menu */}
                <button
                    className="text-white lg:hidden block"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* Navbar Links - Hidden on Mobile */}
                <ul className="hidden lg:flex space-x-[50px]">
                    {links.map(link => (
                        <li key={link.name} className="cursor-pointer">
                            <Link
                                to={link.path}
                                className={`text-[20px] font-semibold transition duration-200 relative group ${
                                    location.pathname === link.path
                                        ? "text-red-400" // Active link style
                                        : "text-white hover:text-red-400"
                                }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute left-0 bottom-0 w-full h-[2px] ${
                                        location.pathname === link.path
                                            ? "bg-red-400 scale-x-100"
                                            : "bg-red-400 scale-x-0 group-hover:scale-x-100"
                                    } transition-all duration-300`}
                                ></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu - Visible when isOpen is true */}
            {isOpen && (
                <div className="lg:hidden">
                    <ul className="space-y-4 py-4">
                        {links.map(link => (
                            <li key={`${link.name}-mobile`} className="cursor-pointer">
                                <Link
                                    to={link.path}
                                    className={`font-semibold transition duration-200 ${
                                        location.pathname === link.path
                                            ? "text-yellow-500" // Active link style
                                            : "text-red-500 hover:text-gray-300"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
