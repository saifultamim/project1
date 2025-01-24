'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import career from '@/public/images/career.jpg'
import img1 from '@/public/images/career/software_team.jpg'
import img2 from '@/public/images/career/software_team2.jpg'
import img3 from '@/public/images/career/web_team.png'
import img4 from '@/public/images/career/web_team2.jpg'
import {  BsGraphUpArrow, BsLightning } from 'react-icons/bs';
import { FaHandsHelping, FaRegLightbulb } from 'react-icons/fa';
import { jobGet } from '@/app/admin/dashboard/career/server-action';

import { IoIosArrowForward } from "react-icons/io";

import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/navigation';
<IoIosArrowBack />
const career_img = [
   { id:1,img:img1},
   { id:1,img:img2},
   { id:1,img:img3},
   { id:1,img:img4},
]
const docs = [
    {
      id: 1,
      icon: <BsGraphUpArrow />,
      title: "Inclusive Environment",
      description: `Our harmonious team consists of great people with 
                    broad interests from all around the world. We deeply 
                    respect everyone’s individuality & beliefs.`,
    },
    {
      id: 2,
      icon: <FaHandsHelping />,
      title: "Flexible Work",
      description: `We understand that people have both personal and 
                    professional goals, that’s why we have built a hybrid
                    work policy for permanent employees for better work/life 
                    balance.`,
    },
    {
      id: 3,
      icon: <BsLightning />,
      title: "People-First Development",
      description: `We offer an excellent learning environment for you to 
                    gain experience on the latest technologies from industry-
                    leading mentors, skill development training & real-life 
                    client projects.`,
    },
    {
      id: 4,
      icon: <FaRegLightbulb />,
      title: "Fair Benefits",
      description: `Not only do we host a variety of events to celebrate our 
                    achievements; but we also offer competitive salaries,
                    fully subsidized lunches & snacks, family medical 
                    insurance coverage & life insurance coverage for our 
                    permanent employees.`,
    },
  ];
  const vacancy = [{id:1,role:'software'}]
  const scrollToLearn = () => {
    const learnSection = document.getElementById('learn-section');
    learnSection?.scrollIntoView({ behavior: 'smooth' });
  };
const Page = () => {
  const router = useRouter()
  const [vacancy,setVacancy]=useState([])
   useEffect(()=>{
      const careers = async() => {
          const data = await jobGet()
           setVacancy(data.message)
      }
      careers()
   },[])
    return (
        <div className='bg-zinc-200 pb-16'>
             <div className="w-10/12  mx-auto">
        <div className="container mx-auto px-6 lg:px-12 py-10 lg:flex lg:justify-between lg:items-center">
         
          <div className="text-center lg:text-left mb-10 lg:mb-0">
            <h2 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight jaro">
            We Empower People to Innovate
            </h2>
            <p className="text-gray-700 text-base mt-4">
            We believe technology & human development <br/>
            go hand in hand. In our culture, we invest in<br/>
            You to help you reach your career goals.
              
            </p>
            
              <button className="hidden lg:inline-block mt-10 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-md "  onClick={()=>scrollToLearn()}>
                Learn More
              </button>
            
          </div>
  
         
          <div className="relative">
            <Image
              src={career}
              alt="Section1"
              height={395}
              width={604}
              className="rounded-3xl shadow-lg object-cover h-full w-full"
            />
            <button className="lg:hidden mt-6 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-md  w-full"  onClick={()=>scrollToLearn()}>
                Learn More
              </button>
          </div>
        </div>


       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
    {career_img.map((item, index) => (
      <Image
        key={item.id + index}
        src={item.img}
        alt='career'
        width={400}
        height={400}
        quality={95}
        className="w-full h-full mx-auto object-cover rounded-lg"
      />
    ))}
  </div>
     
       <div id='learn-section'>
       <p className='text-black text-3xl font-bold  w-4/5 mx-auto  text-center lg:text-left md:text-left jaro'>
       You bring the talent. we <br/>have the perks.</p>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-4/5 mx-auto">
      {docs.map((params) => (
        <div
          key={params.id}
          className="mx-auto mb-8 md:mb-0 lg:mb-0 md:p-8 lg:mt-8"
        >
          <span className="text-5xl text-red-500 flex pb-3">{params.icon}</span>
          <h2 className="text-3xl font-extrabold text-black mt-3 jaro">
            {params.title}
          </h2>
          <p className="text-black font-semibold mt-2 whitespace-pre-line">
            {params.description}
          </p>
        </div>
      ))}
  
        </div>

        <div className='w-4/5 mx-auto'>
        <p className='text-black text-3xl font-bold jaro mb-5'>Current Openings...</p>
        <div className="bg-gray-100 py-8 px-4 rounded">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Available Vacancies</h1>

            {vacancy && vacancy.length > 0 ? (
                <div className="overflow-x-auto">
                    <div className="hidden md:grid grid-cols-4 bg-gray-800 text-white text-sm md:text-md lg:text-lg font-semibold py-3 px-4 rounded-t-lg">
                        <p className=''>Position</p>
                        <p className=''>Deadline</p>
                        <p className=''>Location</p>
                        <p className=' text-center'>Action</p>
                    </div>
                    <div className="divide-y divide-gray-200">
                        {vacancy.map((params: any, idx: number) => (
                            <div
                                key={idx}
                                className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center bg-white p-4 text-gray-800 hover:bg-gray-50 text-sm md:text-md lg:text-lg"
                            >
                                <p className="">{params.position}</p>
                                <p className="">{params.deadline}</p>
                                <p className="">{params.location}</p>
                                <Link
                                    href={`/career/${params.id}`}
                                    target="_blank"
                                    className="text-blue-600 hover:text-blue-800 flex items-center justify-start md:justify-center"
                                >
                                    <IoIosArrowForward className="ml-1 text-xl" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-center text-red-600 text-xl font-bold">No Vacancies Available...</p>
            )}
        </div>
        </div>
       </div>


      </div>
        </div>
    );
};

export default Page;