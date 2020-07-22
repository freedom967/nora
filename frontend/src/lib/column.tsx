import React from "react";
import { joinProps } from "./utils/joinCssProps";

interface ColumnsProps {
    force?: "is-desktop" | "is-mobile";
    gap?: ColunmsGap;
    multiline?:"is-multiline";
    center?:"is-centered";
}

type ColunmsGap = "is-gapless" |
    "is-1" |
    "is-2" |
    "is-3" |
    "is-4" |
    "is-5" |
    "is-6" |
    "is-7" |
    "is-8";

type ColumnSemanticSize = "is-three-quarters" |
    "is-two-thirds" |
    "is-half" |
    "is-one-third" |
    "is-one-quarter" |
    "is-full";

type ColumnSizeByDivition = "is-1" |
    "is-2" |
    "is-3" |
    "is-4" |
    "is-5" |
    "is-6" |
    "is-7" |
    "is-8" |
    "is-9" |
    "is-10" |
    "is-11" |
    "is-12";

interface ColumnProps {
    size?: ColumnSizeByDivition | ColumnSemanticSize;
    isNarrow?:"is-narrow";
}

export const Columns:React.FC<ColumnsProps> = (props)=>{
    const {force,gap,multiline,center} = props;
    const css = joinProps(force,gap,multiline,center);
    return(
    <div className={`columns ${css}`}>{props.children}</div>
    )
}
export const Column:React.FC<ColumnProps> = (props)=>{
    const {size,isNarrow} = props;
    const css = joinProps(size,isNarrow);
    return(
        <div className={`column ${css}`}>{props.children}</div>
    )
}