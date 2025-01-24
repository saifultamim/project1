import { loginForm } from "@/utils/type";

export async function LoginInfo(data:loginForm){
 const response = await fetch('/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', 
  },
  body: JSON.stringify(data), 
  cache: 'no-store',
});
const result = await response.json();
 return result
}