// importing required modules
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { ConnectToDatabase } from "./database/connection.js";
import MainRoute from "./routes/Main.routes.js";
import HeathRoute from "./routes/health.routes.js";
import bodyParser from "body-parser";

// Defining config function to load environment variables
dotenv.config();

// Defining cors options for the server
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  METHODS: "GET, POST, PUT, DELETE",
};

// Defining main function to start the server
async function main(PORT: number) {
  const app = express();

  // defining the required middlewares
  app.use(cors(corsOptions));
  app.use(bodyParser.json());

  // defining the routes
  app.use("/", MainRoute);
  app.use("/health", HeathRoute);

  // connecting to the database and starting the server
  await ConnectToDatabase()
    .then(() => {
      app.listen(PORT, () => {
        console.log("Server Started 🚀");
        console.log(`local:   http://localhost:${PORT}`);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

// calling main function to start the server
main(Number(process.env.PORT)).catch((err) => {
  console.error(err);
  process.exit(1);
});
