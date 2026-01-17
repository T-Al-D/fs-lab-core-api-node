import express, { Request, Response } from "express";

export const app = express();

app.get("/", (_req, res) => {
  res.json({
    name: "fs-lab-core-api-node",
    status: "running",
  });
});

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});
