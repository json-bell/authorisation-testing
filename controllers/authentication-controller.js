import { selectSecrets } from "../models/secrets-models.js";

export const authentication = (req, res, next) => {
  const authheader = req.headers.authorization;
  console.log("Authheader:", authheader);

  if (!authheader) {
    // res.setHeader("WWW-Authenticate", "Basic");
    const err = { msg: "No user provided", code: 401 };
    return next(err);
  }

  // their code //
  const auth = new Buffer.from(authheader.split(" ")[1], "base64")
    .toString()
    .split(":");
  const user = auth[0];
  const pass = auth[1];
  //            //

  if (user == "admin" && pass == "password") {
    selectSecrets().then(({ secrets }) => res.status(200).send({ secrets }));
  } else {
    const err = { msg: "Wrong password/user", code: 401 };
    return next(err);
  }
};
