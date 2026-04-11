import { getServerSession } from 'next-auth';
import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import { authOptions } from './app/api/auth/[...nextauth]/route';

// This function can be marked `async` if using `await` inside
const privateRoute = ['/cart', '/checkout', '/profile'];
const adminRoute = ['/dashboard'];
export async function proxy(req) {
    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
        secureCookie: process.env.NODE_ENV === 'production'
    });
    // get user 
    const session = await getServerSession(authOptions)
    const role = session?.user?.role
    const isAdmin = role === 'admin'
    const reqUrl = req.nextUrl.pathname;
    const isPrivate = privateRoute.some(route => reqUrl.startsWith(route));
    const isAdminRoute = adminRoute.some(route => reqUrl.startsWith(route));

    if (!token && isPrivate) {
        return NextResponse.redirect(new URL(`/login?callbackUrl=${reqUrl}`, req.url));
    }
    if (!token && isAdminRoute) {
        return NextResponse.redirect(new URL(`/login?callbackUrl=${reqUrl}`, req.url));
    }
    if (isAdminRoute && !isAdmin) {
        return NextResponse.redirect(new URL(`/forbidden`, req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/cart/:path*', '/checkout/:path*', '/profile/:path*', '/dashboard/:path*'],
}