import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            enum: ["ADMIN", "USER", "GUEST"],
            default: "ADMIN",
            require: true
        },
        fileKey: { type: String, required: true },
    },
    { timestamps: true }
);

const ResumeModel = mongoose.model("resume", resumeSchema);
export default ResumeModel;
