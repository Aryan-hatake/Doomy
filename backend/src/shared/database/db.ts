import mongoose from "mongoose";

export async function connectDB(mongoUri: string) {
    try {
        await mongoose.connect(mongoUri);
        console.log("Database connected !");
    } catch (error) {
        if (error instanceof Error) {
            throw Error("Database connection failed ! " + error!.message)
        }else{
            throw Error("Database connection failed !" + error)
        }
    }
}

export default connectDB