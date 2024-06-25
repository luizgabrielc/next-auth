import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [Credentials({
    authorize(){
        return {id:'1',name:'Gabriel',email:"gabriel@teste.com"}
    }
  })],
});