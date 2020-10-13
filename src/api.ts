import { CONFIG } from "./const/config";

export const getPlayers = async () => {
  try {
      const url = `${CONFIG.baseUrl}/championship/1/2018`;
      const res = await fetch(url);

      if(res.status === 200) {
          return await res.json();
      }

      throw "error";
  } catch (e) {
      throw "error";
  }
};

export const getPlayerDetail = async (id: string) => {
    try {
        const url = `${CONFIG.baseUrl}/player/${id}?season=2018`;
        const res = await fetch(url);

        if(res.status === 200) {
            return await res.json();
        }

        throw "error";
    } catch (e) {
        throw "error";
    }
};
