import mongoose from "mongoose";


const dbUri = process.env.MONGODB_URI;

if (!dbUri) {
    throw new Error("Provide DB_URL in .env file");
}

export default async () => {
    try {
        await mongoose.connect(dbUri);
        console.log("connected DB successfully..");
    } catch (error) {
        console.log("mongoDB connect Error: " + error);
        process.exit(1);
    }
};
