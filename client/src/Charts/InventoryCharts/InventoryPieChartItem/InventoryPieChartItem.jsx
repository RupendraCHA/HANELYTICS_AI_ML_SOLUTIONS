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
                labels: {
                    font:{size:12, weight:500, family:"Roboto"},
                    color: "white",
                }
            },
            title: {
                position: "top",
                display: true,
                text: `${chartText}`,
                color: "white",
                font:{size:18, family:"Roboto", weight:700},
            }
        }
    }

    return (

        <div className="row">
            <div className="col-12">
                <Pie width={500} height={300} options={options} data={chartData}>
                    Pie Chart
                </Pie>
            </div>
        </div>
    )
}

export default InventoryPieChartItem