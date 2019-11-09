import { ACTION_TYPES, BackgroundActionTypes } from './ActionTypes';
import BG_COLOR from '../utils/BackgroundColors';

export const setColor = (color: BG_COLOR): BackgroundActionTypes => {
    return {
        type: ACTION_TYPES.SET_COLOR,
        color
    };
}