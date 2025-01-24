
import prisma from '@/prisma';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const {position,location,deadline,salaryRange,responsibilities,requirements,additionalRequirements,benefits,roleOverview,jobNature} = await request.json();
   const result = await prisma.career.create({
      data:{
        additionalRequirements: additionalRequirements,
    benefits: benefits,
    requirements: requirements,
    responsibilities: responsibilities,
    deadline: deadline,
    location: location,
    position: position,
    roleOverview: roleOverview,
    salaryRange: salaryRange,
    jobNature: jobNature || "Onsite"
      }
   })
   if(result){
    return NextResponse.json({
      message: result,
      bool:true
    });
   }
   else{
    return NextResponse.json({
      message: result,
      bool:false
    });
   }
   
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {

   const result = await prisma.career.findMany()
   if(result){

    return NextResponse.json({
      message: result,
      bool:true
    });
   }
   else{
    return NextResponse.json({
      message: result,
      bool:false
    });
   }
   
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE (request:NextRequest) {
  const res = await request.json()
  try{
    const deletedRecord = await prisma.career.delete({
      where: {
        id: res.id,
      },
    });
    if(deletedRecord){
      return NextResponse.json({message:deletedRecord,bool:true})
    }else{
      return NextResponse.json({message:'Something went wrond',bool:false})
    }
  }catch(error){
    return NextResponse.json({message:'Internal server error',bool:false})
  }

}
