// HTTP Framework
import express from "express";
// cors = cross-origin-sharing -> safety in the browser
import cors from "cors";
import { ApiResponse } from "./types/apiResponse";

export const app = express();

// middleware parser for request body
app.use(express.json());
// created automatic header
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") ?? "*",
  }),
);

// helper function
function ok<T>(data: T): ApiResponse<T> {
  return {
    success: true,
    data,
    error: null,
    meta: {
      service: process.env.SERVICE_NAME ?? "node-api",
      version: process.env.SERVICE_VERSION ?? "0.1.0",
      timestamp: new Date().toISOString(),
    },
  };
}

function fail(code: string, message: string): ApiResponse<null> {
  return {
    success: false,
    data: null,
    error: { code, message },
    meta: {
      service: process.env.SERVICE_NAME ?? "node-api",
      version: process.env.SERVICE_VERSION ?? "0.1.0",
      timestamp: new Date().toISOString(),
    },
  };
}

/*
ROUTES with String parameters, response in JSON
*/
app.get("/meta", (_req, res) => {
  res.json(ok({ runtime: "node" }));
});

app.get("/health", (_req, res) => {
  res.json(ok({ status: "ok" }));
});

app.get("/error-demo", (_req, res) => {
  res.status(400).json(fail("BAD_REQUEST", "Demo error"));
});

app.post("/process", (req, res) => {
  res.json(ok({ input: req.body }));
});
