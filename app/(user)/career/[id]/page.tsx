import React from 'react';
import { jobDetail } from './server-action';
import { BsDot } from "react-icons/bs";

const Page = async ({params}:{ params: { id: any } }) => {
    const res = await jobDetail(params.id)
     const result = await res.json()
    return (
        <div className="bg-zinc-200 py-8 w-9/12 mx-auto">
        <div className="">
          <div className=" shadow-lg rounded-lg p-6 lg:p-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Job Details</h1>
  
            {result && result?.bool ? (
              result?.message.map((params:any, idx:any) => (
                <div key={idx} className="mb-8">
                 
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">
                      {params.position} - Recruitment Notice
                    </h2>
                    <p className="text-sm text-gray-600 italic mb-4">
                      *** We strongly encourage you to read the whole circular prior to applying ***
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <p className="text-gray-700 font-medium">Company: <span className="font-normal">BrandName</span></p>
                      <p className="text-gray-700 font-medium">Location: <span className="font-normal">Malibag</span></p>
                      <p className="text-gray-700 font-medium">Position: <span className="font-normal">{params.position}</span></p>
                      <p className="text-gray-700 font-medium">Job Nature: <span className="font-normal">{params.jobNature}</span></p>
                      <p className="text-gray-700 font-medium">Office Hours: <span className="font-normal">9:00 AM - 6:00 PM</span></p>
                      <p className="text-gray-700 font-medium">Weekend: <span className="font-normal">Saturday, Sunday</span></p>
                      <p className="text-gray-700 font-medium">Deadline: <span className="font-normal">{params.deadline}</span></p>
                      <p className="text-gray-700 font-medium">Salary: <span className="font-normal"> {params.salaryRange} BDT per (month)</span></p>
                    </div>
                  </div>
  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Job Responsibilities:</h3>
                    {params?.responsibilities.map((resp:any, idx:any) => (
                      <div key={idx} className="flex items-center gap-2 mb-2">
                        <BsDot className="text-gray-600" />
                        <p className="text-gray-700">{resp}</p>
                      </div>
                    ))}
                  </div>
  
                 
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Requirements:</h3>
                    {params?.requirements.map((req:any, idx:any) => (
                      <div key={idx} className="flex items-center gap-2 mb-2">
                        <BsDot className="text-gray-600" />
                        <p className="text-gray-700">{req}</p>
                      </div>
                    ))}
                  </div>
  
                 
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Requirements:</h3>
                    {params?.additionalRequirements.map((addReq:any, idx:any) => (
                      <div key={idx} className="flex items-center gap-2 mb-2">
                        <BsDot className="text-gray-600" />
                        <p className="text-gray-700">{addReq}</p>
                      </div>
                    ))}
                  </div>
  
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Benefits:</h3>
                    {params?.benefits.map((benefit:any, idx:any) => (
                      <div key={idx} className="flex items-center gap-2 mb-2">
                        <BsDot className="text-gray-600" />
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
  
                  
                  <div className="border-t pt-4">
                    <p className="text-gray-700 font-medium">Send Your CV: <span className="font-normal text-blue-600">infoBrandName@gmail.com</span></p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-700">No Information Available</p>
            )}
          </div>
        </div>
      </div>
    );
};

export default Page;