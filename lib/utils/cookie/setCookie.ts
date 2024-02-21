'use server'
import { cookies } from "next/headers";

export const setCookie = (status: string, id: string, age: number): void => {
    cookies().set('status', status, { maxAge: age })
    cookies().set('user_id', id, { maxAge: age })
}