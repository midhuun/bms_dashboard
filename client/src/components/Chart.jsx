import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import {CChart} from '@coreui/react-chartjs'
const Chart = () => {
  return (
    <div className='w-[250px] max-h-[50px]'>
    <CChart
  type="doughnut"
  data={{
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10],
      },
    ],
  }}
  options={{
    plugins: {
      legend: {
        labels: {
          color: '#ccc',
        }
      }
    },
  }}
/>
</div>
  )
}

export default Chart