import { useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faInfoCircle, faSync } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../navbar/Navbar'
import './header.css';

const Header = () => {
    const location = useLocation()

    let cleanedName = ''
    if(location.pathname.length > 1) {
        let algoName = location.pathname.substring(1).replace(/-/g, ' ')
        let nameArr = algoName.split(' ')
        nameArr.forEach(word => {
            cleanedName = cleanedName + word[0].toUpperCase() + word.substring(1) + ' '
        })
    }


    return (
        <div className="header-wrap">
            <div className='container'>
                <Navbar />
                <h1 className='header-text'> Algo-Explorer </h1>
            </div>
            {cleanedName.length > 0 &&
                <div className='container right-container'>
                    <h1 className='header-text header-text-right'> {cleanedName} </h1>
                    <FontAwesomeIcon className='fa-icon-info question' icon={faInfoCircle} />
                    <FontAwesomeIcon className='fa-icon-info reset' icon={faSync} />
                </div>
            }
        </div>
    );
}

export default Header;
