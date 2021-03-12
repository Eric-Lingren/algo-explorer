import { useContext } from "react"
import { useLocation } from "react-router-dom"
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/DataProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faSync } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../navbar/Navbar'
import './header.css';
import InfoModal from '../info-modal/InfoModal'

const Header = () => {
    const { buildData } = useContext(DataContext)
    const location = useLocation()

    let cleanedName = ''
    if(location.pathname.length > 1) {
        let algoName = location.pathname.substring(1).replace(/-/g, ' ')
        let nameArr = algoName.split(' ')
        nameArr.forEach(word => {
            cleanedName = cleanedName + word[0].toUpperCase() + word.substring(1) + ' '
        })
        cleanedName = cleanedName.trim()
    }


    return (
        <div className="header-wrap">
            <div className='container'>
                <Navbar />
                <Link to='/' className='header-link'> 
                    <h1 className='header-text'> Algo-Explorer </h1>
                </Link>
            </div>
            {cleanedName.length > 0 &&
                <div className='container right-container'>
                    <h1 className='header-text header-text-right'> {cleanedName} </h1>
                    < InfoModal algoName={cleanedName}/>
                    <FontAwesomeIcon className='fa-icon-info reset' icon={faSync} onClick={buildData} />
                </div>
            }
        </div>
    );
}

export default Header;
