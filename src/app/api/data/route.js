import { NextResponse } from 'next/server';

export async function GET() {
  
  const data = { message: "Hello from the API!" };
  
  return NextResponse.json(data);
}