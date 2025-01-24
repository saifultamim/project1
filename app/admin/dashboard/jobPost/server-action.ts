import { jobDetails} from "@/utils/type";


export async function jobpost(data:jobDetails){
 const response = await fetch('/api/career', {
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