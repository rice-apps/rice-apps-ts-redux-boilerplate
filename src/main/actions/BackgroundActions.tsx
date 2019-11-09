import { ACTION_TYPES } from './ActionTypes';

export const setColor = (color: String) => {
    return {
        type: ACTION_TYPES.SET_COLOR,
        color
    };
}