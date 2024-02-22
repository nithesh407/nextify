import { cookies } from "next/headers";

export const getUserId = () => {
    return cookies().get('user_id')
}