import React from 'react';
import cl from './HoverLink.module.css'
import {Link} from "react-router-dom";

const HoverLink = ({children, path, ...props}) => {
    return (
        <Link to={path} {...props} style={{textDecoration: 'none', marginBottom: 15}}>
            <span className={cl.link}>
                {children}
            </span>
        </Link>
    );
};

export default HoverLink;