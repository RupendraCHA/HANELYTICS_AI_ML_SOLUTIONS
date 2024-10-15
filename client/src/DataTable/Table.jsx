import React from 'react'
import "./Table.css"
// import { revenueData } from './JsonData1'

const Table = (props) => {

    const { data, inventoryData, revenueData, equipmentData1, clinicalData } = props

    const convertToFixedDecimal = (number, roundedTo) => {
        let number1 = number.toFixed(roundedTo)
        return number1
    }

    return (
        <>
            {!inventoryData && (<table className='table'>
                <thead >
                    <tr>
                        <th className='column-name'>S.No</th>
                        <th className='column-name'>Product_Id</th>
                        <th className='column-name'>Product_Name</th>
                        <th title="Time required to transport the product" className='column-name'>Lead_time_in_Days</th>
                        <th className='column-name'>Historical_Monthly_Sales</th>
                        <th className='column-name'>Predicted_monthly_sales<br />(without Live Data)</th>
                        <th className='column-name'>Predicted_monthly_sales<br />(With Live Data)</th>
                        <th className='column-name'>Predicted_daily_sales<br />(without Live Data)</th>
                        <th className='column-name'>Predicted_daily_sales<br />(With Live Data)</th>
                        <th className='column-name'>Predicted_Safety_Stock_For_15_Days<br />(without Live Data)</th>
                        <th className='column-name'>Predicted_Safety_Stock_For_15_Days<br />(With Live Data)</th>
                        <th className='column-name'>Predicted_Reorder_Point_Quantity<br />(without live Data)</th>
                        <th className='column-name'>Predicted_Reorder_Point_Quantity<br />(With Live Data)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((eachRow, index) => {
                            {/* console.log(index) */ }
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>PUID{eachRow.Product_ID}</td>
                                    <td>{eachRow.Product_Name}</td>
                                    <td>{eachRow.Lead_time_in_Days}</td>
                                    <td>{eachRow.Avarage_Monthly_Sales}</td>
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
                            <th className='column-name'>Product_Type</th>
                            <th className='column-name'>SKU</th>
                            <th className='column-name'>Predicted_Revenue_For_90_Days</th>
                            <th className='column-name'>Week_Of_the_Revenue</th>
                            {/* <th className='column-name'>Transportation_Mode</th> */}

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((eachRow, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{eachRow.Product_Type}</td>
                                        <td>UMI{eachRow.SKU}</td>
                                        <td>{convertToFixedDecimal(eachRow.Forecasted_Revenue_For_90_Days, 2)}</td>
                                        <td>{eachRow.Week}</td>
                                        {/* <td>{eachRow.Transportation_Modes}</td> */}
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
                            <th className='column-name'>Equipment_Id</th>
                            <th className='column-name'>Historical_Operational_Cycles</th>
                            <th className='column-name'>Predicted_Cycle_Of_Equipment_Failure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((eachRow, index) => {
                                {/* console.log(index) */ }
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>EUID{eachRow.equipment_Id}</td>
                                        <td>{eachRow.Historical_Operational_Cycles}</td>
                                        <td>{convertToFixedDecimal(eachRow.Predicted_Equipment_Failure_Cycles_Threshold, 2)}</td>
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
                            <th className='column-name'>SKU_Of_Drug</th>
                            <th className='column-name'>Drug_Name</th>
                            <th className='column-name'>Predicted_Safety_Stock_For_15_days</th>
                            <th className='column-name'>Predicted_Reorder_Point_Quantity</th>
                            <th className='column-name'>Historical_Delivered_Quantity</th>
                            <th className='column-name'>Predicted_Delivery_Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((eachRow, index) => {
                                {/* console.log(index) */ }
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>UMI00{eachRow.SKU_Of_DRUG}</td>
                                        <td>{eachRow.Drug_Name}</td>
                                        <td>{eachRow.Safety_Stock_For_15_days}</td>
                                        <td>{eachRow.Reorder_Point_Quantity}</td>
                                        <td>{eachRow.Quantity_Of_Drug_Consumption_By_Firms}</td>
                                        <td>{convertToFixedDecimal(eachRow.Predicted_Quantity_Of_Demand, 2)}</td>
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
