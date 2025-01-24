'use client'
import React, { useEffect, useState } from 'react';
import { admin, jobDelete, jobGet } from './server-action';
import { useRouter } from 'next/navigation';
import Swal from "sweetalert2";
import moment from 'moment';

const Page = () => {
    const router = useRouter()
    const [jobs, setJobs] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
      const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null); 
    const fetchJobs = async () => {
        try {
            const adminStringify =await localStorage.getItem('admin')
            if(adminStringify){
                const admins = JSON.parse(adminStringify )
        if (!admins.expiryTime || isNaN(new Date(admins.expiryTime).getTime())) {
            localStorage.removeItem('admin');
            router.push('/');
            return;
          }
            if (!intervalId) {
              const newIntervalId = setInterval(() => {
                if (Date.now() > admins.expiryTime) {
                  localStorage.removeItem('admin');
                  localStorage.removeItem("otpStartTime");
                  clearInterval(newIntervalId); 
                  setIntervalId(null);
                  router.push('/');
                }
              }, 1000); 
              setIntervalId(newIntervalId);
            }
                const adminServer = await admin(admins)
                if(!adminServer.bool){
                   router.push('/')
                }
            }else{router.push('/')}
           const result = await jobGet()
            setJobs(result);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message); 
            } else {
                setError('An unexpected error occurred'); 
            }
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
    
        fetchJobs(); 
        return () => {
            if (intervalId) {
              clearInterval(intervalId);
              setIntervalId(null); 
            }
          };
    }, []);

    if (loading) {
        return <div className='flex justify-center items-center h-screen'><span className='loader'></span></div>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    const handleClick = async(params:any) => {
        const result = await jobDelete(params)
       
        if(result.bool){
            Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "delete post successfullly",
                            showConfirmButton: false,
                            timer: 1500,
                            customClass: {
                                popup: 'bg-[#05163B]  text-white rounded-lg'
                              }
                          });
         await fetchJobs()
        }
        else{
              Swal.fire({
                              position: "center",
                              icon: "error",
                              title: "delete post not successfullly",
                              showConfirmButton: false,
                              timer: 1500,
                              customClass: {
                                popup: 'bg-[#05163B]  text-white rounded-lg'
                              }
                            });
        }
    }
    return (
        <div className='min-h-screen mt-16 mb-12'>
           <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Admin Career Manage</h1>
            
    {jobs?.message.length>0 ? 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {
    jobs?.message?.map((params: any, idx: any) => (
      <div key={idx} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl">
        <h3 className="text-xl font-semibold text-gray-800">{params.position}</h3>
        <p className="text-gray-500 mt-2">Posted on: <span className="font-medium text-gray-700">{moment(params.createdAt).format('MMMM D, YYYY ')}</span></p>
        <p className="text-gray-500 mt-2">Deadline: <span className="font-medium text-red-600">{params.deadline}</span></p>
        <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 " onClick={()=>handleClick(params)}>
        Delete
        </button>
      </div>
    ))}
      </div>
     : <div className="text-center text-red-600">
    <p className=''>No data available</p>
  </div>}
  
        </div>
    );
};

export default Page;
