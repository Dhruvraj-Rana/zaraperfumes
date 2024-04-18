import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const Reports = () => {
  const chartRef = useRef(null);
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {  
    const data = {
      labels: ['Food', 'Transportation', 'Shopping', 'Entertainment', 'Others'],
      datasets: [{
        label: 'Monthly Expenses',
        data: [300, 150, 200, 100, 250], 
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      }],
    };

    if (chartRef.current && !chartRef.current.chart) {
      const ctx = chartRef.current.getContext('2d');
      chartRef.current.chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
 return () => {
      if (chartRef.current && chartRef.current.chart) {
        chartRef.current.chart.destroy();
        chartRef.current.chart = null;
      }
    };
  }, []);
return (
    <div>
      <h2>Reports</h2>
      <p>View detailed reports and analyze your spending patterns over time.</p>
      <div>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}

export default Reports;
