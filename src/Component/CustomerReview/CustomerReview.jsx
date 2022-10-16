import { Reviews } from '@mui/icons-material';
import React from 'react'
import Chart from 'react-apexcharts'

const CustomerReview = () => {

    const dataa = {
        series: [
            {
                name: Reviews,
                data: [10,20,15,9,8,55,25]
            }
        ],
        options: {
            chart: {
                type: 'area',
                height: "auto",
            },
           
            fill: {
                colors: ["#fff"],
                type: 'gradient',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                colors: ["crimson"],     
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
            grid:{
                show: true,
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                ],
            },
    },
};


  return (
    <div className='CustomerReview'>
        <Chart series={dataa.series} type='area' options={dataa.options} />
    </div>
  )
}

export default CustomerReview