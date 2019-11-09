import React from 'react'
import {connect} from 'react-redux';
import BG_COLOR from '../utils/BackgroundColors'
import {setColor} from '../actions/BackgroundActions';
import { State } from '../types/ReducerTypes';

type Props = {
    bgColor: BG_COLOR,
    setColor: Function
}

const ColorSelectControl:React.FC<Props> = ({bgColor, setColor}: Props) => (
    <div style={{marginTop: 8}}>
        <button onClick={() => bgColor == BG_COLOR.BLUE_LIGHT ? setColor(BG_COLOR.RED_LIGHT) : setColor(BG_COLOR.BLUE_LIGHT)}>
            Click Me!
        </button>
    </div>
);

export default connect(
    (state: State) => ({
        bgColor: state.BackgroundReducer.color, 
    }),
    (dispatch) => ({
        setColor: (color: BG_COLOR) => dispatch(setColor(color))
    })
)(ColorSelectControl as React.FC);