/** @jsxImportSource @emotion/react */
import React from 'react';
import cl from './MyRadio.module.css'
import {css, jsx} from '@emotion/react'
import MyLabel from "../MyLabel/MyLabel";

const MyRadio = ({label, value, color, onChange, name, ...props}) => {

    return (
        <MyLabel className={cl.label} {...props}>
            <input
                type="radio"
                className={cl.check}
                name={name}
                value={value}
                onChange={onChange}
                css={css`
                    border: 1px solid ${color};
                    &:checked {
                        border: 3px solid ${color};
                    }
                `}
            />
            {label}
        </MyLabel>
    );
};

export default MyRadio;