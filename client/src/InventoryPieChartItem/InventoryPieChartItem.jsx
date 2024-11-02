import React from 'react'

import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, Tooltip, Legend, ArcElement, Colors } from "chart.js/auto"

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)

const InventoryPieChartItem = ({ chartData, chartText }) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: `${chartText}`,
                color: "blue"
            }
        }
    }

    return (
        <Pie options={options} data={chartData}>
            Pie Chart
        </Pie>
    )
}

export default InventoryPieChartItem
