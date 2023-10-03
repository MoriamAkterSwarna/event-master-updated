import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export const  middleware =async(request) =>{

  const {pathName} = request.nextUrl;
  // return NextResponse.redirect(new URL('/home', request.url))
try{
  let cookie = request.cookies.get('jwt-token')?.value;
  if(!cookie ||  !cookie.startsWith('Bearer '))
  {

    throw new Error('Invalid Token')
  }
    const secret = new TextEncoder().encode(process.env.jwt_secret);
    await jwtVerify(cookie.split("Bearer ")[1], secret)
    return NextResponse.next()
}
catch{
  return NextResponse.redirect(new URL(`/login?redirectUrl=${pathName}`, request.url))
}
};
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/profile/:path*', '/dashboard/:path*'],
};

//it will call from server side