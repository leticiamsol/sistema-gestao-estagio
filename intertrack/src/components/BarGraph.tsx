import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart: React.FC = () => {
  const options = {
    chart: {
      type: 'bar',
      
    },
    series: [
      {
        name: 'Sales',
        data: [30, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: [ 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    colors:['#B5121B'],
    
  };

  return (
    <div>
      <ReactApexChart options={options as ApexCharts.ApexOptions} series={options.series} type="bar" height={450} />
    </div>
  );
};

export default BarChart;
