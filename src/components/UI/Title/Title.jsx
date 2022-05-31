import React from 'react';
import cl from './Title.module.css'

const Title = ({children, ...props}) => {
    return (
        <h1 className={cl.title} {...props}>
            {children}
        </h1>
    );
};

export default Title;