import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import orderservice from '../../../services/OrderService';


const RevenueChart = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    (async function() {
      try {
        const result = await orderservice.trash();
        let chartData = [];
        if (Array.isArray(result.data.orders) && result.data.orders.length > 0) {
          const sortedOrders = result.data.orders.sort((a, b) => new Date(a.date) - new Date(b.date));
          const lastFiveOrders = sortedOrders.slice(0, 7);
          chartData = lastFiveOrders.map(item => ({
            Ngày: item.date,
            Tổng: item.total
          }));
        }
        setData(chartData);
      // try {
      //   const result = await orderservice.trash();
      //   let chartData = [];
      // if (Array.isArray(result.data.orders) && result.data.orders.length > 0) {
      //   chartData = result.data.orders.map(item => ({
      //     Ngày: item.date,
      //     Tổng: item.total
      //   }));
      // }
      //   setData(chartData);
      } catch (error) {
        console.error('Error fetching order chart data:', error);
        // Show error message to user
      }
    })();
  }, []);


  return (
    <ResponsiveContainer className="chart" height={350} width={800}>
         <LineChart 
          width={600} 
         height={300} 
          data={Data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
         >
         <XAxis dataKey="Ngày"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="Tổng" stroke="#8884d8" activeDot={{r: 8}}/>
         </LineChart>
      </ResponsiveContainer>
     
  );
};

export default RevenueChart;


//   const fetchRevenueData = async () => {
//     try {
//       const response = await fetch('/api/revenue');
//       const data = await response.json();
//       setData(data);
//     } catch (error) {
//       console.error('Error fetching revenue data:', error);
//     }
//   };


// import { Tooltip } from 'bootstrap';
// import React, { PureComponent } from 'react';
// import { 
//     BarChart , 
//     Bar, 
//     ResponsiveContainer, 
//     CartesianGrid, 
//     XAxis, 
//     YAxis,
//     Legend
// } from 'recharts';
// function Chart() {
//     //static demoUrl = 'https://codesandbox.io/p/sandbox/tiny-bar-chart-xzyy8g';
//     const data = [
//         {
//           name: 'Page A',
//           uv: 4000,
//           pv: 2400,
//           amt: 2400,
//         },
//         {
//           name: 'Page B',
//           uv: 3000,
//           pv: 1398,
//           amt: 2210,
//         },
//         {
//           name: 'Page C',
//           uv: 2000,
//           pv: 9800,
//           amt: 2290,
//         },
//         {
//           name: 'Page D',
//           uv: 2780,
//           pv: 3908,
//           amt: 2000,
//         },
//         {
//           name: 'Page E',
//           uv: 1890,
//           pv: 4800,
//           amt: 2181,
//         },
//         {
//           name: 'Page F',
//           uv: 2390,
//           pv: 3800,
//           amt: 2500,
//         },
//         {
//           name: 'Page G',
//           uv: 3490,
//           pv: 4300,
//           amt: 2100,
//         },
//       ];
    
//       return (
//           // <RechartsBarChart
//           //     width={500}
//           //     height={300}
//           //     data={data}
//           //     margin={{
//           //         top:20,
//           //         right:30,
//           //         left:20,
//           //         bottom:5,
//           //     }}
//           // >
//           //     <CartesianGrid strokeDasharray='3 3'/>
//           //     <XAxis dataKey='name'/>
//           //     <YAxis/>
//           //     <Tooltip/>
//           //     <Legend/>
//           //     <Bar dataKey='pv' stackId='a' fill='#8884d8'/>
//           // </RechartsBarChart>
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart width={150} height={40} data={data}>
//             <Bar dataKey="uv" fill="#8884d8" />
//           </BarChart>
//         </ResponsiveContainer>
//       );
//     }
  
// // const config={
// //     keys:
// //     {
// //         id: 'loi',
// //         lable:'loi team',
// //         color:'orange',
// //     },
// //     unit: 'man-days',
// // }
// export default Chart;
