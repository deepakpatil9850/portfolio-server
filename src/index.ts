import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT ?? 5500;
import resumeRouter from "./routes/resume.route.js";

app.use(cors())
app.use(express.json())
app.use("/resume", resumeRouter)

app.get('/', (req, res) => {
  res.send({
    message: "server is listening "
  })
})

app.listen(port, () => {
  console.log("server is running on port " + port);

})

// connectDB().then(() =>
//   app.listen(port, () => {
//     console.log("server is running on port " + port);
//   })
// )

