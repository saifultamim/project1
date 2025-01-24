import Footer from '@/shared-comp/Footer';
import Navbar from '@/shared-comp/Navbar';
import React from 'react';

const layout = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <Navbar></Navbar>
           <div className='bg-zinc-200 '> 
           {children}
           </div>
            <div className='bg-[#05163B]'>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default layout;