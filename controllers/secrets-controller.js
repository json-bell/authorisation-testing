import { selectSecrets } from "../models/secrets-models.js";

export const getSecrets = (req, res, next) => {
  selectSecrets().then(({ secrets }) => res.status(200).send({ secrets }));
};
