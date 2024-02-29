import { setCookie } from "@/lib"
import { UserModel } from "@/server/models"
import { NextRequest, NextResponse } from "next/server"
import { COOKIE_EXPIRE_TIME } from "@/server/config"
import { ConnectDatabase } from "@/lib"

export async function POST(req: NextRequest) {
    try {
        await ConnectDatabase()
        const { email, password } = await req.json()
        if (!email || !password) {
            return NextResponse.json({
                status: "fail",
                message: "email or password is missing."
            }, { status: 404 })
        }
        const user = await UserModel.findOne({ email, password })

        if (!user) {
            return NextResponse.json({
                status: "fail",
                message: "No User Found, Create an account"
            }, { status: 404 })
        }
        setCookie('authenticated', user._id, COOKIE_EXPIRE_TIME)
        return NextResponse.json({
            status: "success",
            message: "User found and logged in successfully."
        }, { status: 200 })
    } catch (err) {
        return NextResponse.json({
            status: "fail",
            message: err
        }, { status: 500 })
    }
}