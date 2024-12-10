import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api/";
// if (process.env.NODE_ENV == "development") {
// }

export default axios;

