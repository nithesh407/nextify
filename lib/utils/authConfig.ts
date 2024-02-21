import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { GITHUB_CLIENT_ID, GITHUB_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "@/server/config";
import { ConnectDatabase } from "..";
import { cookies } from "next/headers";
import { UserModel } from "@/server/models";
import { message } from "antd";
import { redirect } from "next/navigation";

export const authConfig: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn(params) {
            const { user, account } = params;
            if (account?.provider === "google") {
                const { name, email } = user;
                try {
                    await ConnectDatabase()
                    console.log(name, email);
                    const userExists = await UserModel.findOne({ email })
                    if (userExists) {
                        cookies().set('status', 'authenticated')
                        cookies().set('user_id', userExists._id)
                        return true
                    }
                    if (!userExists) {
                        // const response = await fetch('http://localhost:3000/app/api/v1/users/SignUp', {
                        //     method: 'POST',
                        //     body: JSON.stringify(data)
                        // })
                        // const res = await response.json()
                        // if (res.status === 'success') {
                        //     message.success(res.message)
                        //     cookies().set('status', 'authenticated')
                        //     cookies().set('user_id', res.data?._id)
                        //     return true
                        // }
                        // if (res.status === 'fail') {
                        //     message.error(res.message)
                        //     return false
                        // }
                        try {
                            const user = await UserModel.create({ userName: name, email })
                            console.log(user)
                            cookies().set('status', 'authenticated')
                            cookies().set('user_id', userExists._id)
                            message.success('User Authenticated')
                        } catch (err) {
                            console.log(user)
                            message.error(`${err}`)
                        }
                    }

                } catch (error) {
                    console.log(error);
                    return false;
                }
            }
            return true;
        }

    }
}