// HTTP Framework
import express, { Request, Response } from "express";

export const app = express();

// routes with String parameters, response in JSON
app.get("/", (_req, res) => {
  res.json({
    name: "fs-lab-core-api-node",
    status: "running",
  });
});

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});
