import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { Request, RequestHandler, Response } from "express"
import path from "path"

const s3 = new S3Client({
    region: process.env.AWS_REGION as string,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
})

// upload pfd controller
const uploadfileController = async (req: Request, res: Response) => {
    const file = req.file

    if (!file || path.extname(file.originalname) !== '.pdf') {
        return res.status(400).json({ message: "please upload pdf file" })
    }

    try {
        const uploadCommand = new PutObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: 'resume.pdf',
            Body: file.buffer,
            ContentType: file.mimetype,
        })
        await s3.send(uploadCommand)

        const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/resume.pdf`

        res.send({
            message: "file uploaded successfully",
            fileUrl
        })
    } catch (error) {

        console.error(error)
        res.status(500).json({
            name: "something went wrong",

        });
    }

}

const downloadResumeController = async (req: Request, res: Response) => {
    try {
        const command = new GetObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME!,
            Key: "resume.pdf",
            ResponseContentDisposition: "attachment; filename=Deepak_Patil_Resume.pdf",
        });

        const url = await getSignedUrl(s3, command);
        res.json({ url });
    } catch (err) {
        console.error("Failed to generate pre-signed URL", err);
        res.status(500).json({ error: "Unable to generate resume link" });
    }
}

const viewResumeController = (req: Request, res: Response) => {
    const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/resume.pdf`
    res.json({
        url: fileUrl
    })
}

export { uploadfileController, downloadResumeController, viewResumeController }