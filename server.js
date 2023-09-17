import express from "express";
import cors from "cors";
import * as DB from "./db.js";

const app = express();

DB.letsCheck();
app.use(cors());
app.get("/data-analyst", async (req, res) => {
  const cities = await DB.sql`SELECT * FROM cities`;
  res.send(cities);
});

app.listen(3000, () => {
  console.log("maybe the app's running on port 3000.");
});
