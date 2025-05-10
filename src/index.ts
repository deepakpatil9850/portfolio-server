import express from "express";

const app = express();

const port = process.env.PORT ?? 5500;

app.use("/", (req , res) => {
  res.send({
    name: "hello world",
  });
});

app.listen(port, () => {
  console.log("server is running on port " + port);
});
