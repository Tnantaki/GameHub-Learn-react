import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY
  }
})

export default apiClient

// export default axios.create({
//   baseURL: import.meta.env.VITE_PRIVATE_URL
// // })