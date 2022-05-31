import React, {useEffect, useState} from 'react';
import sh from "../../../static/hero_1.png";
import cl from './About.module.css'
import MyButton from "../../UI/MyButton/MyButton";
import {Link} from "react-router-dom";
import {PRODUCTS} from "../../../service/consts";

const About = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isOnHover, setOnHover] = useState(false)
    const rootClasses = [cl.shoes_image]

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true)
        }, 100)
        setTimeout(() => {
            setIsVisible(false)
        }, 1000)
    }, [])

    if(isVisible) {
        rootClasses.push(cl.active)
    }
    if(isOnHover) {
        rootClasses.push(cl.hover)
    }

    return (
        <div className={cl.wrapper}>
            <div
                className={cl.shoes}
            >
                <img src={sh} alt="" className={rootClasses.join(' ')}/>
            </div>
            <div className={cl.info}>
                <h1 className={cl.info_title}>
                    Finding Your
                    Perfect Shoes
                </h1>
                <span className={cl.info_text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
                </span>
                <MyButton
                    onMouseEnter={() => {
                        setOnHover(true)
                    }}
                    onMouseLeave={() => {
                        setOnHover(false)
                    }}
                >
                    <Link
                        to={PRODUCTS}
                        style={{textDecoration: 'none', color: 'white'}}
                    >
                        shop now
                    </Link>
                </MyButton>
            </div>
        </div>
    );
};

export default About;