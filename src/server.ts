import express, { Application } from "express";
import cors from "cors";

const server: Application = express();

server.use(cors());
server.get("/", (req, res) => res.json({ log: "lunna server yaya" }));

export default server;

