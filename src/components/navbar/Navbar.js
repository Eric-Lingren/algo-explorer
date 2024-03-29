import { useState, useEffect, useRef, useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './navbar.css'


const Navbar = () => {
    const { buildData } = useContext(DataContext)
    const [isOpen, setIsOpen] = useState(false)
    const navlinkRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navlinkRef.current && !navlinkRef.current.contains(event.target)) setIsOpen(false)
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const navigateAway = () => {
        buildData()
        setIsOpen(false)
    }


    return (
        <div ref={navlinkRef}>
            <FontAwesomeIcon className='fa-icon-menu' icon={faBars} onClick={() => setIsOpen(!isOpen)}/>
            {isOpen &&
                <div className='link-wrapper' >
                    <Link className='link' to='bubble-sort' onClick={navigateAway}> Bubble Sort </Link>
                    <Link className='link' to='insert-sort' onClick={navigateAway}> Insert Sort </Link>
                    <Link className='link' to='merge-sort' onClick={navigateAway}> Merge Sort </Link>
                    <Link className='link' to='selection-sort' onClick={navigateAway}> Selection Sort </Link>
                    <Link className='link' to='heap-sort' onClick={navigateAway}> Heap Sort </Link>
                </div>
            }
        </div>
    )
}

export default Navbar
