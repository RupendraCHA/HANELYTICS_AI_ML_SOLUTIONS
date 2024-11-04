import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
// import Modal from 'react-modal';

// Sample data including all fields
const products = [
  {
    Product_Name: "Blood Pressure Monitor",
    Daily_Sales_Prediction_with_live_data: 781,
    Daily_Sales_Prediction_without_live_data: 1081,
    Historical_Monthly_Sales: 41053,
    Monthly_Sales_Prediction_with_live_data: 23420,
    Monthly_Sales_Prediction_without_live_data: 32434,
    Reorder_Quantity_Prediction_with_live_data: 102974,
    Reorder_Quantity_Prediction_without_live_data: 44174,
    fifteen_Days_Buffer_Stock_Estimates_with_live_data: 92040,
    fifteen_Days_Buffer_Stock_Estimates_without_live_data: 29040,
  },
  {
    Product_Name: "Defibrillator",
    Daily_Sales_Prediction_with_live_data: 1116,
    Daily_Sales_Prediction_without_live_data: 959,
    Historical_Monthly_Sales: 46774,
    Monthly_Sales_Prediction_with_live_data: 33467,
    Monthly_Sales_Prediction_without_live_data: 28776,
    Reorder_Quantity_Prediction_with_live_data: 31920,
    Reorder_Quantity_Prediction_without_live_data: 34530,
    fifteen_Days_Buffer_Stock_Estimates_with_live_data: 15180,
    fifteen_Days_Buffer_Stock_Estimates_without_live_data: 20145,
  },
  // Add more products as needed...
];

// Prepare data for the chart
const labels = [];
const dataValues = [];
const backgroundColors = [];
const backgroundColors1 = [];

const metrics = [
  'Daily_Sales_Prediction_with_live_data',
  'Daily_Sales_Prediction_without_live_data',
  'Historical_Monthly_Sales',
  'Monthly_Sales_Prediction_with_live_data',
  'Monthly_Sales_Prediction_without_live_data',
  'Reorder_Quantity_Prediction_with_live_data',
  'Reorder_Quantity_Prediction_without_live_data',
  'fifteen_Days_Buffer_Stock_Estimates_with_live_data',
  'fifteen_Days_Buffer_Stock_Estimates_without_live_data'
];

// Generate chart data from products
products.forEach(product => {
  metrics.forEach(metric => {
    labels.push(`${product.Product_Name} - ${metric}`);
    dataValues.push(product[metric]);
    backgroundColors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`); // Random colors
    backgroundColors1.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`); // Random colors
  });
});


const data = {
  labels: labels,
//  labels
  datasets: [
    {
      label: 'Product Metrics',
      data: dataValues,
      backgroundColor: backgroundColors,
      hoverOffset: 4,
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true, // Hide the legend
    },
  },
};

const NewChartItem = () => {

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3>Multi-Layered Pie Chart for Product Metrics</h3>
      <div style={{width:"800px", height: "80vh", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center"}}>

        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

// Custom styles for the modal
const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '10px',
    width: '80%',
    maxHeight: '70%',
    overflowY: 'auto',
  },
};

export default NewChartItem;
