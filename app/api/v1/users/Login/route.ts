import { UserModel } from "@/server/models"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const { email, password } = await req.json()
    if (!email || !password) {
        return NextResponse.json({
            status: "fail",
            message: "email or password is missing."
        })
    }
    console.log(email, password)
    const user = await UserModel.findOne({ 'email': email, 'password': password })

    if (!user) {
        return NextResponse.json({
            status: "fail",
            message: "No User Found, Create an account"
        })
    }

    // Set the HTTP-only cookie with the user's ID
    cookies().set('user_id', user._id)

    return NextResponse.json({
        status: "success",
        message: "User found and logged in successfully."
    })

}