
export async function jobGet(){
 const response = await fetch('/api/career', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json', 
  },
  cache: 'no-store',
});

const result = await response.json();
 return result
}


export async function jobDelete (params:any) {
    const response = await fetch('/api/career', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json', 
        },
        body:JSON.stringify(params),
        cache: 'no-store',
      });
      
      const result = await response.json();
       return result
}

export async function admin (admin:any) {
    const response = await fetch('/api/login', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json', 
        },
        body:JSON.stringify(admin),
        cache: 'no-store',
      });
      
      const result = await response.json();
       return result
}