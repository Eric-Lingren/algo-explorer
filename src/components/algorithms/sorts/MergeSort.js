import { useState, useEffect, useContext } from 'react' 
import { DataContext } from '../../../context/DataProvider'
import DataChart from '../../DataChart'


const  MergeSort = () => {
    const { sortableData } = useContext(DataContext)
    const [chartData, setChartData] = useState([])
    let delay = 400
    let animateIterations = []

    useEffect(() => {
        setChartData(sortableData)
    }, [sortableData])

    
    const runMergeSort = (unsortedArray, leftIndex, rightIndex) => {
        if (rightIndex - leftIndex < 2) return unsortedArray
        
        const length = rightIndex - leftIndex
        const midpoint = leftIndex + Math.floor(length / 2)
    
        // Recursive runs
        runMergeSort(unsortedArray, leftIndex, midpoint)
        runMergeSort(unsortedArray, midpoint, rightIndex)      
        mergeSubarrays(unsortedArray, leftIndex, midpoint, rightIndex)
    }
    
    
    const mergeSubarrays = (array, leftIndex, midpoint, rightIndex) => {
        // These get modified during iterations:
        let result = []
        let left = leftIndex
        let mid = midpoint
        
        while (left < midpoint && mid < rightIndex) {
            if (array[left].integer < array[mid].integer) {
                result.push(array[left++])
            } else {
                result.push(array[mid++])
            }
        }
        
        // Build full array of changes from this iteration for animations
        result = result
                    .concat(array.slice(left, midpoint))
                    .concat(array.slice(mid, rightIndex))

        for (let i = 0; i < rightIndex - leftIndex; i++){
            array[leftIndex + i] = result[i]
        }
        
        // Create new copy of iteration array, check to see if changes were made this run, and add it to master aniamtions
        let tempAnimate =  [...array] 
        let previousAnimate = animateIterations[animateIterations.length-1]

        if(JSON.stringify(tempAnimate) !== JSON.stringify(previousAnimate)){
            animateIterations.push(tempAnimate)
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
        let startIndex = 0
        let endIndex = sortableData.length
        await runMergeSort(sortableData, startIndex, endIndex)
        animateResults(animateIterations)
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

export default MergeSort
