import React, {useEffect, useState} from 'react';
import {IoIosArrowUp} from "react-icons/io";
import cl from './ScrollTopButton.module.css'

const ScrollTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if(window.pageYOffset > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
    }, [])

    if(isVisible) {
        return (
            <div className={cl.wrapper} onClick={scrollToTop}>
                <IoIosArrowUp size={38} color="#fff"/>
            </div>
        );
    }
};

export default ScrollTopButton;