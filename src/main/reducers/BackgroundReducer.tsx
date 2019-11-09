import {ACTION_TYPES, BackgroundActionTypes } from "../types/ActionTypes";
import { State } from "../types/ReducerTypes";
import { defaultState } from "./index"

const BackgroundReducer = (state: State = defaultState, action: BackgroundActionTypes): State => {
    let newBGState;
    switch(action.type) {
        case ACTION_TYPES.SET_COLOR:
            newBGState = {color: action.color}
            return {...state, bgState: newBGState};
        default:
            return {...state};
    }
}

export default BackgroundReducer;