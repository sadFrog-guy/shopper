import React from 'react';
import cl from './Column.module.css'

const Column = ({children}) => {
    return (
        <div className={cl.column}>
            {children}
        </div>
    );
};

export default Column;