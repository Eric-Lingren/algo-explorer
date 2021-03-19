import { useState, useEffect, useContext } from 'react' 
import { DataContext } from '../../../context/DataProvider'
import DataChart from '../../DataChart'


const  SelectionSort = () => {
    const { sortableData } = useContext(DataContext)
    const [chartData, setChartData] = useState([])
    let animationIterations = []
    let delay = 400

    useEffect(() => {
        setChartData(sortableData)
    }, [sortableData])



    const runSelectionSort = (sortableData) => {
        animationIterations.push(sortableData)
        let array = [...sortableData]
        let length = array.length

        for (let i = 0; i < length; i++) {
            let minimumIndex = i;
            for (let j = i + 1; j < length; j++) {
                if (array[minimumIndex].integer > array[j].integer) {
                    minimumIndex = j
                }
            }
            if (minimumIndex !== i) {
                let tempItem = array[i]
                array[i] = array[minimumIndex]
                array[minimumIndex] = tempItem
                buildAnimationData([...array])
            }
        }
    }


    const buildAnimationData = (tempArray) => {
        let prevAnimation = animationIterations[animationIterations.length-1]
        if( JSON.stringify(prevAnimation) !== JSON.stringify(tempArray) ){
            animationIterations.push(tempArray)
        }
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
        await runSelectionSort(sortableData)
        animateResults(animationIterations)
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

export default SelectionSort
