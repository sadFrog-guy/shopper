import React from 'react';
import cl from './SplitItems.module.css'

const SplitItems = ({children, ...props}) => {
    return (
        <div className={cl.split_items} {...props}>
            {children}
        </div>
    );
};

export default SplitItems;