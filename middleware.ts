import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {

    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
        return NextResponse.rewrite(new URL('/admin/login', req.url));
    }
    else if (token.isAdmin) {
        return NextResponse.next();
    }

    return NextResponse.rewrite(new URL('/', req.url));
}

export const config = {
    matcher: ['/admin/dashboard/:path*', '/admin/login'],
    unstable_allowDynamic: [
        '/lib/utilities.js',
        '/node_modules/function-bind/**',
    ],
}