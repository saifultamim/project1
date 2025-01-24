
import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Mailer } from "./sendMail";

export async function POST (request:NextRequest){
     const {email,password} = await request.json()
    const checkAdmin = await prisma.login.findMany ({
        where:{
           email:email,password:password
        }
    })
    if(checkAdmin.length>0){
        const newOtp=await prisma.$transaction(async (tx) => {
          await tx.otp.deleteMany({
              where: { email },
            });
           const otpCreate =await tx.otp.create({
              data: {
                email,
                otps:  Math.floor(100000 + Math.random() * 900000).toString(),
              },
            });
            const otpRecord = await prisma.otp.findMany({
                 where: {
                     email 
                    } 
                });
                return {otpRecord,otpCreate}

          });
          
          if(newOtp.otpRecord){
            try {
              await Mailer(newOtp.otpCreate)
              return NextResponse.json({data:checkAdmin,bool:true})
            }
            catch(error){
              return NextResponse.json({data:checkAdmin,bool:false})
            }
           
          }
          else{
            return NextResponse.json({data:'You are not Admin',bool:false})
          }
        
          

    } else{  return NextResponse.json({data:'You are not Admin',bool:false})}

}

export async function PATCH (request:NextRequest) {
 try {
  const res = await request.json()
  const data = await prisma.login.findMany({
    where:{
      email:res.email,
      password:res.password
    }
  })
  if(data.length>0){
    return NextResponse.json({message:data,bool:true})
  }else{
    return NextResponse.json({message:'you aree not admin',bool:false})
  }
 }catch(err){
  return NextResponse.json({message:'Some Internal issue',bool:false})
 }

 
}