import express from "express";

const app = express();

const port = 5500;

app.use("/", (req, res) => {
  res.send({
    name: "hello world",
  });
});

app.listen(port, () => {
  console.log("server is running on port " + port);
});
