import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal'
import './infomodal.css'
const jsonData = require('../algoInfo.json')

const customStyles = {
    content : {
        marginRight: '0%',
        marginLeft: '0%',
        border: '4px solid #156477'
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    }
}

const returnSuperString = (inputString) => {
    const sups = '⁰¹²³⁴⁵⁶⁷⁸⁹'
    let output = ''
    let averageSplit = inputString.split('')

    averageSplit.forEach(item => {
        if(parseInt(item)){
            const matchInt = parseInt(item)
            const sup = sups[matchInt]
            return output = output + sup
        } 
        output = output + item
    })
    return output
}

const InfoModal = ({ algoName }) => {
    const [modalIsOpen,setIsOpen] = useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = ()=> setIsOpen(false)
    let algoData = jsonData.algos.filter(item => item.name.includes(algoName))[0]


    return (
        <div>
            <FontAwesomeIcon onClick={openModal} className='fa-icon-info question' icon={faInfoCircle} />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Example Modal"
            >
                <div className='close-container'>
                    <FontAwesomeIcon onClick={closeModal} className='fa-icon-close' icon={faTimesCircle} />
                </div>
                <div className='modal-header-container'>
                    <h1 className='modal-header'> {algoName} </h1>
                </div>
                <div className='efficiency-container-wrap'>
                    <h3>Complexity Efficency:</h3>
                        <div>
                            <h4>Best - {returnSuperString(algoData.best)} </h4>
                        </div>
                        <div>
                            <h4>Average - {returnSuperString(algoData.average)} </h4>
                        </div>
                        <div>
                            <h4>Worst - {returnSuperString(algoData.worst)} </h4>
                        </div>
                </div>
                <div className='modal-text-container'>
                    <div>
                        <h3>Overview:</h3>
                        <p className='modal-text-paragraph'> {algoData.overview} </p>
                    </div>
                    <div>
                        <h3>Advantages:</h3>
                        <p className='modal-text-paragraph'> {algoData.advantages} </p>
                    </div>
                    <div>
                        <h3>Disadvantages:</h3>
                        <p className='modal-text-paragraph'> {algoData.disadvantages} </p>
                    </div>
                    <div>
                        <h3>How It Works:</h3>
                        <p className='modal-text-paragraph'> {algoData.howItWorks} </p>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default InfoModal