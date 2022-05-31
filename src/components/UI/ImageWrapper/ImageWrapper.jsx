import React from 'react';
import cl from './ImageWrapper.module.css'

const ImageWrapper = ({children}) => {
    return (
        <div className={cl.imageBlock}>
            <div className={cl.imageWrap}>
                {children}
            </div>
        </div>
    );
};

export default ImageWrapper;