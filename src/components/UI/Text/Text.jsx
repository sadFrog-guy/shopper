import React from 'react';
import cl from './Text.module.css'

const Text = ({children, props}) => {
    return (
        <span className={cl.text} {...props}>
            {children}
        </span>
    );
};

export default Text;