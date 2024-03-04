import React from 'react';
import { Chart as ChartJS, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from "react-chartjs-2";

ChartJS.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarPlotComponent = ({ staticMetric, interactiveMetric }) => {
    if (!staticMetric) {
        return <div>Loading metrics...</div>;
    }

    const labels = ['Passing', 'Defending', 'Duels', 'Dribbling', 'Shooting'];

    const datasets = [{
        label: 'Average Performance Metrics',
        data: [
            staticMetric.passingRating,
            staticMetric.defendingRating,
            staticMetric.duelsRating,
            staticMetric.dribblingRating,
            staticMetric.shootingRating,
        ],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
    }];

    if (interactiveMetric) {
        datasets.push({
            label: 'Selected Temperature Metrics',
            data: [
                interactiveMetric.passingRating,
                interactiveMetric.defendingRating,
                interactiveMetric.duelsRating,
                interactiveMetric.dribblingRating,
                interactiveMetric.shootingRating,
            ],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)',
        });
    }

    const data = {
        labels,
        datasets,
    };

    const options = {
        elements: {
            line: {
                borderWidth: 3,
            },
        },
        scales: {
            r: {
                angleLines: {
                    display: true,
                },
                suggestedMin: 0, // Set the minimum suggested value for the scale
                suggestedMax: 100, // Set the maximum suggested value for the scale
                ticks: {
                    color: '#547FE7',
                    font: {
                        size: 14,
                    },
                    // Optional: Include this if you want to format the ticks in a specific way
                    callback: function(value, index, values) {
                        return value;
                    }
                },
                pointLabels: {
                    color: '#547FE7',
                    font: {
                        size: 16,
                    },
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: '#547FE7', 
                    font: {
                        size: 14, 
                    },
                },
            },
            tooltip: {
                titleFont: {
                    size: 16, 
                },
                bodyFont: {
                    size: 14, 
                },
                footerFont: {
                    size: 12, 
                },
            },
        },
    };
    
    return <Radar data={data} options={options} />;
};

export { RadarPlotComponent };
