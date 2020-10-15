import { combineReducers } from "redux";

import { players } from './Players/reducer';
import { details } from './Details/reducer';

export interface State {
    players: ReturnType<typeof players>;
    details: ReturnType<typeof details>;
}

const reducers = combineReducers({
    players,
    details,

});

export default reducers;
