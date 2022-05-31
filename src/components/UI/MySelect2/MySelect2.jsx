import React from 'react';
import cl from './MySelect2.module.css'
import MyLabel from "../MyLabel/MyLabel";

const MySelect2 = ({label, name, children, defaultValue='Select...', onChange, onBlur, ...props}) => {
    return (
        <MyLabel>
            {label}
            <select
                name={name}
                className={cl.select}
                onChange={onChange}
                onBlur={onBlur}
                {...props}
            >
                <option disabled value={defaultValue}>
                    {defaultValue}
                </option>
                {children}
            </select>
        </MyLabel>
    );
};

export default MySelect2;