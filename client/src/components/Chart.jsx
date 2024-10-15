import React, { useState, useEffect } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { CChart } from '@coreui/react-chartjs';
import { RxCaretDown } from 'react-icons/rx';

const Chart = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({ total: 0, pending: 0 });

  async function getData() {
    setLoading(true);
    try {
      const result = await fetch('https://localhost:3000');
      const data = await result.json();
      setResults(data);
    const totalWorkOrders = data?.workOrders?.length;
      const pendingWorkOrders = data?.workOrders?.filter(order => order.status === 'In Progress').length;
      console.log(pendingWorkOrders);
      
      setChartData({
        total: totalWorkOrders,
        pending: pendingWorkOrders
      });

    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='flex p-4 justify-between'>
      <div className='space-y-3'>
        <p className='text-sm mb-3 font-semibold'>Cases Graph</p>
        <p className='px-2 py-1 my-2 flex justify-between bg-gray-300 items-center text-gray-600 rounded-md text-[12px]'>
          Today <RxCaretDown />
        </p>
      </div>
      <div className='w-[200px] h-[50px]'>
        {loading ? (
          <p>Loading chart...</p>
        ) : (
          <CChart
            type="doughnut"
            data={{
              labels: ['Pending Work Orders', 'Other Work Orders'],
              datasets: [
                {
                  backgroundColor: ['#41B883', '#E46651'],
                  data: [chartData.pending, chartData.total - chartData.pending],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  labels: {
                    color: '#ccc',
                  },
                },
                tooltip: {
                  enabled: true, // Tooltip stays enabled
                  interaction: {
                    mode: 'index',
                    intersect: false,
                  },
                }
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Chart;
