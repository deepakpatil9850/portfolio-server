import express from 'express'
import multer from 'multer'
import { uploadfileController, downloadResumeController, viewResumeController } from '../controllers/resume.controller';
import { asyncHandler } from '../utils/asyncHandler';



const resumeRouter = express.Router();

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

resumeRouter.post('/upload-resume', upload.single('file'), asyncHandler(uploadfileController))
resumeRouter.get('/download', downloadResumeController)
resumeRouter.get('/', viewResumeController)


export default resumeRouter;