import { call, takeEvery, put, select } from "redux-saga/effects";
import {
    ASYNC_FILTER_PLAYER, async_filterPlayer,
    ASYNC_GET_PLAYERS,
    setFilteredPlayers,
    setPlayers,
    setPlayersError,
    setPlayersLoading
} from "./action";
import { getPlayers } from "../../utils/api";
import { STRINGS } from "../../i18n/strings";
import { State } from "../reducers";
import { PlayerI } from "../../types/PlayerI";

export const players_selector = (s: State) => s.players.players;

function* saga_getPlayers() {
    try {
        yield put(setPlayersLoading(true));
        const data = yield call(getPlayers);
        yield put(setPlayers(data));
        yield put(setFilteredPlayers(data));
        yield put(setPlayersError(""));
    } catch (err) {
        yield put(setPlayersError(STRINGS.error));
    } finally {
        yield put(setPlayersLoading(false));
    }
}

export function* saga_filterPlayers(action: ReturnType<typeof async_filterPlayer>) {
    const players: Array<PlayerI> = yield select(players_selector);
    const { search, selectedPosition } = action;

    const byPosition = players.filter((player) => {
        return !selectedPosition || player.ultraPosition.toString() === selectedPosition.toString();
    });

    const byNameAndPosition = byPosition.filter((player) => {
        return `${player.firstname} ${player.lastname}`.toLowerCase().includes(search.toLowerCase());
    });

    yield put(setFilteredPlayers(byNameAndPosition));
}

export function* playersWatcher() {
    yield takeEvery(ASYNC_GET_PLAYERS, saga_getPlayers);
    yield takeEvery(ASYNC_FILTER_PLAYER, saga_filterPlayers);
}
