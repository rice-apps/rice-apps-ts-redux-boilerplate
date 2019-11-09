import React from 'react'
import {connect} from 'react-redux';
import BG_COLOR from '../utils/BackgroundColors'
import {setColor} from '../actions/BackgroundActions';
import { AppState } from '../reducers/RootReducer';

type Props = {
    bgColor: BG_COLOR,
    setColor: Function
}

const ColorSelectControl:React.FC<Props> = ({bgColor, setColor}: Props) => (
    <div style={{marginTop: 8}}>
        <button onClick={() => bgColor === BG_COLOR.BLUE_LIGHT ? setColor(BG_COLOR.RED_LIGHT) : setColor(BG_COLOR.BLUE_LIGHT)}>
            Click Me!
        </button>
    </div>
);

export default connect(
    (state: AppState) => ({
        bgColor: state.bgState.color, 
    }),
    (dispatch) => ({
        setColor: (color: BG_COLOR) => dispatch(setColor(color))
    })
)(ColorSelectControl as React.FC);