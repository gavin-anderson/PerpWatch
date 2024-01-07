import React from 'react';
import ReactECharts from 'echarts-for-react';

import './LineChart.css'
const LineChart = () => {
  const option = {
    color: [
      "#dd6b66",
      "#759aa0",
      "#e69d87",
      "#8dc1a9",
      "#ea7e53",
      "#eedd78",
      "#73a373",
      "#73b9bc",
      "#7289ab",
      "#91ca8c",
      "#f49f42"
    ],
    backgroundColor: "#1e1e1e",
    textStyle: {
      color: '#ffffff'
    },
    title: {
      text: 'Funding Rates',
      textStyle: {
        color: "#ffffff"
      },
      subtextStyle: {
        color: "#aaaaaa"
      }
    },
    line: {
      itemStyle: {
        borderWidth: 1
      },
      lineStyle: {
        width: 2
      },
      symbolSize: 4,
      symbol: "circle",
    },

    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['PERP', 'MUX', 'Pika', 'Kwenta', 'Aevo', 'Poly'],
      selected: {
        'PERP': true,
        'BTC': true,
        'SOL': true
      },
      textStyle: {
        color: '#ffff'
      },
      icon:'diamond'
    },
    grid: {
      show: false
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8'],
      axisTick: {
        show: true
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#ffffff' 
        }
      },
      axisLabel: {
        color: '#ffffff',
        // interval:4
      },
      splitLine: { show: false },
    },
    yAxis: {
      type: 'value',
      boundaryGap: false,
      axisTick: {
        show: true
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#ffffff' // Sets Y axis line and text color to white
        }
      },
      axisLabel: {
        color: '#ffffff' // Sets Y axis labels color to white
      },
      splitLine: { show: false },
    },
    series: [
      {
        name: 'PERP',
        type: 'line',
        smooth: true,
        data: [
          -0.000322, 0.00347, -0.002024, 0.00368, -0.002784, 0.004483, 0.004293, -0.001354],
        itemStyle: {
          normal: {
            lineStyle: {
              smooth: true,
              width: 3,
            }
          }
        }
      },

      {
        name: 'MUX',
        type: 'line',
        smooth: true,
        data: [-0.000761, 0.003858, 0.000806, 0.002049, 0.002534, -0.001946, 0.000026, -0.002401],
        itemStyle: {
          normal: {
            lineStyle: {
              width: 3,
              smooth: true
            }
          }
        }
      },
      {
        name: 'Pika',
        type: 'line',
        smooth: true,
        data: [-0.000684, 0.003331, 0.003874, 0.000135, -0.00185, -0.002113, -0.002289, -0.000478],
        itemStyle: {
          normal: {
            lineStyle: {
              width: 3,
              smooth: true
            }
          }
        }
      },
      {
        name: 'Kwenta',
        type: 'line',
        smooth: true,
        data: [-0.002373, -0.000117, -0.003203, 0.003191, -0.000122, 0.001532, 0.004877, 0.000106],
        itemStyle: {
          normal: {
            lineStyle: {
              width: 3,
              smooth: true
            }
          }
        }
      },
      {
        name: 'Aevo',
        type: 'line',
        smooth: true,
        data: [-0.003135, -0.004694, 0.001193, 0.004209, 0.000193, 0.004681, 0.000866, 0.001841],
        itemStyle: {
          normal: {
            lineStyle: {
              width: 3,
              smooth: true
            }
          }
        }
      },
      {
        name: 'Poly',
        type: 'line',
        smooth: true,
        data: [-0.003347, -0.00037, -0.004822, 0.001061, -0.00454, -0.003257, 0.000284, -0.000236],
        itemStyle: {
          normal: {
            lineStyle: {
              width: 3,
              smooth: true
            }
          }
        }
      },
    ],
  };

  return (
    <div className='linechart-container'>
      <ReactECharts option={option} className='chart' />
    </div>

  );


};
export default LineChart;