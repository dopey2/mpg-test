import { call, put, takeEvery } from "redux-saga/effects";
import {
    ASYNC_GET_PLAYER_DETAILS,
    async_getPlayerDetails,
    setPlayerDetails,
    setPlayerDetailsError,
    setPlayerDetailsLoading
} from "./action";
import { STRINGS } from "../../i18n/strings";
import { getPlayerDetail } from "../../utils/api";

export function* saga_getPlayerDetails(action: ReturnType<typeof async_getPlayerDetails>) {
    try {
        const{ id } = action;
        yield put(setPlayerDetailsLoading(true));
        const player = yield call(getPlayerDetail, id.replace("player_", ""));
        yield put(setPlayerDetails(player));
        yield put(setPlayerDetailsError(""));
    }
    catch(err) {
        yield put(setPlayerDetailsError(STRINGS.error));
    }
    finally {
        yield put(setPlayerDetailsLoading(false));
    }
}

export function* detailsPlayerWatcher() {
    yield takeEvery(ASYNC_GET_PLAYER_DETAILS, saga_getPlayerDetails);
}
