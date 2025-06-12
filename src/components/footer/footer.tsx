import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
                    src="/soul.png"
                    alt="hello"
                    width={150}
                    height={56}
                    priority
                  />
          
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
