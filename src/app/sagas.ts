import { all } from 'redux-saga/effects';

import { playersWatcher } from "./Players/saga";
import { detailsPlayerWatcher } from "./Details/saga";

export default function* sagas() {
    yield all([
        playersWatcher(),
        detailsPlayerWatcher()
    ]);
}
