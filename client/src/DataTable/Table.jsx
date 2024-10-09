import React from 'react'
import "./Table.css"
// import { revenueData } from './JsonData1'

const Table = (props) => {

    const { data, inventoryData, revenueData, equipmentData1, clinicalData } = props

    return (
        <>
            {!inventoryData && (<table className='table'>
                <thead >
                    <tr>
                        <th className='column-name'>Product_Id</th>
                        <th className='column-name'>Product_Name</th>
                        <th className='column-name'>Lead_time_in_Days</th>
                        <th className='column-name'>Average_Monthly_Sales</th>
                        <th className='column-name'>Avg_Monthly_Sales_New</th>
                        <th className='column-name'>Predicted_monthly_sales</th>
                        <th className='column-name'>Predicted_monthly_sales_New</th>
                        <th className='column-name'>Average_daily_sales</th>
                        <th className='column-name'>Average_daily_sales_New</th>
                        <th className='column-name'>Safety_Stock_For_15_Days</th>
                        <th className='column-name'>Safety_Stock_For_15_Days_New</th>
                        <th className='column-name'>Reorder_Point_Quantity</th>
                        <th className='column-name'>Reorder_Point_Quantity_New</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((eachRow, index) => {
                            {/* console.log(index) */ }
                            return (
                                <tr key={index}>
                                    <td>{eachRow.Product_ID}</td>
                                    <td>{eachRow.Product_Name}</td>
                                    <td>{eachRow.Lead_time_in_Days}</td>
                                    <td>{eachRow.Avarage_Monthly_Sales}</td>
                                    <td>{eachRow.Avg_Monthly_Sales_New}</td>
                                    <td>{eachRow.Predicted_monthly_sales}</td>
                                    <td>{eachRow.Predicted_monthly_sales_New}</td>
                                    <td>{eachRow.Avarage_daily_sales}</td>
                                    <td>{eachRow.Avarage_daily_sales_New}</td>
                                    <td>{eachRow.Safety_Stock_For_15_Days}</td>
                                    <td>{eachRow.Safety_Stock_For_15_Days_New}</td>
                                    <td>{eachRow.Reorder_Point_Quantity}</td>
                                    <td>{eachRow.Reorder_Point_Quantity_New}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>)}
            {!revenueData && (
                <table className='table'>
                    <thead >
                        <tr>
                            <th className='column-name'>S_no</th>
                            <th className='column-name'>Week</th>
                            <th className='column-name'>Day_ofThe_Week</th>
                            <th className='column-name'>Forecasted_Revenue_For_21_Days</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((eachRow, index) => {
                                {/* console.log(index) */ }
                                return (
                                    <tr key={index}>
                                        <td>{eachRow.S_no}</td>
                                        <td>{eachRow.Week}</td>
                                        <td>{eachRow.Day_Of_The_Week}</td>
                                        <td>{eachRow.Forecasted_Revenue_For_21_Days}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            )}
            {!equipmentData1 && (
                <table className='table'>
                    <thead >
                        <tr>
                            <th className='column-name'>S.No</th>
                            <th className='column-name'>equipment_Id</th>
                            <th className='column-name'>Historical_Operational_Cycles</th>
                            <th className='column-name'>Predicted_Operational_Cycles</th>
                            <th className='column-name'>Going_To_Fail_or_Not</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((eachRow, index) => {
                                {/* console.log(index) */ }
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{eachRow.equipment_Id}</td>
                                        <td>{eachRow.Historical_Operational_Cycles}</td>
                                        <td>{eachRow.Predicted_Operational_Cycles}</td>
                                        <td>{eachRow.Going_To_Fail_or_Not}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            )}
            {!clinicalData && (
                <table className='table'>
                    <thead >
                        <tr>
                            <th className='column-name'>S.No</th>
                            <th className='column-name'>Medical_Record_Number</th>
                            <th className='column-name'>Medication</th>
                            <th className='column-name'>Predicted_Operational_Cycles</th>
                            <th className='column-name'>Going_To_Fail_or_Not</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((eachRow, index) => {
                                {/* console.log(index) */ }
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{eachRow.Medical_Record_Number}</td>
                                        <td>{eachRow.Medication}</td>
                                        <td>{eachRow.Medicine_Total_Quantity}</td>
                                        <td>{eachRow.Predicted_Medical_Quantity_upr}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            )}
        </>
    )
}

export default Table
