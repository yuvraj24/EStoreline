import http from "http";
import cors from "cors";
import express from "express";
import db from "./db/index.js";
import productRouter from "./router/productRouter.js";
import filterRouter from "./router/filterRouter.js";

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use("/api/product", productRouter);
app.use("/api/filter", filterRouter);

app.get("/ping", (req, res) => {
  let query = "Select * from Product";
  db.query(query, (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

db.on("error", (error) => {
  console.log("MySQL Connection Error : " + JSON.stringify(error));
});

const server = http.createServer(app);
server.listen(port, () => {
  console.log("Server is listening on " + port);
});
