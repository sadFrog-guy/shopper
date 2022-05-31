import React from 'react';
import cl from './NavList.module.css'

const NavList = ({children, ...props}) => {
    return (
        <div {...props} className={cl.navlist}>
            {children}
        </div>
    );
};

export default NavList;