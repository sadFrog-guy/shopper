import React from 'react';
import cl from "./Logo.module.css";
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <div className={cl.logo}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <span className={cl.logo_text}>
                    SHOPPER
                </span>
            </Link>
        </div>
    );
};

export default Logo;