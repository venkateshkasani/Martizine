import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const cookie = req.cookies.get('artk')?.value;
    if(!cookie) {
       return NextResponse.redirect(new URL('/signin',req.url));
    }
    return NextResponse.next();
}

export const config = {
  matcher: ['/'], 
};