import React from 'react';
import cl from './MyTextarea.module.css'
import MyLabel from "../MyLabel/MyLabel";

const MyTextarea = ({children, name, onChange, onBlur, ...props}) => {
    return (
        <MyLabel>
            {children}
            <textarea
                name={name}
                className={cl.textarea}
                onChange={onChange}
                onBlur={onBlur}
                {...props}
            />
        </MyLabel>
    )
}

export default MyTextarea;