import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(request:any) {
  return new Response('Hello, Next.js!', {
    status: 200,
  });
}