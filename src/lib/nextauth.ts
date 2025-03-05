import { AuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

export const authOptions: AuthOptions = {
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        
    }
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),


}
