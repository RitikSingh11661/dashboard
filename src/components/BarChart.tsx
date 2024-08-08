// components/BarChart.tsx
import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { ChartData } from '@/type';

interface BarChartProps {
  data: ChartData;
}

const BarChart = ({ data }: BarChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) chartInstance.current.destroy();
      chartInstance.current = new Chart(chartRef.current, {
        type: 'bar',
        data,
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Product Comparison' },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
};

export default BarChart;