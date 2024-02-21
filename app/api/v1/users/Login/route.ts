import { UserModel } from "@/server/models"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json()
        if (!email || !password) {
            return NextResponse.json({
                status: "fail",
                message: "email or password is missing."
            }, { status: 404 })
        }
        console.log(email, password)
        const user = await UserModel.findOne({ email, password })

        if (!user) {
            return NextResponse.json({
                status: "fail",
                message: "No User Found, Create an account"
            }, { status: 404 })
        }
        cookies().set('user_id', user._id)
        cookies().set('status', 'authenticated')
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