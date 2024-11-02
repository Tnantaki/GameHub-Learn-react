import axios, { AxiosRequestConfig } from "axios";

interface ResponseData<T> {
  count: number
  results: T[]
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY
  }
})

class APIClient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<ResponseData<T>>(this.endPoint, config)
      .then((res) => res.data);
  };
}

export default APIClient

// export default axios.create({
//   baseURL: import.meta.env.VITE_PRIVATE_URL
// // })