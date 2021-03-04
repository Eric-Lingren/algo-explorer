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
        <div style={{height: '70vh', width: '99vw'}}>
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
                                beginAtZero: true 
                            }
                        }]
                    }
                }}
                redraw={true} />
        </div>
    );
}

export default DataChart
