import { contactForm } from "@/utils/type"

export async function getOTP(formData:any) {
  const res = await fetch('/api/otp',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json', 
    },
    body:JSON.stringify(formData)
  })
  const result = res.json()
  return result

}



export async function OTPdelete(formData: contactForm) {
  const res = await fetch('/api/contact',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(formData)
  })
  const result = await res.json()
  return result

}
