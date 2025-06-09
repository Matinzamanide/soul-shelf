import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
                    src="/soul-shelf1.svg"
                    alt="hello"
                    width={100}
                    height={56}
                    priority
                  />
          <span className="text-lg font-bold">Soul Shelf</span>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Soul Shelf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
