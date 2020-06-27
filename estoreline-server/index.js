import http from "http";
import cors from "cors";
import express from "express";

const port = process.env.PORT || 3000;

const app = express(); 
app.use(cors()); 
app.get("/ping", (req, res) => {
  res.send("pong");
});

const server = http.createServer(app);
server.listen(port, () => {
  console.log("Server is listening on " + port);
});
