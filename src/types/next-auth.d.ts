import {type DefaultSession}  from "next-auth";
declare module "@auth/core/jwt" {
  interface JWT {
    role: string;
    id: string;
  }
}
declare module "@auth/core/types" {
  interface User {
    role: string; 
    id: string;
  } 
  interface Session  {
      user?: {
          role: string;
          id: string; 
      } & DefaultSession
  }
}

declare module "@auth/qwik/node_modules/@auth/core/@auth/core/jwt" {
  interface JWT {
    role: string;
    id: string;
  }
}
declare module "@auth/qwik/node_modules/@auth/core/types" {
  interface User {
    role: string; 
    id: string;
  } 
  interface Session  {
    user?: {
        role: string;
        id: string; 
    } & DefaultSession
  }

}
