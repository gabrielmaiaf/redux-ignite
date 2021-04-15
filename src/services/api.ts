import axios from "axios";

const api = axios.create({
  baseURL: "http://locallhost:3334",
});

export default api;
