import {
    SET_FILTERED_PLAYERS,
    SET_PLAYERS,
    SET_PLAYERS_ERROR,
    SET_PLAYERS_LOADING
} from "./action";
import { PlayerI } from "../../types/PlayerI";

interface PLayersI {
    players: Array<PlayerI>;
    filteredPlayers: Array<PlayerI>;
    loading: boolean;
    error: string;
}

const initialPlayers: PLayersI = {
    players: [],
    filteredPlayers: [],
    loading: true,
    error: "",
};

export const players = (state = initialPlayers, action: any) => {
    switch (action.type) {

        case SET_PLAYERS:
            return { ...state, players: action.players };

        case SET_FILTERED_PLAYERS:
            return { ...state, filteredPlayers: action.players };

        case SET_PLAYERS_LOADING:
            return { ...state, loading: action.loading };

        case SET_PLAYERS_ERROR:
            return { ...state, error: action.error };

        default:
            return state;
    }
};
