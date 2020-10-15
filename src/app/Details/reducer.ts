import {
    SET_PLAYER_DETAILS,
    SET_PLAYER_DETAILS_ERROR,
    SET_PLAYER_DETAILS_ID,
    SET_PLAYER_DETAILS_LOADING
} from "./action";

import { PlayerStatI } from "../../types/PlayerStat";

interface DetailsI {
    id: string;
    player: PlayerStatI | null;
    loading: boolean;
    error: string;
}

const initialDetail: DetailsI = {
    id: "",
    player: null,
    loading: true,
    error: "",
};

export const details = (state = initialDetail, action: any) => {
    switch (action.type) {

        case SET_PLAYER_DETAILS_ID:
            return { ...state, id: action.id };

        case SET_PLAYER_DETAILS:
            return { ...state, player: action.player };

        case SET_PLAYER_DETAILS_LOADING:
            return { ...state, loading: action.loading };

        case SET_PLAYER_DETAILS_ERROR:
            return { ...state, error: action.error };

        default:
            return state;
    }
};
