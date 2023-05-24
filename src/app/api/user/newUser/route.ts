import { NextResponse } from 'next/server';

import { IUser } from '@/app/types';
import { isUserValid } from '@/app/register/utils/validations';

export async function POST(req:any){
	if(!isUserValid) throw new Error("invalid user")
	try {
    return new NextResponse(req.body, { status: 200, statusText: "Succes" });
	} catch (e) {
      console.log(e);
			return new NextResponse(null, { status: 400, statusText: "Bad Request" });
	}
}