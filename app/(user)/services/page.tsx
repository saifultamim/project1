import Image from "next/image";
import { RiComputerLine } from "react-icons/ri";
import { FiBox, FiDatabase } from "react-icons/fi";
import { FaLink, FaDesktop } from "react-icons/fa";
import { PiPulseBold } from "react-icons/pi";
import serviceProcess from '@/public/images/service/serviceProcess.png'
import service_banner from '@/public/images/service/service-banner.webp'
import web_software from '@/public/images/service/web_and_software_development.png'
import product_ba from '@/public/images/service/ui_ux.jpg'
import api_integration from '@/public/images/service/api_integration.jpg'
import offshore_outsourcing from '@/public/images/service/offshore_outsourcing.png'
import travel_data_integration from '@/public/images/service/travel_data_integration.png'
import ui_ux from '@/public/images/service/ui_ux.jpg'

const services = [
  {
    title: "WEB & SOFTWARE DEVELOPMENT",
    description:
      "We combine our expertise in various domains with a solid development methodology and architecture to deliver rich, engaging, cross-platform and performant web and software applications.",
    icon: <RiComputerLine className="text-5xl text-blue-500" />,
    image:web_software ,
    background: "bg-[#F7D6D0]",
    reverse:true
  },
  {
    title: "PRODUCT BA, ROADMAP & MVP",
    description:
      "The values and culture of your business are reflected in your brand. We aim to create brands that stand out from the competition and attract attention from their sector.",
    icon: <FiBox className="text-5xl text-blue-500" />,
    image:product_ba,
    background: "bg-blue-200",
    reverse:false
  },
  {
    title: "API INTEGRATION",
    description:
      "We have experience in building multi-tenant SaaS applications. Our team has managed back-end APIs for large-scale companies like Airbnb, WifiSLAM, and HomeAway.",
    icon: <FaLink className="text-5xl text-blue-500" />,
    image: api_integration,
    background: "bg-[#F7D6D0]",
    reverse:true
  },
  {
    title: "OFFSHORE OUTSOURCING",
    description:
      "We are able to deliver our services on time and within budget. Our proven track record ensures quality solutions with added value in best people management.",
    icon: <PiPulseBold className="text-5xl text-blue-500" />,
    image: offshore_outsourcing,
    background: "bg-blue-200",
    reverse:false
  },
  {
    title: "TRAVEL DATA INTEGRATION",
    description:
      "Easily integrate data from popular travel websites such as Booking.com, VRBO, Expedia, and Trip.com into your own systems.",
    icon: <FiDatabase className="text-5xl text-blue-500" />,
    image: travel_data_integration,
    background: "bg-[#F7D6D0]",
    reverse:true
  },
  {
    title: "UI/UX DESIGN",
    description:
      "UI/UX design is crucial for user retention and satisfaction. A great UI/UX enhances brand loyalty, customer satisfaction, and increased sales.",
    icon: <FaDesktop className="text-5xl text-blue-500" />,
    image: ui_ux,
    background: "bg-blue-200",
    reverse:false
  },
];

const page = () => {
  return (
    <div className="bg-zinc-200 ">
     
      <div className="relative ">
        <Image
          src={service_banner}
          alt="Service Hero"
          width={1200}
          height={400}
          className="w-full"
        />
        <div className="absolute text-center w-full top-1/2 -translate-y-1/2">
          <p className="text-2xl md:text-4xl font-extrabold text-[#05163B]">
            WE TREAT <span className="text-black">CLIENTS</span>
          </p>
          <p className="text-2xl md:text-4xl font-extrabold text-[#05163B]">
            LIKE OUR <span className="text-black">PARTNERS</span>
          </p>
        </div>
      </div>

    <div className='w-10/12 mx-auto'>
        
        <div className="flex flex-col md:flex-row items-center w-4/5 mx-auto mt-12">
        <p className="text-xl md:text-2xl text-[#05163B] font-semibold text-center md:text-left jaro">
          We are what we repeatedly do. Excellence, then, is not an act, but habit.
        </p>
        <Image
          src={serviceProcess}
          alt="Service Process"
          width={400}
          height={300}
          className="mt-8 md:mt-0"
        />
      </div>

      
      <div className="w-4/5 mx-auto mt-12 text-center">
        <h2 className="font-bold text-[#05163B] text-2xl jaro">
          Our team is active and able to quickly adapt to contemporary technologies.
          We facilitate innovative convergences of social trends, mobility, cloud, and
          information by fusing technology with business objectives.
        </h2>
      </div>

      
      <div className="mt-24">
        <h3 className="text-4xl font-bold text-center text-black mb-12">
          Our Major Services
        </h3>
        
        <div className="mt-12">
  {services?.map((params, idx) => (
    <div
      key={idx}
      className={` grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border border-gray-300 rounded-lg shadow-lg p-6 mb-8 bg-white `}
    >
    
      <div className={`flex flex-col justify-between items-start space-y-4 lg:${params.reverse ? 'order-3' : ''} `}>
        <div className="text-blue-500 text-4xl">{params.icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{params.title}</h3>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
          GET A QUOTE
        </button>
      </div>

      
      <div className={`text-gray-600 text-base flex items-center lg:${params.reverse ? 'order-2' : ''} `}>
        <p>{params.description}</p>
      </div>

     
      <div className={`flex justify-center items-center lg:${params.reverse ? 'order-1' : ''}} `}>
        <div className="w-60 h-40 bg-gray-100 flex justify-center items-center rounded-lg overflow-hidden shadow-md">
          <Image
            src={params.image}
            alt={params.title}
            height={160} 
            width={160}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
    </div>
  );
};

export default page;
