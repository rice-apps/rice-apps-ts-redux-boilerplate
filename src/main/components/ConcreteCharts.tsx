import React from 'react'
import {connect} from 'react-redux';
import Charts from './Charts';
import { AppState } from '../reducers/RootReducer';
import { Chart } from '../utils/types';
import chart from "../assets/chart.png";

type Props = {
    chartList: Chart[],
    bgColor: string,
}

const ConcreteCharts: React.FC<Props> = ({chartList, bgColor}: Props) => (
    <Charts 
        chartList={chartList}
        bgColor={bgColor}
        image={<img src={chart} className="Chart-img" alt="chart" />}
    />
);

export default connect(
    (state: AppState) => ({
        chartList: state.chartState.chartList,
        bgColor: state.bgState.color, 
    }),
    (dispatch) => {
        return {}
    }
)(ConcreteCharts);

