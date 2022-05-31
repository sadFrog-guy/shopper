import React from 'react';
import cl from './SplittedItemWrapper.module.css'

const SplittedItemWrapper = ({children}) => {
    return (
        <div className={cl.item_wrapper}>
            {children}
        </div>
    );
};

export default SplittedItemWrapper;