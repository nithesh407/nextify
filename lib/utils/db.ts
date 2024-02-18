import mongoose from "mongoose";
import { DB_URL } from "@/server/config";

export async function ConnectDatabase() {
    if (!DB_URL) {
        throw new Error("No DB Url Found")
    }
    if (mongoose.connection.readyState == 1) {
        return mongoose.connection.asPromise()
    }
    return await mongoose.connect(DB_URL)
}