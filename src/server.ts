import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.get("/", (req, res) => res.json({ log: "lunna server yaya" }));

export default app;

