'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import banner_client from '@/public/images/banner_client.jpg'
import client from '@/public/images/client.png'
import { FiArrowRightCircle } from "react-icons/fi";
import { FiArrowLeftCircle } from "react-icons/fi";

const stories = [
    {
      name: 'John Doe1',
      designation: 'CEO, Example Corp',
      image: client,
      testimonial: 'This service was amazing! Highly recommend to anyone looking for quality and professionalism.',
      rating: 5,
    },
    {
      name: 'Jane Smith2',
      designation: 'Founder, Tech Solutions',
      image: client,
      testimonial: 'Absolutely fantastic experience working with this team. They went above and beyond!',
      rating: 4,
    },
    {
        name: 'John Doe3',
        designation: 'CEO, Example Corp',
        image: client,
        testimonial: 'This service was amazing! Highly recommend to anyone looking for quality and professionalism.',
        rating: 2,
      },
      {
        name: 'Jane Smith4',
        designation: 'Founder, Tech Solutions',
        image: client,
        testimonial: 'Absolutely fantastic experience working with this team. They went above and beyond!',
        rating: 3,
      },
  ];
  
const Page = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + stories.length) % stories.length
    );
  };

  const displayedCards = [];
  for (let i = 0; i < stories.length; i++) {
    displayedCards.push(stories[(currentIndex + i) % stories.length]);
  }
  
  

    return (
        <div className='bg-zinc-200 '>
          <div className="w-full md:w-10/12 lg:w-10/12  mx-auto">
        <div className="container mx-auto px-6 lg:px-12 py-10 lg:flex lg:justify-between lg:items-center">
         
          <div className="text-center lg:text-left mb-10 lg:mb-0">
            <h2 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight jaro">
            Our Clients,The Heart of Our Work
            </h2>
          
            <p className="text-gray-700 text-base mt-4">
                 Discover how founders, startups & enterprises <br />
                  from various industries use our software  <br />
                  services to reach their business goals.
              
            </p>
            <Link href="/contact">
              <button className="hidden lg:inline-block mt-10 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-md ">
                Contact Us
              </button>
            </Link>
          </div>
  
       
          <div className="relative">
            <Image
              src={banner_client}
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
       
    <section className="bg-zinc-200  py-16 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 jaro">
      What Our Clients Say
    </h2>
 <div className=' flex  gap-4 text-3xl text-red-600  font-extrabold'>
          <button onClick={()=>handleNext()} className=''><FiArrowLeftCircle /></button>
          <button onClick={()=>handlePrev()} className=''><FiArrowRightCircle /></button>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mt-8">
      {displayedCards.map((story, idx) => (
        <div
          key={idx}
          className="bg-white  rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          
          <div className=" relative">
            <Image
              src={story.image}
              alt={story.name}
              width={96}
              height={96}
              className=""
            />
          </div>

      
          <h3 className="text-xl font-semibold text-gray-800">{story.name}</h3>

          <p className="mt-6 text-gray-700 italic leading-relaxed">
          {`" ${story.testimonial} "`}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      </div>
      </div>
    );
};

export default Page;