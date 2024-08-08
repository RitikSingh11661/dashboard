import { Chart, ChartConfiguration } from 'chart.js';
import { useEffect, useRef } from 'react';

interface LineChartProps {
  data: ChartConfiguration['data'];
}

const LineChart=({ data }:LineChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current)chartInstanceRef.current.destroy();
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: 'line',
        data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {position: 'top'},
            title: {display: true,text: 'Sales Over Time'}
          },
        },
      });
    }

    return () => {
      if (chartInstanceRef.current)chartInstanceRef.current.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
