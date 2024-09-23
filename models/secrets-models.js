import secrets from "../data/secrets.js";

export const selectSecrets = () => {
  return Promise.resolve(secrets);
};
