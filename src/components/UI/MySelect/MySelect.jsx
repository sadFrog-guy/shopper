import React, {useContext, useState} from 'react';
import cl from './MySelect.module.css'
import {IoMdArrowDropdownCircle, IoMdArrowDropupCircle} from "react-icons/io";
import {Context} from "../../../index";
import {toJS} from "mobx";

const MySelect = ({children, options, mr, ...props}) => {
    const {sort} = useContext(Context)
    const selectedSort = toJS(sort.selectedSort)
    const [isActive, setActive] = useState(false)
    const [isSelected, setSelected] = useState(false)
    const optionsClass = [cl.select_options]
    const optionClass = [cl.option]

    if(isActive) {
        optionsClass.push(cl.active)
    }
    if(isSelected) {
        optionClass.push(cl.selected)
    }

    const optionOnClick = (option) => {
        setSelected(true)
        setActive(false)
        sort.setSelectedSort(option)
    }

    return (
        <div className={cl.select} style={{marginRight: mr}}>
            <button
                className={cl.select_button}
                onClick={() => {
                    if(isActive) {
                        setActive(false)
                    } else {
                        setActive(true)
                    }
                }}
                {...props}
            >
                <span className={cl.select_inner}>{children}</span>
                {isActive
                    ? <IoMdArrowDropupCircle/>
                    : <IoMdArrowDropdownCircle/>
                }
            </button>
            <div className={optionsClass.join(' ')}>
                {options.map((option) => {
                    if(selectedSort === option.key) {
                        return (
                            <span
                                className={optionClass.join(' ')}
                                key={option.key}
                                onClick={() => optionOnClick(option.key)}
                            >
                                {option.name}
                            </span>
                        )
                    } else {
                        return (
                            <span
                                className={cl.option}
                                key={option.key}
                                onClick={() => optionOnClick(option.key)}
                            >
                                {option.name}
                            </span>
                        )
                    }
                })}
            </div>
        </div>
    );
};

export default MySelect;