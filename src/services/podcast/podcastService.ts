// src/ApiCallService.js
import ApiCallService from "../ApiCallService/ApiCallService";

const PodCastService = {
  getPodCasts: async () => {
    try {
      const response = await ApiCallService.generateCall({
        type: "GET",
        path: "/us/rss/toppodcasts/limit=100/genre=1310/json",
      });
      return response.data;
    } catch (error) {
      console.error("PodCastService.getPodCasts:", error);
    }
  },
};

export default PodCastService;
