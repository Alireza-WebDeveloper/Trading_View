import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface CryptoChartProps {
  cryptoData: { timestamp: string; price: number }[];
  timeRange: '1d' | '1w' | '1m' | '3m' | '1y';
}

const CryptoChart: React.FC<CryptoChartProps> = ({ cryptoData, timeRange }) => {
  const [chartData, setChartData] = useState<any>(null);

  const processData = () => {
    const labels = cryptoData.map((data) => data.timestamp);
    const data = cryptoData.map((data) => data.price);

    setChartData({
      labels: labels,
      datasets: [
        {
          label: `Price in ${timeRange}`,
          data: data,
          borderColor: 'orange',
          backgroundColor: 'rgba(255, 165, 0, 0.2)',
          borderWidth: 2,
          fill: true,
        },
      ],
    });
  };

  React.useEffect(() => {
    processData();
  }, [cryptoData, timeRange]);

  if (!chartData) {
    return <div>Loading chart...</div>;
  }

  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              mode: 'nearest',
              intersect: false,
            },
          },
          scales: {
            x: {
              ticks: {
                color: 'white',
              },
            },
            y: {
              ticks: {
                color: 'white',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default CryptoChart;
