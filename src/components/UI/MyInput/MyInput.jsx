import React from 'react';
import cl from './MyInput.module.css'
import MyLabel from "../MyLabel/MyLabel";

const MyInput = ({children, name, onChange, onBlur, errors, type="text", ...props}) => {
    return (
        <MyLabel>
            {children}
            <input
                type={type}
                onChange={onChange}
                onBlur={onBlur}
                className={cl.input}
                name={name}
                {...props}
            />
        </MyLabel>
    )
}

export default MyInput;