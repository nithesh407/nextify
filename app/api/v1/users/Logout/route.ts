import { deleteCookie } from "@/lib";
import { redirect } from "next/navigation";
export function GET() {
    deleteCookie()
    redirect('http://localhost:3000/Login');
}