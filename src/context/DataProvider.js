import React, { useState } from 'react'

export const DataContext = React.createContext()

const  DataContextProvider = (props) => {
    const [sortableData, setSortableData] = useState()

    const colorInt = () => Math.random() * 256 >> 0
    // const dataInt = () => Math.floor(Math.random() * (10 - 1)+1) >> 0
    const dataInt = () => Math.floor(Math.random() * (1000 - 1)+1) >> 0

    const buildData = () => {
        let dataArray = []
        const screenWidth = window.innerWidth
        const optimalBars = screenWidth / 25
        // const optimalBars = 5
        for( let i = 0; i < optimalBars; i++){
            let dataObject = {
                integer: dataInt(),
                color:  `rgb(${colorInt()}, ${colorInt()}, ${colorInt()})`
            }
            dataArray.push(dataObject)
        }
        setSortableData(dataArray)
    }


    return (
        <DataContext.Provider value={{
            sortableData,
            buildData,
            setSortableData
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider