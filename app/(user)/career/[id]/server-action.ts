import prisma from '@/prisma';
import { NextResponse } from 'next/server';

export async function jobDetail (params:any) {      
         const result = await prisma.career.findMany({
            where : {
                id:Number(params)
            }
         });
         if(result.length>0){return NextResponse.json({message:result,bool:true})}
         else{return NextResponse.json({message:'No Data Here',bool:false})}  
}