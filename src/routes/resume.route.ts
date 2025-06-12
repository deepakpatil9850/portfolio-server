import express from 'express'
import multer from 'multer'

import { uploadfileController, downloadResumeController, viewResumeController } from '../controllers/resume.controller.js'

const resumeRouter = express.Router();

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

resumeRouter.post('/upload-resume', upload.single('resume'), uploadfileController)
resumeRouter.get('/download', downloadResumeController)
resumeRouter.get('/', viewResumeController)


export default resumeRouter;