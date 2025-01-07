import ApiCallService from "../ApiCallService/ApiCallService";

const PodCastService = {
  podcastsData: null,

  getPodCasts: async () => {
    try {
      const response = await ApiCallService.generateCall({
        type: "GET",
        path: "/us/rss/toppodcasts/limit=100/genre=1310/json",
      });
      PodCastService.podcastsData = response.data.feed.entry;
      return response.data.feed.entry;
    } catch (error) {
      console.error("PodCastService.getPodCasts:", error);
    }
  },

  getPodCast: async (id: string) => {
    try {
      const response = await ApiCallService.generateCall({
        type: "GET",
        path: `lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`,
      });
      return response.data;
    } catch (error) {
      console.error("PodCastService.getPodCast:", error);
    }
  },

  getPodCastDetailById: async (id: string) => {
    if (!PodCastService.podcastsData) {
      await PodCastService.getPodCasts();
    }
    return PodCastService.podcastsData.find(
      (podcast) => podcast.id.attributes["im:id"] === id
    );
  },
};

export default PodCastService;
