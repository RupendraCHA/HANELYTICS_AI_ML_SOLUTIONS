
import { useState } from 'react'
import './InventoryPieChart.css'
import PieChartItem from './../InventoryPieChartItem/InventoryPieChartItem.jsx'



function InventoryPieChart({ chartText, pieChartData, data }) {

    const slicedData = data.slice(1,6)

    const [userData, setUserData] = useState({
        // 
        labels: slicedData.map((data) => data.Product_Name),
        datasets: [{
            // label: "Sales Data",
            data: slicedData.map((data) => data.Order_Fulfillment_Time_in_days),
            backgroundColor: ["#756432", "#ffaa00", "#323f4b", "#00ff00", "#020230"],
            borderColor: "white",
            borderWidth: 1,

        }
        ],
        hoverOffset: 6

    })

    // console.log()

    return (
        <div className='pie-chart-container'>
            <div style={{ width: 260 }}>
                <PieChartItem chartData={userData} chartText={chartText} />
            </div>

        </div>
    )
}

export default InventoryPieChart


// {
//     label: "Safety Stock",
//     data: usersData.map((data) => data.safetyStock),
//     backgroundColor: ["#000", "#fff", "#aaa", "#55852c", "#14c49e", "#07de2b", "#086acc", "#810fab"],
//     borderColor: "white",
//     borderWidth: 1
// }, {
//     label: "Reorder Point Quantity",
//     data: usersData.map((data) => data.reorderPointQuantity),
//     backgroundColor: ["#fcba03", "#8c8a54", "#0c04b0", "#55852c", "#14c49e", "#07de2b", "#086acc", "#810fab"],
//     borderColor: "white",
//     borderWidth: 1
// }
