import axios from "axios";

if (process.env.NODE_ENV == "development") {
  axios.defaults.baseURL = "http://localhost:3000";
}

export default axios;
