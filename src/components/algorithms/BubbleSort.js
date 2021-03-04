import { useState, useEffect } from 'react' 
import sortableData from '../../data/sortableData'
import DataChart from '../DataChart'

const  BubbleSort = () => {
    const [triggerChartRerender, setTriggerChartRerender] = useState(0)

    let delay = 500

    useEffect(() => {
    }, [triggerChartRerender])


    const runBubbleSort = () => {
        (function myLoop(i) {
            setTimeout(() => {
                let arr = sortableData
                for (let j = 0; j < arr.length; j++) {
                    if(arr[j + 1]){
                        if (arr[j].integer > arr[j + 1].integer) {
                            let tmp = arr[j]
                            arr[j] = arr[j + 1]
                            arr[j + 1] = tmp
                        }
                    }
                }
                
                if (--i) {
                    setTriggerChartRerender(i)
                    myLoop(i)
                }
                else console.log('finished')
            }, delay)
            
        })(sortableData.length)  
    }


    return (
        <div>
            <div className='button-wrapper'>
                <button onClick={runBubbleSort}> Run Sort </button>
            </div>
            <DataChart data={sortableData} />
        </div>
    );
}

export default BubbleSort
