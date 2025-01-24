

import prisma from '@/prisma';
import { NextRequest, NextResponse } from 'next/server'


export async function GET() {
  try {
     const result = await prisma.contact.findMany();
    return NextResponse.json({data:result,valid:true});
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(request:NextRequest) {
  try {
    const data = await request.json()
    const result = await prisma.contact.update({
      where : {
        id:data
      },
      data:{
        status:true,
      }
    })
        if(result.status){
          return NextResponse.json({message:result.status,success:true});
        }
        else{
          return NextResponse.json({message:'something went wrong',success:false});
        }

  } catch (error) {
     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


export async function DELETE(request:NextRequest) {
  try {
    const data = await request.json()
    const result = await prisma.contact.delete({
      where: {
        id:data
      }
    })
    if(result){
      return NextResponse.json({message:"deleted the message",success:true});
    }
    else{
      return NextResponse.json({message:'something went wrong',success:false});
    }
  } catch (error) {
    

  }
}

