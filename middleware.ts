import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(req: NextRequest) {
    const authCookie = cookies().get('status')
    if (req.nextUrl.pathname.startsWith('/Login') && authCookie) {
        return NextResponse.redirect('http://localhost:3000/Dashboard')
    }
    if (req.nextUrl.pathname.startsWith('/Connections') && !authCookie) {
        return NextResponse.redirect('http://localhost:3000/Login')
    }
    if (req.nextUrl.pathname.startsWith('/Dashboard') && !authCookie) {
        return NextResponse.redirect('http://localhost:3000/Login')
    }
    if (req.nextUrl.pathname.startsWith('/Settings') && !authCookie) {
        return NextResponse.redirect('http://localhost:3000/Login')
    }
    if (req.nextUrl.pathname.startsWith('/Notifications') && !authCookie) {
        return NextResponse.redirect('http://localhost:3000/Login')
    }
    if (req.nextUrl.pathname.startsWith('/Profile') && !authCookie) {
        return NextResponse.redirect('http://localhost:3000/Login')
    }
    return NextResponse.next()
}

