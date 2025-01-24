


export async function clientMessage() {
  const res = await fetch('/api/clientMessage',{
    method:'GET',
    headers:{
        'Content-Type':'application/json',
      },
      cache:'no-store'
  })
  const result = await res.json()
  return result

}


export async function markSeenUpdate(params:number) {
  const res = await fetch('/api/clientMessage',{
    method:'PUT',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(params)
  })
  const result = await res.json()
  return result

}



export async function messageDelete(params:number) {
  const res = await fetch('/api/clientMessage',{
    method:'DELETE',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(params)
  })
  const result = await res.json()
  return result

}
