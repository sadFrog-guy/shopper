import React from 'react';
import {RiLoader3Fill} from "react-icons/ri";
import cl from './Loader.module.css'

const Loader = ({size}) => {
    return (
        <div className={cl.loaderWrapper}>
            <span className={cl.loader}>
            <RiLoader3Fill size={size}/>
            </span>
        </div>
    );
};

export default Loader;