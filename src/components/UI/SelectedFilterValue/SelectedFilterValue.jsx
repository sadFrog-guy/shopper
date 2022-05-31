import React, {useContext} from 'react';
import cl from './SelectedFilterValue.module.css'
import {ImCross} from "react-icons/im";

const SelectedFilterValue = ({children, onClick}) => {

    return (
        <div className={cl.wrapper}>
            <div className={cl.deleteFilterButton}
                 onClick={onClick}
            >
                <span className={cl.cross}>
                    <ImCross/>
                </span>
            </div>
            <p className={cl.filterValue}
                onClick={onClick}
            >
                {children}
            </p>
        </div>
    );
};

export default SelectedFilterValue;