import { contactForm } from "@/utils/type"

export async function contactInfo(formData: contactForm) {
  const res = await fetch('/api/contact',{
    method:'POST',
    headers:{
     'Content-Type': 'application/json', 
    },
    body:JSON.stringify(formData)
  })
  const result = res.json()
  return result

}
