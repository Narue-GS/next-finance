import { NextResponse } from 'next/server';

import { IUser } from '@/app/types';

function isUserValid(data:IUser){
  if(data) return true
}

export async function POST(req:any){
	try {
    throw new Error("Invalid User")
	} catch (e) {
      console.log(e);
			return new NextResponse(null, { status: 400, statusText: "Bad Request" });
	}
}