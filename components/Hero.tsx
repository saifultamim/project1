import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import hero from '@/public/images/hero.jpg'

const Hero = () => {
    return (
      <div className='bg-zinc-200'>
          <div className="w-full md:w-10/12 lg:w-10/12  mx-auto">
        <div className="container mx-auto px-6 lg:px-12 py-10 lg:flex lg:justify-between lg:items-center">
          
          <div className="text-center lg:text-left mb-10 lg:mb-0">
            <h2 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight jaro">
              Full-Service Web & Software Development
            </h2>
            <p className="text-gray-700 font-semibold text-lg mt-6">
              Focused On Your Business Success
            </p>
            <p className="text-gray-700 text-base mt-4">
              Our expert developers can turn your
              <br /> innovative ideas into exceptional digital
              <br /> solutions.
            </p>
            <Link href="/contact">
              <button className="hidden lg:inline-block mt-10 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-md ">
                Contact Us
              </button>
            </Link>
          </div>
  
          
          <div className="relative">
            <Image
              src={hero}
              alt="Section1"
              height={395}
              width={604}
              className="rounded-3xl shadow-lg object-cover h-full w-full"
            />
            <Link href="/contact">
              <button className="lg:hidden mt-6 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-md  w-full">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Hero;