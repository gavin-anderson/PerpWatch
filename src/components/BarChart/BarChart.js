import ReactEcharts from "echarts-for-react"; 

const BarChart = ({title,xAxisData,seriesData}) =>{
    const option = {
        title:{
            text: title
        },
        tooltip:{},

        xAxis: {
            type: 'category',
            data: xAxisData
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data:seriesData,
            // data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
            }
        ]
   };

   return <ReactEcharts option={option}/>
}; 

export default BarChart;