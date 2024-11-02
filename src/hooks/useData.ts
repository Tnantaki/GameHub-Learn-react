import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface ResponseData<T> {
  count: number
  results: T[]
}

const useData = <T>(endpoint: string, reqConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([])
  const [error, setErrro] = useState("")
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setLoading(true)
    apiClient
      .get<ResponseData<T>>(endpoint, { signal: controller.signal, ...reqConfig })
      .then((res) => {
        setData(res.data.results);
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrro(err.message);
        setLoading(false)
      });

    return () => controller.abort()
  }, deps ? deps : []);

  return {data, error, isLoading}
}

export default useData