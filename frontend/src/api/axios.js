import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token)
    req.headers.Authorization = `Bearer ${token}`;
  return req;
});

API.interceptors.response.use(
  res => res,
  async err => {
    if (err.response?.status === 401){
      const res = await API.post("/auth/refresh");
      localStorage.setItem("token", res.data.accessToken);
      err.config.headers.Authorization = `Bearer ${res.data.accessToken}`;
      return API(err.config)
    }
    return Promise.reject(err);
  }
);

export default API;