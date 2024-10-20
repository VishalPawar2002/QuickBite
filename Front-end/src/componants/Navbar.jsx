import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li><Link to="/" className="hover:text-orange-600 transition">Home</Link></li>
      <li><Link to="/menu" className="hover:text-orange-600 transition">Menu</Link></li>
      <li><Link to="#about" className="hover:text-orange-600 transition">About Us</Link></li>
      <li><Link to="#order" className="hover:text-orange-600 transition">Order Now</Link></li>
    </>
  );

  return (
    <div className={`max-w-screen-2xl mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${sticky ? "bg-white shadow-lg" : "bg-transparent"}`}>
      <nav className="flex justify-between items-center p-4">
        <Link to="/" className="text-3xl font-extrabold transition">
          <span className="text-orange-500">Quick</span><span className="text-pink-500">Bite</span>
        </Link>
        <div className="hidden lg:flex items-center space-x-6">
          <ul className="flex space-x-6 text-lg font-semibold text-gray-700">
            {navItems}
          </ul>
          <div className="relative hidden md:block">
            <input type="text" className="bg-gray-100 rounded-full py-2 pl-8 pr-4 outline-none focus:ring-2 focus:ring-orange-500" placeholder="Search" />
            <svg className="h-5 w-5 absolute top-2 left-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6M4 11a7 7 0 1114 0 7 7 0 01-14 0z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" />
            <svg className="swap-off h-7 w-7 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64 17l-.71.71a1 1 0 001.41 1.41l.71-.71A1 1 0 005.64 17zM12 5a1 1 0 100-2v1a1 1 0 010 2v1a1 1 0 100-2zM5.64 7.05A1 1 0 007 6.34L5.64 5a1 1 0 00-1.41 1.41zM17 17.66a1 1 0 001.41 0l.71-.71a1 1 0 10-1.41-1.41l-.71.71A1 1 0 0017 17.66zM4 12h1a1 1 0 100-2H4a1 1 0 000 2zm7 7a1 1 0 001 1v1a1 1 0 002 0v-1a1 1 0 10-2 0zM17.66 7.34a1 1 0 00.71-.29 1 1 0 00-1.41-1.41l-.71.71a1 1 0 001.41 1.41zM20 12a1 1 0 100-2h-1a1 1 0 000 2zM12 6.5A5.5 5.5 0 1012 17a5.5 5.5 0 000-10.5zM17.5 12A3.5 3.5 0 1112 8.5 3.5 3.5 0 0117.5 12z" />
            </svg>
            <svg className="swap-on h-7 w-7 fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73 8.15 8.15 0 01-8.14-8.15 8.59 8.59 0 01.25-2A1 1 0 008 2.36a10.14 10.14 0 1022 14.05 1 1 0 00-1.36-.41A8.05 8.05 0 0112.14 19.73z" />
            </svg>
          </label>
          <Link to="/login" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:from-pink-500 hover:to-orange-500 transition">Login</Link>
        </div>
        <div className="lg:hidden">
          <button className="text-gray-500 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      <div className="dropdown lg:hidden">
        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
          {navItems}
        </ul>
      </div>
    </div>
  );
}
