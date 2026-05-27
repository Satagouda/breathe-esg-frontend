// import axios from "axios";

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
// });

// api.interceptors.request.use((config) => {

//   const token = localStorage.getItem("access");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// export default api;

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// ==========================================
// REQUEST LOGGER
// ==========================================

api.interceptors.request.use(

  (config) => {

    console.log("API REQUEST:");

    console.log("URL:", config.baseURL + config.url);

    console.log("METHOD:", config.method);

    console.log("DATA:", config.data);

    return config;
  },

  (error) => {

    console.error("REQUEST ERROR:", error);

    return Promise.reject(error);
  }
);

// ==========================================
// RESPONSE LOGGER
// ==========================================

api.interceptors.response.use(

  (response) => {

    console.log("API RESPONSE:");

    console.log("URL:", response.config.url);

    console.log("STATUS:", response.status);

    console.log("DATA:", response.data);

    return response;
  },

  (error) => {

    console.error("API ERROR:");

    console.error("STATUS:", error.response?.status);

    console.error("DATA:", error.response?.data);

    console.error(error);

    return Promise.reject(error);
  }
);

export default api;