// src/ApiCallService.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://itunes.apple.com/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const generateCall = async ({ type, path, data = null }) => {
  try {
    switch (type.toLowerCase()) {
      case "get":
        return await api.get(path);
      case "post":
        return await api.post(path, data);
      case "put":
        return await api.put(path, data);
      case "delete":
        return await api.delete(path);
      default:
        throw new Error(`Unsupported request type: ${type}`);
    }
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};

// Exportar el servicio
const ApiCallService = {
  generateCall,
};

export default ApiCallService;
