// import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

import { IUser } from '@/app/types';

const defaultUsers:IUser[] = [
  {
    name: "Narue G. Santos",
    email: "narue@gmail.com",
    password: "3321",
  }
]

export async function POST(
  req: NextRequest,
  res: NextResponse,
) {
  try {
    const user = await req.json()
    const alredyExist = defaultUsers.find(i => i.email == user.email)
    if(alredyExist) return new Response(JSON.stringify({response:false}))
    else return new Response(JSON.stringify({response:true}))
    
  } catch (error) {
    return new NextResponse(null, { status: 400, statusText: "Bad Request" });
  }
}

