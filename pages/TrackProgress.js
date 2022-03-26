import Head from 'next/head';
import { Container, Message } from 'semantic-ui-react';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
  
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const state = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'BMI',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'black',
      borderColor: 'black',
      borderWidth: 4,
      pointHoverBorderWidth: 10,
      data: [65, 59, 80, 81, 56, 11, 3, 23, 54, 10, 22, 32]
    }, 
    {
        label: 'Body Fat %',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 4,
        pointHoverBorderWidth: 10,
        data: [34, 52, 12, 35, 13, 76, 46, 33, 44, 36]
      }
  ]
}

const TrackProgress = () => {
    return (
        <>
            <Head>
                <title>HealthStat | Track Progress</title>
                <meta name="keywords" content="track progress, history, improvement" /> 
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
                </div>
            </Container>
        </>
    );
}

export default TrackProgress;
