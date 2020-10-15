import { PlayerStatI } from "../../types/PlayerStat";

export const SET_PLAYER_DETAILS = "SET_PLAYER_DETAILS";
export const SET_PLAYER_DETAILS_ID = "SET_PLAYER_DETAILS_ID";
export const SET_PLAYER_DETAILS_LOADING = "SET_PLAYER_DETAILS_LOADING";
export const SET_PLAYER_DETAILS_ERROR = "SET_PLAYER_DETAILS_ERROR";

export const ASYNC_GET_PLAYER_DETAILS = "ASYNC_GET_PLAYER_DETAILS";

export const setPlayerDetails = (player: PlayerStatI) => {
  return {
      type: SET_PLAYER_DETAILS,
      player,
  };
};

export const setPlayerDetailsId = (id: string) => {
    return {
        type: SET_PLAYER_DETAILS_ID,
        id,
    };
};

export const setPlayerDetailsLoading = (loading: boolean) => {
    return {
        type: SET_PLAYER_DETAILS_LOADING,
        loading,
    };
};

export const setPlayerDetailsError = (error: string) => {
    return {
        type: SET_PLAYER_DETAILS_ERROR,
        error,
    };
};


export const async_getPlayerDetails = (id: string) => {
    return {
        type: ASYNC_GET_PLAYER_DETAILS,
        id,
    };
};
