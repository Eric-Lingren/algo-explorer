import { useState, useEffect, useContext } from 'react' 
import { DataContext } from '../../../context/DataProvider'
import DataChart from '../../DataChart'


const  InsertSort = () => {
    const { sortableData } = useContext(DataContext)
    const [chartData, setChartData] = useState([])
    let delay = 400

    useEffect(() => {
        setChartData(sortableData)
    }, [sortableData])


    const runInsertSort = (dataArray) => {
        let outputArr = [] // Holding for all loop iterations - used for animating the algo logic
        for (let i = 1; i < dataArray.length; i++) {
            let tempArray = []  // Temp container for current iteration dataset
            let j = i - 1
            let temp = dataArray[i]
            while (j >= 0 && dataArray[j].integer > temp.integer) {
                dataArray[j + 1] = dataArray[j]
                j--
            }
            dataArray[j+1] = temp
            tempArray.push(...dataArray)     // Capture current data on each iteration
            outputArr.push(tempArray)   // Add current iteration temporary data to the final output array for animations later
        }
        return outputArr
    }


    const animateResults = (sortResults) => {
        (function myLoop(i) {
            setTimeout(() => {
                if (i < sortResults.length - 1) {
                    i++
                    setChartData(sortResults[i])
                    myLoop(i)
                }
            }, delay)
        }) (0)
    }


    const initSorting = async () => {
        let sortResult = await runInsertSort(sortableData)
        animateResults(sortResult)
    }


    return (
        <div>
            <div className='button-wrapper'>
                <button onClick={initSorting}> Run Sort </button>
            </div>
            { chartData && <DataChart data={chartData} /> }
        </div>
    );
}

export default InsertSort
