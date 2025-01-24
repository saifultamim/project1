'use client'
import { useState } from "react";
import Link from "next/link";
import './style.css'
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 const largeDevice = <div className="hidden md:block space-x-8 md:text-lg lg:text-xl jaro">
 <Link href="/" className='hover:text-red-600'>Home</Link>
   <Link href="/services" className='hover:text-red-600'>Services</Link>
   <Link href="/client-stories" className='hover:text-red-600'>Client Stories</Link>
   <Link href="/career" className='hover:text-red-600'>Career</Link>
   <Link href="/contact" className='hover:text-red-600'>Contact</Link>
 </div>

 const smallDevice = <div className="grid grid-cols-1 px-2 pt-2 pb-3 space-y-1 sm:px-3 jaro ">
   <Link href="/" className='hover:text-red-600'>Home</Link>
   <Link href="/services" className='hover:text-red-600'>Services</Link>
   <Link href="/client-stories" className='hover:text-red-600'>Client Stories</Link>
   <Link href="/career" className='hover:text-red-600'>Career</Link>
   <Link href="/contact" className='hover:text-red-600'>Contact</Link>
 </div>

  return (
    <nav className="bg-[#05163B] shadow-md sticky top-0 z-50 py-2 text-white">
      <div className="container w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0">
            <Link href="/" className='flex items-center'>
            <Image src={`/images/brand.png`} alt='Company Logo' width={200} height={200} className=' h-16 w-16 z-10' />
              <p className="text-2xl font-bold text-blue-600">BrandName</p>
            </Link>
          </div>

          
         {largeDevice}

          
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      
      {isOpen && (
       <div className="  border border-blue-600 w-10/12 mx-auto" >
         {smallDevice}
       </div>
      )}
    </nav>
  );
}
