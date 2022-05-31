import React, {useContext, useEffect, useState} from 'react';
import cl from './Counter.module.css'
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";

const Counter = observer(({setter}) => {
    const [value, setValue] = useState(1)

    useEffect(() => {
        setter(value)
    }, [value])

    const inputOnChange = e => {
        setValue(e.target.value)
    }

    const increment = () => {
        setValue(prevState => {
            if(prevState >= 9) {
                return prevState
            } else {
                return prevState + 1
            }
        })
    }

    const decrement = () => {
        setValue(prevState => {
            if(prevState <= 1) {
                return prevState
            } else {
                return prevState - 1
            }
        })
    }

    return (
        <div className={cl.counter}>
            <div
                className={cl.counterButton}
                onClick={decrement}
            >
                -
            </div>
            <input
                type="number"
                className={cl.input}
                value={value}
                onChange={inputOnChange}
                disabled
            />
            <div
                className={cl.counterButton}
                onClick={increment}
            >
                +
            </div>
        </div>
    );
});

export default Counter;