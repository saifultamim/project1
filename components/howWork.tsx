
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
 
  const  howWorkprocess = [
  {id: 1,title: "Conceptualization",icon:<IoIosArrowForward  />},
  {id: 2,title: "Specifications",icon:<IoIosArrowForward  />},
  {id: 3,title: "Design",icon:<IoIosArrowForward  />},
  {id: 4,title: "Development",icon:<IoIosArrowForward  />},
  {id: 5,title: "QA",icon:<IoIosArrowForward  />},
  {id: 6,title: "Project Launch",icon:<IoIosArrowForward  />},
  {id: 7,title: "Maintenance",}
]

 const howWorkButton = [
    {id: 1,title: "IMAGINE",icon:<IoIosArrowForward  />},
    {id: 2,title: "BUILD",icon:<IoIosArrowForward  />},
    {id: 3,title: "SUCCEED"}
  ]
  

const HowWork = () => {
    return (
        <div className='bg-zinc-200'>
          <div className="w-10/12 mx-auto  py-20">
        <div className="container mx-auto px-6 lg:px-12">
        
          <div className="text-center md:text-left mb-12">
            <h2 className="text-4xl text-gray-900 font-bold jaro">How We Work</h2>
            <p className="text-xl text-gray-700 mt-6">
              We use a practical strategy to deliver projects through agile-driven stages,
              <br />
              <span>regardless of the complexity of the project.</span>
            </p>
          </div>
  
       <div className='flex gap-4 text-lg md:text-2xl lg:text-3xl jaro justify-center text-white'>
        {
          howWorkButton?.map((params,idx)=><div key={idx}>
            <div className='flex items-center gap-1'>
            <div className=' bg-red-600 px-2 py-1  md:px-3 md:py-3 lg:px-6 lg:py-3 rounded-lg'>
              <p>{params.title}</p>
            </div>
            <p className='text-black'>{params?.icon}</p>
            </div>
          </div>)
        }
       </div>
  
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:flex gap-2 text-lg jaro justify-center'>
           {howWorkprocess?.map((params,idx)=><div key={idx} className='flex items-center gap-1 justify-center'>
           <p>{params.title}</p>
            <p className='hidden lg:block'>{params?.icon}</p>
           </div>)}
          </div>
        </div>
      </div>

        </div>
    );
};

export default HowWork;