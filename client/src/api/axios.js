import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-interview-copilot-backend-ko37.onrender.com",
});

export default API;