import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { GITHUB_CLIENT_ID, GITHUB_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "@/server/config";
import { ConnectDatabase, setCookie } from "..";
import { COOKIE_EXPIRE_TIME } from "@/server/config";
import { UserModel } from "@/server/models";
import { message } from "antd";

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
                    const userExists = await UserModel.findOne({ email })
                    if (userExists) {
                        setCookie('authenticated', userExists._id, COOKIE_EXPIRE_TIME)
                        return true
                    }
                    if (!userExists) {
                        try {
                            const user = await UserModel.create({ userName: name, email })
                            console.log(user)
                            setCookie('authenticated', userExists._id, COOKIE_EXPIRE_TIME)
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