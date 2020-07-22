import React from "react";
import { joinProps } from "./utils/joinCssProps";
import type {size} from './size';
import type {color} from './color';

interface ButtonProps {
    size?: size;
    color?:color;
    type?: 'a' | 'button'
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { type,color,size } = props;
    const css = joinProps(type,color,size);
    switch (type){
        case 'button':
            return (
                <button className={`column ${css}`}>{props.children}</button>
            );
            default:
                return(
                    <a className={`column ${css}`}>{props.children}</a>
                );
    }
};