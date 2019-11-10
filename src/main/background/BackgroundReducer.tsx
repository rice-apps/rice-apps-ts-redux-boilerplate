import { BackgroundActionTypes } from "./BackgroundTypes";
import BG_COLOR from "../utils/BackgroundColors";
import { ACTION_TYPES } from "../utils/BaseTypes";

export interface BackgroundState {
    color: BG_COLOR
}

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