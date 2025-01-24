'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { jobpost } from './server-action';
import { admin } from '../career/server-action';
import Swal from "sweetalert2";

interface UserData {
  email: string;
  [key: string]: any; 
}

const Page = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [inputFields, setInputFields] = useState({
    position: '',
    location: '',
    deadline: '',
    salaryRange: '',
    roleOverview: '',
    jobNature:'',
    responsibilities: [''],
    requirements: [''],
    additionalRequirements: [''],
    benefits: [''],
  });
 const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null); 
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(async() => {
      const dataStringify = localStorage.getItem('admin');
    if(dataStringify){
      const admins = JSON.parse(dataStringify )
      const adminServer = await admin(admins)
      if(!adminServer.bool){
         router.push('/')
      }
  }else{router.push('/')}
      if (dataStringify) {
        const dataParse = JSON.parse(dataStringify);
        setUserData(dataParse);
      }
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        
        const adminStringify = await localStorage.getItem('admin');
        if (adminStringify) {
          const admins = JSON.parse(adminStringify);
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
          if (!loading && (!userData || !userData.email)) {
            router.push('/');
          }
        }
      } catch (error) {
      }
    };
  
    fetchData();
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null); 
      }
    };
  }, [loading, userData, router]);

  if (loading) {
    return <div className='flex justify-center items-center h-screen'><span className='loader'></span></div>; 
  }

  if (!userData || !userData.email) {
    return null; 
  }

  const handleChange = (field: string, value: string) => {
    setInputFields({ ...inputFields, [field]: value });
  };

  const handleArrayChange = (
    arrayName: keyof typeof inputFields,
    index: number,
    value: string
  ) => {
    const updatedArray = [...(inputFields[arrayName] as string[])];
    updatedArray[index] = value;
    setInputFields({ ...inputFields, [arrayName]: updatedArray });
  };

  const addArrayField = (arrayName: keyof typeof inputFields) => {
    const updatedArray = [...(inputFields[arrayName] as string[]), ''];
    setInputFields({ ...inputFields, [arrayName]: updatedArray });
  };

  const removeArrayField = (arrayName: keyof typeof inputFields, index: number) => {
    const updatedArray = [...(inputFields[arrayName] as string[])];
    updatedArray.splice(index, 1); 
    setInputFields({ ...inputFields, [arrayName]: updatedArray });
  };

  const handleSubmit = async () => {
    const result = await jobpost(inputFields);
    if(result.bool){
      Swal.fire({
        position: "center",
        icon: "success",
        title: "create job post successfully",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: 'bg-[#05163B]  text-white rounded-lg'
        }
      });
    }
    else{
       Swal.fire({
                position: "center",
                icon: "error",
                title: "don't create job post successfullly",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                  popup: 'bg-[#05163B]  text-white rounded-lg'
                }
              });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-600 rounded-lg shadow-lg mt-16 mb-16">
     <h1 className="text-3xl font-semibold text-center text-white mb-6">Admin Job Post Manage</h1>
      <div className="space-y-6 px-8 py-8">
        <div>
          <label className="block font-semibold text-white mb-2">Position Name : </label>
          <input
            type="text"
            value={inputFields.position}
            onChange={(e) => handleChange('position', e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#05163B]"
          />
        </div>
        <div>
          <label className="block font-semibold text-white mb-2">Location : </label>
          <input
            type="text"
            value={inputFields.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#05163B]"
          />
        </div>
        <div>
          <label className="block font-semibold text-white mb-2">Deadline : </label>
          <input
            type="text"
            value={inputFields.deadline}
            onChange={(e) => handleChange('deadline', e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#05163B]"
          />
        </div>
        <div>
          <label className="block font-semibold text-white mb-2">Salary Range : </label>
          <input
            type="text"
            value={inputFields.salaryRange}
            onChange={(e) => handleChange('salaryRange', e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#05163B]"
          />
        </div>
        <div>
          <label className="block font-semibold text-white mb-2">Job Nature : (default: Onsite)</label>
          <input
            type="text"
            value={inputFields.jobNature}
            onChange={(e) => handleChange('jobNature', e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#05163B]"
          />
        </div>
        <div>
          <label className="block font-semibold text-white mb-2">Role Overview : </label>
          <textarea
            rows={4}
            value={inputFields.roleOverview}
            onChange={(e) => handleChange('roleOverview', e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#05163B]"
          />
        </div>
        {['responsibilities', 'requirements', 'additionalRequirements', 'benefits'].map((field) => (
          <div key={field}>
            <label className="block font-semibold text-white mb-2">
              {field.replace(/([A-Z])/g, ' $1')} : 
            </label>
            {(inputFields[field as keyof typeof inputFields] as string[]).map((value, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <textarea
                  rows={2}
                  value={value}
                  onChange={(e) =>
                    handleArrayChange(field as keyof typeof inputFields, index, e.target.value)
                  }
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#05163B]"
                />
                <button
                  type="button"
                  onClick={() => removeArrayField(field as keyof typeof inputFields, index)}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Removed
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayField(field as keyof typeof inputFields)}
              className="mt-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add {field.replace(/([A-Z])/g, ' $1')}
            </button>
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 text-white bg-[#05163B] rounded-lg hover:bg-blue-600 "
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Page;
