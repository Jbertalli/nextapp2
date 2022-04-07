import Head from 'next/head';
import { Container, Message } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
  
//   ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const state = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//   datasets: [
//     {
//       label: 'BMI',
//       fill: false,
//       lineTension: 0.5,
//       backgroundColor: 'black',
//       borderColor: 'black',
//       borderWidth: 4,
//       pointHoverBorderWidth: 10,
//       data: [100, 200, 150, 250, 55]
//     }, 
//     {
//         label: 'Body Fat Percentage',
//         fill: false,
//         lineTension: 0.5,
//         backgroundColor: 'blue',
//         borderColor: 'blue',
//         borderWidth: 4,
//         pointHoverBorderWidth: 10,
//         data: [34, 52, 12, 35, 13, 76, 46, 33, 44, 36, {}]
//       }
//   ]
// }

const TrackProgress = () => {

    //empty object
    const [chartData, setChartData] = useState({})
    //empty array
    const [employeeSalary, setEmployeeSalary] = useState([]);
    //empty array
    const [employeeAge, setEmployeeAge] = useState([]);

    const chart = () => {
        //empty arrays
        let empSal = [];
        let empAge = [];
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(res => {
            console.log(res);
            for(const dataObj of res.data.data) {
                //push to empty arrays
                empSal.push(parseInt(dataObj.employee_salary))
                empAge.push(parseInt(dataObj.employee_age))
            }
            setChartData({
                labels: empAge,
                datasets: [
                    {
                        label: 'BMI',
                        fill: false,
                        lineTension: 0.5,
                        backgroundColor: 'black',
                        borderColor: 'black',
                        borderWidth: 4,
                        pointHoverBorderWidth: 10,
                        data: empSal
                    }
                ]
            });
        })
        .catch(err => {
            console.log(err);
        })

        console.log(empSal, empAge);
    }

    useEffect(() => {
        chart()
    }, [])

    return (
        <>
            <Head>
                <title>HealthStat | Track Progress</title>
                <meta name="description" content="track progress, history, improvement" /> 
            </Head>
            <Container textAlign="center" as="h3" style={{ margin: '2em' }}>
            <Message
                attached
                compact
                icon="chart line"
                header="Track Progress"
                content="View Your Progression Over Time"
                color="black"
            />
            <div>
                {/* <Line
                    data={chartData}
                    options={{
                        responsive: true,
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        }
                    }}
                /> */}
            </div>
            {/* <div>
                <Line
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend:{
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div> */}
            </Container>
        </>
    );
}

export default TrackProgress;


// let date = new Date()
// console.log(date)

// let date = new Date();
// let year = date.getFullYear();
// console.log(year);
