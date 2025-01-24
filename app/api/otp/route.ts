
import {PrismaClient} from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  const res = await request.json()
  try {
    const otpRecord = await prisma.otp.findMany({
        where: {
          email: res.email,
          otps:res.otp

        },
      });
  if(otpRecord.length>0){return NextResponse.json({ success: true, message: 'OTP verified successfully!' });}
  else{return NextResponse.json({ success: false, message: 'OTP are not verified' });}
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
