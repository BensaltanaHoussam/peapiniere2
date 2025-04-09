import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;
    
    // TODO: Add your authentication logic here
    // This is just an example response
    if (email === 'test@example.com' && password === 'password') {
      return NextResponse.json({ 
        success: true, 
        token: 'dummy-token' 
      });
    }

    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}