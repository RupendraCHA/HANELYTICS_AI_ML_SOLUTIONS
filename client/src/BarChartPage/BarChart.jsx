
import { useState } from 'react'
import './BarChart.css'
import BarChartItem from './../BarChartItem/BarChartItem.jsx'
import { usersData } from "./Data.jsx"



function BarChart({ barChartText, barChartData }) {

    const [userData, setUserData] = useState({
        labels: barChartData.map((data) => data.productName),
        datasets: [{
            label: "Predicted Sales",
            data: barChartData.map((data) => data.PredictedSales),
            backgroundColor: ["blue"],
            // borderColor: "white",
            // borderWidth: 1
        }, {
            label: "Safety Stock",
            data: barChartData.map((data) => data.safetyStock),
            backgroundColor: ["red"]
        }, {
            label: "Reorder Point Quantity",
            data: barChartData.map((data) => data.reorderPointQuantity),
            backgroundColor: ["green"]
        }
        ]
    })

    return (
        <div className='bar-chart-container'>
            <div style={{ width: 550 }}>
                <BarChartItem chartData={userData} barChartText={barChartText} />
            </div>

        </div>
    )
}

export default BarChart
