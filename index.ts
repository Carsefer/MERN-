import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// config .Env
dotenv.config();

// Create Express APP
const app: Express = express();
const port: string | number = process.env.PORT || 3001;

// Express Route
app.get("/", (req: Request, res: Response) => {
  // Send Hello World
  res.send("API RESTFUL: Express + TS + Nodemon + Jest + Swagger + Mongoose");
});

// Execute APP and Listen Request
app.listen(port, () => {
  console.log(`Listening port ${port}`);
});
