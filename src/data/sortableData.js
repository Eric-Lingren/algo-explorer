const sortableData = []

const colorInt = () => Math.random() * 256 >> 0
const dataInt = () => Math.floor(Math.random() * (1000 - 1)+1) >> 0

const buildData = (quantity) => {
    for( let i = 0; i < quantity; i++){
        let dataObject = {
            integer: dataInt(),
            color:  `rgb(${colorInt()}, ${colorInt()}, ${colorInt()})`
        }
        sortableData.push(dataObject)
    }
}

const screenWidth = window.innerWidth
const optimalBars = screenWidth / 25

buildData(optimalBars)

export default sortableData