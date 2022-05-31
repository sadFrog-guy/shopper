import React, {useState} from 'react';
import cl from './MyAccordion.module.css'
import Title from "../Title/Title";
import {BiDownArrow, BiUpArrow} from "react-icons/bi";

const MyAccordion = ({toggleValue, children}) => {
    const [active, setActive] = useState(true)
    const bodyClass = [cl.body]

    if(active) {
        bodyClass.push(cl.active)
    }

    const headerOnClick = () => {
        if(active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }

    return (
        <div className={cl.wrapper}>
            <div className={cl.header} onClick={headerOnClick}>
                <Title
                    style={{fontSize: 16, textTransform: "uppercase", margin: 0}}
                >
                    {toggleValue}
                </Title>
                {active
                    ? <BiDownArrow/>
                    : <BiUpArrow/>
                }
            </div>
            <div className={bodyClass.join(' ')}>
                <div className={cl.bodyInner}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MyAccordion;