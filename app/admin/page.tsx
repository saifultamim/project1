'use client'
import { useState } from "react";
import { LoginInfo } from "./server-action";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    e.preventDefault();
   try{
    const result = await LoginInfo(formData)
  if(result.bool) {
    const expiryTime = Date.now() + 24 * 60 * 60 *  1000; 
    localStorage.setItem(
      "admin",
      JSON.stringify({ email:result.data[0].email,password:result.data[0].password, expiryTime})
    );
    router.push('/admin/otp');
  }else{router.push('/')}
   }catch(error){router.push('/')}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05163B]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-4 bg-white rounded shadow"
      >
        <h1 className="text-xl font-bold mb-4">Send an Email</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 bg-violet-100 focus:outline-none focus:ring-2 focus:ring-[#05163B] focus:border-[#05163B] rounded mb-2 text-black"
          required
        />
       <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 bg-violet-100 focus:outline-none focus:ring-2 focus:ring-[#05163B] focus:border-[#05163B] rounded mb-2 text-black"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#05163B] text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
        {status && <p className="mt-2 text-center text-md text-red-600">{status}</p>}
      </form>
    </div>
  );
}
