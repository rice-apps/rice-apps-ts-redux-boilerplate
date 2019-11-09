import {ACTION_TYPES, BackgroundActionTypes } from "../types/ActionTypes";
import { BackgroundState } from "../types/ReducerTypes";
import BG_COLOR from "../utils/BackgroundColors";

const defaultState = {
    color: BG_COLOR.BLUE_LIGHT
};

const BackgroundReducer = (state: BackgroundState = defaultState, action: BackgroundActionTypes): BackgroundState => {
    switch(action.type) {
        case ACTION_TYPES.SET_COLOR:
            return {...state, color: action.color}
        default:
            return {...state};
    }
}

export default BackgroundReducer;