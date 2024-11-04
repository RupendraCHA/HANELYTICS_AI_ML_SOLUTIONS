import React from 'react';
import NewChartItem from '../NewChartItem/NewChartItem';

function NewChart({data, chartText, pieChartData}) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Sample Pie Chart</h2>
      <NewChartItem data={data} chartText={chartText} pieChartData={pieChartData} />
    </div>
  );
}

export default NewChart;
