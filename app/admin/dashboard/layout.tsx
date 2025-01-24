import AdminFooter from '@/shared-comp/adminFooter';
import AdminNavbar from '@/shared-comp/adminNavbar';
import React from 'react';

const layout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className='bg-zinc-200'>
           <AdminNavbar></AdminNavbar>
           <div className='w-10/12 mx-auto '> 
           {children}
           </div>
            <div className='bg-[#05163B]'>
            <AdminFooter></AdminFooter>
            </div>
        </div>
    );
};

export default layout;