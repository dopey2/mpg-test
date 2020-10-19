import { CONFIG } from "../const/config";

export const getPlayers = async () => {
    const url = `${CONFIG.baseUrl}/championship/1/2018`;
    const res = await fetch(url);

    if(res.status === 200) {
      return await res.json();
    }

    throw "error";
};

export const getPlayerDetail = async (id: string) => {
    const url = `${CONFIG.baseUrl}/player/${id}?season=2018`;
    const res = await fetch(url);

    if(res.status === 200) {
        return await res.json();
    }

    throw "error";
};
