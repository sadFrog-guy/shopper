import React, {useContext, useEffect, useMemo, useState} from 'react';
import cl from './DraggableProgress.module.css'
import Text from "../Text/Text";
import Title from "../Title/Title";
import {Context} from "../../../index";
import {toJS} from "mobx";

const DraggableProgress = ({int}) => {
    const {sort, product} = useContext(Context)
    const [value, setValue] = useState(0)

    const inputHandler = e => {
        setValue(e.target.value)
    }
    const blurHandler = e => {
        if(e.target.value > 9999) {
            setValue(9999)
        }
        if(e.target.value < 0) {
            setValue(0)
        }
    }

    useEffect(() => {
        product.setSelectedPrice(value)
    }, [value])

    return (
        <div className={cl.wrapper}>
            <Title style={{fontSize: 16, textTransform: "uppercase"}}>Price</Title>
            <input
                type="range"
                className={cl.range}
                min={0}
                max={int}
                value={value}
                onChange={inputHandler}
                step={100}
            />
            <div className={cl.rangeInfo}>
                <Text>
                    Under
                </Text>
                <input
                    type="text"
                    value={value}
                    onChange={inputHandler}
                    onBlur={blurHandler}
                    max={int}
                    className={cl.input}
                />
                <Text>$</Text>
            </div>
        </div>
    );
};

export default DraggableProgress;