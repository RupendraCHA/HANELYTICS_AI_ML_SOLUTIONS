import React from 'react'

import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js/auto"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const InventoryBarChartItem = ({ chartData, barChartText }) => {

    const options = {
        responsive: true,
        scales: {
                    x: {
                    ticks: {
                        color: 'black' // Change x-axis label color
                    },
                    grid: {
                        color: 'lightgreen' // Change x-axis grid line color
                    }
                    },
                    y: {
                    ticks: {
                        color: 'black' // Change y-axis label color
                    },
                    grid: {
                        color: 'lightgreen' // Change y-axis grid line color
                    }
                    },
                },
        plugins: {
            legend: {
                position: "bottom",
                labels:{
                    color: "white",
                    font: {size: 12, weight: 500}
                }
            },
            title: {
                display: true,
                text: `${barChartText}`,
                color: "white",
                font: {size: 16}
            }
        }
    }

    return (
        <div className="row">
            <div className="col-12">
                <Bar width={600} height={400} options={options} data={chartData}>
                    Bar Chart
                </Bar>
            </div>
        </div>
    )
}

export default InventoryBarChartItem
