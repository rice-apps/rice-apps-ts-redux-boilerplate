import { BackgroundActionTypes } from './BackgroundTypes';
import BG_COLOR from '../utils/BackgroundColors';
import { ACTION_TYPES } from '../utils/BaseTypes';

export const setColor = (color: BG_COLOR): BackgroundActionTypes => {
    return {
        type: ACTION_TYPES.SET_COLOR,
        color
    };
}