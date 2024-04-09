import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 text-black p-4 w-full">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center justify-between">
        <div className="flex flex-wrap lg:flex-nowrap lg:space-x-4">
          <a href="#" className="block mt-2 lg:inline-block lg:mt-0 hover:text-gray-400 mr-4">Home</a>
          <a href="/about" className="block mt-2 lg:inline-block lg:mt-0 hover:text-gray-400 mr-4">About</a>
          <a href="/privacy-policy#" className="block mt-2 lg:inline-block lg:mt-0 hover:text-gray-400 mr-4">Privacy Policy</a>
        </div>
        <p className="text-sm mt-4 lg:mt-0">
          © {new Date().getFullYear()} Convertario. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
