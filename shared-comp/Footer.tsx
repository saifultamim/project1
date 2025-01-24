import React from 'react';
import logo from '@/public/images/brand.png'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='w-10/12 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between text-sm md:text-md lg:text-lg jaro text-white py-8 '>
            <div className='flex items-center gap-1'>
            <Image src={logo} alt='logo' width={100} height={100} className='w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16'/>
            <p>Xenon</p>
            </div>
            <div>
                <p className='text-md md:text-lg lg:text-xl'>Explore Xenon</p>
                <div className='grid grid-cols-1'>
                    <Link href='#' className='hover:underline decoration-red-600 hover:text-red-600'>about us</Link>
                    <Link href='#' className='hover:underline decoration-red-600 hover:text-red-600'>services</Link>
                    <Link href='#' className='hover:underline decoration-red-600 hover:text-red-600'>client stories</Link>
                </div>
            </div>

            <div>
                <p className='text-md md:text-lg lg:text-xl'>Get In Touch</p>
                <div className='grid grid-cols-1'>
                    <Link href='#' className='hover:underline decoration-red-600 hover:text-red-600'>Careers</Link>
                    <Link href='#' className='hover:underline decoration-red-600 hover:text-red-600'>Contact us</Link>
                </div>
            </div>

            <div>
            <p className='hover:underline decoration-red-600 hover:text-red-600'>info@mentorsit.com</p>
            <p className='hover:underline decoration-red-600 hover:text-red-600'>1/2 Outer Circular Road, Malibagh<br/>Dhaka-1217</p>

            </div>
        </footer>
    );
}
export default Footer;