import React from 'react';
import ReactECharts from 'echarts-for-react';

import './LineChart.css'
const LineChart = () => {
  const option = {
    backgroundColor:['#1e1e1e'],
    
    title: {
      text: 'Funding Rates',
      textStyle:{
        color:'#ffff',
        fontStyle:'normal',
        fontSize:'18'
      }
      

    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['ETH', 'BTC', 'SOL'],
      selected: {
        'ETH': true,
        'BTC': true,
        'SOL': true
      },
      textStyle:{
        color:'#ffff'
      }
    },
    grid:{
      show:false
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'ETH',
        type: 'line',

        data: [2200, 2400, 2300, 2500, 2600],
        itemStyle: {
          normal: {
            lineStyle: {
              smooth:true,
              width: 3,
            }
          }
        }
      },

      {
        name: 'BTC',
        type: 'line',
        data: [34000, 35000, 33000, 27000, 38000],
        itemStyle: {
          normal: {
            lineStyle: {
              width: 3,
              smooth:true
            }
          }
        }
      },
      {
        name: 'SOL',
        type: 'line',
        data: [130, 135, 125, 140, 145],
        itemStyle: {
          normal: {
            lineStyle: {
              width: 3,
              smooth:true
            }
          }
        }
      },
    ],
  };

  return (
    <div className='linechart-container'>
      <ReactECharts option={option} className='chart'/>
    </div>

  );


};
export default LineChart;