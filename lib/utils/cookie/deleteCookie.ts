'use server'
import { cookies } from "next/headers";

export const deleteCookie = () => {
    cookies().delete('status');
    cookies().delete('user_id');
}