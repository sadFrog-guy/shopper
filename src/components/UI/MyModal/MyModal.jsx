import React from 'react';
import cl from './MyModal.module.css'

const MyModal = ({children, setActive}) => {
    return (
        <div className={cl.wrapper}>
            <div
                className={cl.bg}
                onClick={() => {
                    setActive(false)
                }}
            />
            <div className={cl.modal}>
                <div className={cl.modal_inner}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MyModal;