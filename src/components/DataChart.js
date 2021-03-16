import { Bar } from 'react-chartjs-2'

const  DataChart = ({ data }) => {
    const dataIntegers = Array.from(data, item => item.integer)
    const dataColors = Array.from(data, item => item.color)

    let chartData = {
        labels: dataIntegers,
        datasets: [
            {
                label: "Integer Dataset",
                data: dataIntegers,
                fill: true,
                backgroundColor: dataColors
            }
        ],
        options: {
            animation: {
                duration: 0
            }
        }
    }

    return (
        <div style={{height: '70vh', width: '100vw'}}>
            <Bar 
                data={chartData} 
                options={{
                    responsive: true,
                    animation: {
                        duration: 0
                    },
                    legend: {
                        display: false
                    },
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                fontSize: 14
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Integer Values',
                                fontSize: 18
                            }
                        }],
                        xAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: false,
                                fontSize: 14
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Available Dataset',
                                fontSize: 18
                            }
                        }]
                    }
                }}
                redraw={true} />
        </div>
    );
}

export default DataChart
