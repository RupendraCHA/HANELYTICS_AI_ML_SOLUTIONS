import React from 'react'
import "./Table.css"
// import { revenueData } from './JsonData1'

const Table = (props) => {

    const { data } = props

    return (
        <table className='table'>
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
                            <tr>
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
                                {/* <td>{`${eachRow.Lead_time_in_Days_Avg(New)}`}</td> */}
                                {/* <td>{eachRow.dailySales}</td>
                                <td>{eachRow.safetyStock}</td>
                                <td>{eachRow.reorderPoint}</td> */}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table
