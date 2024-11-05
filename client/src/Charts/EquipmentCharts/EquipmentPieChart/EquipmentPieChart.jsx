
import { useState } from 'react'
import './EquipmentPieChart.css'
import EquipmentPieChartItem from '../EquipmentPieChartItem/EquipmentPieChartItem.jsx'

 // Random colors

// ["#756432", "#ffaa00", "#323f4b", "#00ff00", "#020230"]
function EquipmentPieChart({ data }) {

    const slicedData = data.slice(0,21)
    let backgroundColors1 = []
    let backgroundColors2 = []
    let borderColors = []

    slicedData.forEach(color => {
        backgroundColors1.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
        backgroundColors2.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
        borderColors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    })

    const [userData1, setUserData1] = useState({
        // 
        labels: slicedData.map((data) => data.Item_SKU),
        datasets: [{
            // label: "Sales Data",
            data: slicedData.map((data) => data.Predicted_Revenue_for_Upcoming_90_Days),
            backgroundColor: backgroundColors1,
            borderColor: backgroundColors1,
            borderWidth: 1,
            hoverOffset: 30,
        }
        ]
    })

    const [userData2, setUserData2] = useState({
        // 
        labels: slicedData.map((data) => data.Item_SKU),
        datasets: [{
            // label: "Sales Data",
            data: slicedData.map((data) => data.Predicted_Revenue_for_Upcoming_90_Days),
            backgroundColor: backgroundColors2,
            borderColor: backgroundColors2,
            borderWidth: 1,
            hoverOffset: 30
        }
        ]
    })

    // console.log()

    return (
        <div className='pie-chart-container'>
            
            <div className="p-chart">
                <RevenuePieChartItem chartData={userData1} chartText={"Product ID and Its Revenue Prediction"} />
            </div>
            {/* <div className="p-chart">
                <RevenuePieChartItem chartData={userData2} chartText={"Product Name and its Historical Monthly Sales"} />
            </div> */}
        </div>
    )
}

export default EquipmentPieChart


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
