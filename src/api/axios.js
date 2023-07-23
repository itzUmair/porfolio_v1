import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8080/api/v1/",
  baseURL: "https://muk-portfolio-backend.vercel.app/api/v1/",
});
