// Purpose: Define the routes for the authentication service.
import express, { Request, Response } from "express";

// Create a new router
const AuthRoutes = express.Router();

// Define the routes
AuthRoutes.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

AuthRoutes.post("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

AuthRoutes.delete("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// ex
export default AuthRoutes;
