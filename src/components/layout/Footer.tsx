
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-farmlink-primary">
                Farm<span className="text-farmlink-secondary">Link</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Connecting investors with farmers to grow sustainable agriculture in Pakistan.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-farmlink-primary dark:text-gray-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 hover:text-farmlink-primary dark:text-gray-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-farmlink-primary dark:text-gray-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-farmlink-primary dark:text-gray-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">For Farmers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/farmer-signup" className="text-gray-600 hover:text-farmlink-primary dark:text-gray-400 transition-colors">
                  Create Account
                </Link>
              </li>
              <li>
                <Link to="/farmer-guide" className="text-gray-600 hover:text-farmlink-primary dark:text-gray-400 transition-colors">
                  Farmer's Guide
                </Link>
              </li>
              <li>
                <Link to="/create-project" className="text-gray-600 hover:text-farmlink-primary dark:text-gray-400 transition-colors">
                  Submit Project
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">For Investors</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/investor-signup" className="text-gray-600 hover:text-farmlink-primary dark:text-gray-400 transition-colors">
                  Start Investing
                </Link>
              </li>
              <li>
                <Link to="/investment-guide" className="text-gray-600 hover:text-farmlink-primary dark:text-gray-400 transition-colors">
                  Investment Guide
                </Link>
              </li>
              <li>
                <Link to="/roi-calculator" className="text-gray-600 hover:text-farmlink-primary dark:text-gray-400 transition-colors">
                  ROI Calculator
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} FarmLink. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/terms" className="text-sm text-gray-500 hover:text-farmlink-primary dark:text-gray-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-farmlink-primary dark:text-gray-400 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
