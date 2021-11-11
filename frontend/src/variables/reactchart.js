import React,{useState,useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import api from "../utils/api";

export default function LineChart() {
    const [weekly,setWeekly] = useState([]);
    const [graphData,setGraphData] = useState(
        {   
            labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            datasets: [
            {
                data: [0,0,0,0,0,0,0],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    })

    useEffect(()=>{
        const fetchData = async() => {
            try {
                let data = await api.dashboardChart();
                console.log(data)
                const arr = [];
                Object.values(data).forEach(val => arr.push(val));
                console.log(arr)
                setGraphData({
                    labels:graphData.labels,
                    datasets:[
                        {
                            data: arr,
                            fill: false,
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgba(255, 99, 132, 0.2)',

                        }
                    ]
                })
                console.log("Abhi ka Data: ", data);
            } catch (error) {
                console.log(error);
            }
          };
          fetchData();
    },[]);
      
      const options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };  
    return (
      <div>
        <Line data={graphData} options={options} />
      </div>
    );
  }
  