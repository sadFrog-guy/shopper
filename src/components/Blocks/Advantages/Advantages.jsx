import React, {useEffect, useRef, useState} from 'react';
import {BsArrowCounterclockwise, BsFillQuestionCircleFill, BsTruck} from "react-icons/bs";
import cl from './Advantages.module.css'
import Text from "../../UI/Text/Text";

const Advantages = () => {
    const animateClasses = [cl.inner_wrapper]
    const blockRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const callback = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options)

        if(blockRef.current) {
            observer.observe(blockRef.current)
        }

        return () => {
            if(blockRef.current) {
                observer.unobserve(blockRef.current)
            }
        }
    }, [blockRef, options])

    if(isVisible) {
        animateClasses.push(cl.active)
    }

    return (
        <div className={cl.wrapper} ref={blockRef}>
            <div className={animateClasses.join(' ')}>
                <div className={cl.advantage}>
                    <div className={cl.icon_wrapper}>
                    <span className={cl.color}>
                        <BsTruck size={46}/>
                    </span>
                    </div>
                    <div className={cl.info}>
                        <h6 className={cl.info_title}>
                            FREE SHIPPING
                        </h6>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
                        </Text>
                    </div>
                </div>
                <div className={cl.advantage}>
                    <div className={cl.icon_wrapper}>
                    <span className={cl.color}>
                        <BsArrowCounterclockwise size={46}/>
                    </span>
                    </div>
                    <div className={cl.info}>
                        <h6 className={cl.info_title}>
                            FREE RETURNS
                        </h6>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
                        </Text>
                    </div>
                </div>
                <div className={cl.advantage}>
                    <div className={cl.icon_wrapper}>
                    <span className={cl.color}>
                        <BsFillQuestionCircleFill size={46}/>
                    </span>
                    </div>
                    <div className={cl.info}>
                        <h6 className={cl.info_title}>
                            CUSTOMER SUPPORT
                        </h6>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;