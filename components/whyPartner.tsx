import React from 'react';
import { FaArrowRight } from "react-icons/fa";
    const whyPartner = [
      {
        title: "Agile Development",
        icon: <FaArrowRight />,
        items: [
          "Custom services",
          "Quality-intact approach",
          "Rapid iterations",
          "Debt-free delivery",
          "Faster time-to-market"
        ]
      },
      {
        title: "Versatile Experience",
        icon: <FaArrowRight />,
        items: [
          "Senior bilingual engineers",
          "Scalable teams",
          "Aligned time zones",
          "Diverse industry experience",
          "Top-tier technical expertise"
        ]
      },
      {
        title: "Empowered Decisions",
        icon: <FaArrowRight />,
        items: [
          "Continuous feedback loops",
          "Timely project deliverables",
          "PCI-DSS security standards",
          "Transparent communication",
          "Full visibility of project progress"
        ]
      }
    ]
const WhyPartner = () => {
    return (
      <div className='bg-zinc-200 py-16'>
          <div className="w-10/12 mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12 jaro">
          Why Partner With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-4">
        {
            whyPartner?.map((params,idx)=><div key={idx} className=' bg-white mx-auto w-10/12  py-4 transition-transform transform hover:scale-105 rounded-lg'>
                <p className='jaro text-xl'>{params.title}</p>
                <div>
                    {params.items?.map((param,i)=><div key={i} className='flex items-center gap-2 ml-4'>
                        <p className='text-red-500'>{params.icon}</p>
                        <p className='text-sm md:text-md lg:text-lg'>{param}</p>
                    </div>)}
                </div>
            </div>)
        }
        </div>
      </div>
      </div>
    );
};

export default WhyPartner;