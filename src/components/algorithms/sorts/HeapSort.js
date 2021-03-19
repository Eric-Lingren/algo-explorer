import { useState, useEffect, useContext } from 'react' 
import { DataContext } from '../../../context/DataProvider'
import DataChart from '../../DataChart'


const  HeapSort = () => {
    const { sortableData } = useContext(DataContext)
    const [chartData, setChartData] = useState([])
    let animationIterations = []
    let delay = 400

    useEffect(() => {
        setChartData(sortableData)
    }, [sortableData])




    let arrayLength
    function heap_root(inputArray, i) {
        let leftIndex = 2 * i + 1
        let rightIndex = 2 * i + 2
        let maxIndex = i

        if (leftIndex < arrayLength && inputArray[leftIndex].integer > inputArray[maxIndex].integer){
            maxIndex = leftIndex;
        }
    
        if (rightIndex < arrayLength && inputArray[rightIndex].integer > inputArray[maxIndex].integer){
            maxIndex = rightIndex;
        }
    
        if (maxIndex !== i) {
            swap(inputArray, i, maxIndex)
            heap_root(inputArray, maxIndex)
        }
    }

    
    function swap(inputArray, indexA, indexB) {
        let tempItem = inputArray[indexA]
        inputArray[indexA] = inputArray[indexB]
        inputArray[indexB] = tempItem
        buildAnimationData([...inputArray])
    }
    


    const runHeapSort = (sortableData) => {
        arrayLength = sortableData.length
        const midpoint = Math.floor(arrayLength / 2)
    
        for (var i = midpoint; i >= 0; i--){
            heap_root(sortableData, i)
        }
    
        for (i = sortableData.length - 1; i > 0; i--) {
            swap(sortableData, 0, i)
            arrayLength--
            heap_root(sortableData, 0)
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
        let inputData = [...sortableData]
        buildAnimationData([...inputData])
        await runHeapSort(inputData)
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

export default HeapSort
