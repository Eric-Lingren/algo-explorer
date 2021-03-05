import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal'
import './infomodal.css'

const customStyles = {
    content : {
        marginRight: '5%',
        marginLeft: '5%',
        border: '2px solid #156477'
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(21, 100, 119, 0.7)'
    }
}


const InfoModal = ({ algoName }) => {
    const [modalIsOpen,setIsOpen] = useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = ()=> setIsOpen(false)

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
                <div className='modal-text-container'>
                    <p className='modal-text-paragraph'> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                        sapiente officiis modi at sunt excepturi expedita sint?
                    </p>
                    <p className='modal-text-paragraph'>
                        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
                        quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
                        fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
                        consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                        doloremque. Quaerat provident commodi consectetur veniam similique ad 
                        earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
                        fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
                        suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                        modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
                        totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
                        quasi aliquam eligendi, placeat qui corporis!
                    </p>
                </div>
            </Modal>
        </div>
    );
}

export default InfoModal