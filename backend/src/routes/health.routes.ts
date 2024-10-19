import express from "express";

const HeathRoute = express.Router();

HeathRoute.get("/", (req, res) => {
  res
    .send({
      status: "ok",
      message: "Status is heathy 🦾",
    })
    .status(200);
});

export default HeathRoute;
