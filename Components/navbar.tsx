"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Navigation from "./Navigation"; // Adjust the path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-gray-900">
            <Link href="/">Logo</Link>
          </div>
          <Navigation />
          <div className="hidden md:flex space-x-6">
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-600"
            >
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <Link
            href="/about"
            className="block py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="block py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
