
import {PrismaClient} from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const {name,email,phone,message} = await request.json();
    const newPost = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        message
      },
    })
    
    return NextResponse.json({
      message: 'Success!',
      success:true
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
