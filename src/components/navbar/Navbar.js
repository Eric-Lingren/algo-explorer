import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './navbar.css'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navlinkRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navlinkRef.current && !navlinkRef.current.contains(event.target)) setIsOpen(false)
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])


    return (
        <div>
            <FontAwesomeIcon className='fa-icon-menu' icon={faBars} onClick={() => setIsOpen(!isOpen)}/>
            {isOpen &&
                <div className='link-wrapper' ref={navlinkRef}>
                    <Link className='link' to='bubble-sort' onClick={() => setIsOpen(false)}> Bubble Sort </Link>
                    <Link className='link' to='insert-sort' onClick={() => setIsOpen(false)}> Insert Sort </Link>
                </div>
            }
        </div>
    )
}

export default Navbar
