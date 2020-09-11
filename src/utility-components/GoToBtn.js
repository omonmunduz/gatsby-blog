import React from 'react';
import {css} from '@emotion/core';



const GoToBtn = ({children}) => {
    return(
        <button
        css = {css`
            padding:0.25rem 1rem;
            font-size: 1.333em;
            background-color: rebeccapurple;
        `}>{children}</button>
    )
};
export default GoToBtn;