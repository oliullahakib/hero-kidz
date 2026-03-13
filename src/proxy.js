import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
const privateRoute = ['/cart','/checkout','/profile']
export async function proxy(req) {
    const token = await getToken({req})
    const reqUrl = req.nextUrl.pathname
    const isPrivate = privateRoute.some(route=>route.startsWith(reqUrl))
    if(!token && isPrivate){
        return NextResponse.redirect(new URL(`/login?callbackUrl=${reqUrl}`, req.url))
    }
//   return NextResponse.redirect(new URL('/', request.url))
return NextResponse.next()
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: ['/cart/:path*','/checkout/:path*','/profile/:path*'],
}