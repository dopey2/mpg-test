import { PlayerI } from "../../types/PlayerI";

export const SET_PLAYERS = "SET_PLAYERS";
export const SET_FILTERED_PLAYERS = "SET_FILTERED_PLAYERS";
export const SET_PLAYERS_LOADING = "SET_PLAYERS_LOADING";
export const SET_PLAYERS_ERROR = "SET_PLAYERS_ERROR";

export const ASYNC_GET_PLAYERS = "ASYNC_GET_PLAYERS";
export const ASYNC_FILTER_PLAYER = "ASYNC_FILTER_PLAYER";

export const setPlayers = (players: Array<PlayerI>) => {
    return {
        type: SET_PLAYERS,
        players,
    };
};

export const setFilteredPlayers = (players: Array<PlayerI>) => {
    return {
        type: SET_FILTERED_PLAYERS,
        players,
    };
};

export const setPlayersLoading = (loading: boolean) => {
    return {
        type: SET_PLAYERS_LOADING,
        loading,
    };
};

export const setPlayersError = (error: string) => {
    return {
        type: SET_PLAYERS_ERROR,
        error,
    };
};

export const async_getPlayers = () => {
    return {
        type: ASYNC_GET_PLAYERS,
    };
};

export const async_filterPlayer = (search: string, selectedPosition: string) => {
    return {
        type: ASYNC_FILTER_PLAYER,
        search,
        selectedPosition,
    };
};
