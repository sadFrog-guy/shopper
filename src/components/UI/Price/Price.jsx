import React from 'react';
import cl from './Price.module.css'

const Price = ({children, fs=32, mt=0}) => {
    return (
        <span className={cl.price} style={{fontSize: fs, marginTop: mt}}>
            {children}
        </span>
    );
};

export default Price;