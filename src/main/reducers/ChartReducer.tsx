import { ACTION_TYPES_CHART, ChartActionTypes, AddChartInterface } from "../types/ActionTypes";
import { ChartState } from "../types/ReducerTypes";
import { Chart } from "../types/BaseTypes";

const defaultState = {
    chartList: [
        {
            ID: 123,
            description: "Hello",
        }
    ]
};

const ChartReducer = (state: ChartState = defaultState, action: ChartActionTypes): ChartState => {
    let newCharts: Chart[] = [...state.chartList];
    switch(action.type) {
        case ACTION_TYPES_CHART.ADD_CHARTS:
            let newChart = (action as AddChartInterface).chart
            while (newCharts.map(t=>t.ID).includes(newChart.ID))
                newChart.ID = newChart.ID + 100;
            newCharts.push(newChart)
            break;
        default:
            return {...state};
    }
    return {...state, chartList: newCharts};
}

export default ChartReducer;