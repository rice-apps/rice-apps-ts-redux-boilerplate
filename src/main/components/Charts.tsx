import React from 'react'
import { Chart } from '../utils/types';
import chart from "../assets/log.svg";

type Props = {
    chartList: Chart[],
    bgColor: string,
    image: HTMLElement,
}

const Charts: React.FC<Props> = ({chartList, bgColor}: Props) => (
    <div style={{backgroundColor: bgColor}}>
        <h1>{"CHARTS"}</h1>
        <ul>
            {chartList.map(chart => (
                <li 
                key={chart.ID}
                onClick={() => console.log("clicked chart " + chart.ID)}
                >
                {chart.image}
                </li>
            ))}
        </ul>
    </div>
)

export default Charts;