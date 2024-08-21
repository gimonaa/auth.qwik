import { QwikAuth$ } from "@auth/qwik";
import Credentials from "@auth/qwik/providers/credentials";



export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  ({env}) => ({
    secret: env.get("AUTH_SECRET"),
    trustHost: true,
    // session: {
    //   maxAge: 30000,
    //   strategy: "jwt" ,   
    // },
    // pages: {
    //   signIn: '/login',
    //   signOut: '/login',
    //   error: '/login',
    // },
    providers: [
      Credentials({
        name: 'Login',
        credentials: {
          email: { label: 'Email', type: 'text' },
          password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials) : Promise<any> {
          const user = {
            id: 1,
            name: "Mike",
            email: "mike@example.com",
            role: "USER"
          };       

          console.log("user:",user.email)

          if (credentials.email === user.email) {
            console.log(credentials.email)
          }

          return user

        },    
      }) , 
    ],
    callbacks: {
        jwt({ token, user  }   )  {
          console.log("jwt token",token)
          console.log("jwt user",user)
          // if (user.role) {  
            token.role  = user.role!  ;
            token.id = user.id! ;
          // }
          return token;
        },
        session({ session, token, user } ) {
          console.log("session session: ",session)
          console.log("session token: ",token)
          console.log("session user: ",user)
          // if (token.role ) {
          //   session.user.role = token.role   
          //   session.user.id = token.id      
          // }
          return session;
        },
      }
  
  }),
);
