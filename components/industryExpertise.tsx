import Image from 'next/image';
import React from 'react';
import realState from '@/public/images/industry/realEstate.png';
import financialService from '@/public/images/industry/financialService.png';
import ecommerce from '@/public/images/industry/ecommerce.png';
import transportation from '@/public/images/industry/transportation.jpg';
import publicSector from '@/public/images/industry/publicSector.jpg';
import itServices from '@/public/images/industry/itServices.png';
import entertainment from '@/public/images/industry/entertainment.png';
import manufacturing from '@/public/images/industry/manufacturing.jpg';
const industry = [
    {id:1,title:"Real Estate",image:realState},
    {id:2,title:"Financial Services",image:financialService},
    {id:3,title:"E-Commerce",image:ecommerce},
    {id:4,title:"Transportation",image:transportation},
    {id:5,title:"Public Sector",image:publicSector},
    {id:6,title:"IT Services",image: itServices},
    {id:7,title:"Entertainment",image:entertainment},
    {id:8,title:"Manufacturing",image:manufacturing}
  ]
const IndustryExpertise = () => {
    return (
       <div className='bg-zinc-200'>
          <div className=" w-full md:w-10/12 lg:w-10/12 mx-auto px-6 md:px-20 lg:px-28 py-16 ">
        <div className="">
          <h2 className="text-4xl font-bold text-gray-800 jaro">Industry Expertise</h2>
          <p className="text-lg text-gray-600 mt-4">
            Discover yours today! We have expertise in creating
            creative solutions <br /> for a range of industries.
          </p>
        </div>
  
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
          {industry.map((data) => (
            <div
              key={data.id}
              className="bg-white shadow-lg rounded-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 mx-auto w-full max-w-sm mt-3 ">
              <div className="relative  h-28">
                <Image
                  src={data.image}
                  alt={data.title}
                  height={100}
                  width={100}
                  className="rounded-lg  mx-auto"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className=" text-sm md:text-md lg;text-lg font-semibold text-gray-800">{data.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
       </div>
    );
};

export default IndustryExpertise;