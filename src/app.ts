// HTTP Framework
import express from "express";
// cors = cross-origin-sharing -> safety in the browser
import cors from "cors";

export const app = express();

// created automatic header
app.use(
  cors({
    origin: "https://fs-lab-core-react.onrender.com",
  }),
);

// routes with String parameters, response in JSON
app.get("/", (_req, res) => {
  res.json({
    name: "fs-lab-core-api-node",
    status: "running",
  });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});
