import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log("executed middleware");  // This should log in your terminal

  return NextResponse.redirect(new URL('/homepage', request.url));
}

export const config = {
  // matcher: ['/((?!signin).*)'],  // This applies the middleware to all routes except '/signin'
};
