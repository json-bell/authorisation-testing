import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/",
});

const username = "admin";
const password = "password";
const basicAuth = "Basic " + btoa(username + ":" + password);

const fetchSecrets = () => {
  return apiClient
    .get("secrets", {
      headers: { Authorization: basicAuth },
    })
    .then(({ data }) => data);
};

fetchSecrets().then(console.log);
