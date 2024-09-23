import express from "express";
import { getSecrets } from "./controllers/secrets-controller.js";
import { authentication } from "./controllers/authentication-controller.js";
import path from "path";

export const app = express();

app.use(express.json());

app.use(authentication);

app.use("/secrets", getSecrets);

app.use((err, req, res, next) => {
  console.log("default err:", err);
  res.status(500).send(err);
});
