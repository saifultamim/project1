'use client'
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BiSolidMap } from "react-icons/bi";
import { contactInfo } from "./server-action";
import Swal from "sweetalert2";


const Page = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
         const res = await contactInfo(formData)
      if(res.success){
           Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for reaching out. We will get back to you shortly.",
            showConfirmButton: false,
            timer: 5000,
            customClass: {
              popup: 'bg-[#05163B]  text-white rounded-lg'
            }
          });
      }else{
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Something went wrong. Please try again later.",
          showConfirmButton: false,
          timer: 5000,
          customClass: {
            popup: 'bg-[#05163B] text-md text-white rounded-lg'
          }
        });
      }
     
      setInterval(() => {
        window.location.reload();
    }, 5000); 
        }

  const socialLinks = [
{icon:<FaFacebook />},
{icon:<FaLinkedin />},
{icon:<FaSquareTwitter />}
  ]
const contactUs = [
  {icon:<MdEmail />,title:'info@dotbdsolutions.com'},
  {icon:<ImPhone />,title:'+880 8741685279'},
  {icon:<BiSolidMap />,title:<>SEL TRIDENT TOWER <br/> 57, Purana Paltan Line,Dhaka</>}
]
    return (
<main className="">


  <section className="w-10/12  mx-auto flex flex-col lg:flex-row gap-10 py-12 bg-zinc-200">
    <section className="w-full  ">
      <div className="mb-8 lg:mb-0 lg:py-5">
        {contactUs?.map((params, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 mb-4 bg-white shadow-md p-4 rounded-lg hover:scale-105 transition transform duration-300"
          >
            <div className="text-violet-800 text-2xl">{params.icon}</div>
            <p className="text-gray-700 font-medium">{params.title}</p>
          </div>
        ))}

      </div>
    </section>

    <section className="w-full ">
      <h4 className="text-3xl font-semibold mb-6 text-center lg:text-left animate-fade-in jaro">Get in Touch</h4>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-6 bg-white p-8 rounded-lg shadow-lg animate-zoom-in"
      >
        <div className=''>
        <label htmlFor="name" className="input-label font-semibold">
            Name
          </label>
          <input
            id="name"
            placeholder='Enter your name'
            name="name"
            onChange={handleChange}
            type="text"
            value={formData.name}
            className='w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-600 bg-violet-100'
          />
        </div>

        <div >
        <label htmlFor="email" className="input-label font-semibold">
            Email <sub className='text-red-600 text-xl'>*</sub>
          </label>
          <input
            id="email"
            placeholder='Enter your Email'
            name="email"
            onChange={handleChange}
            type="email"
            value={formData.email}
            className='w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-600 bg-violet-100'
            required
            />
        </div>
        <div >
        <label htmlFor="phone" className="input-label font-semibold">
            Phone<sub className="text-red-600 text-xl "> *</sub>
          </label>
          <input
            id="phone"
            placeholder='Enter your Phone'
            name="phone"
            onChange={handleChange}
            type="text"
            value={formData.phone}
            className='w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-600 bg-violet-100'
            required
            />
        </div>

        <div>
          <label htmlFor="message" className="input-label font-semibold">
            Message
          </label>
          <textarea
            name="message"
            placeholder='Write your message here...'
            className="w-full px-4 py-2 rounded-md focus:border-blue-600  focus:outline-none transition bg-violet-100"
            onChange={handleChange}
            value={formData.message}
            rows={6}
          />
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="w-full py-3 rounded-md font-bold text-white bg-violet-700 transition"
          >
          Submit
          </button>
        </div>
      </form>
    </section>
  </section>
</main>

    );
};

export default Page;