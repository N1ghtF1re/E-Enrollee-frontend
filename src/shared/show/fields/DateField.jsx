import React from "react";
import {useShowValue} from "../ShowContext";
import {formatDateToReadableFormat} from "../../dateUtils";
import TextField from "./TextField";

const DateField = ({source, value, label}) => {
    const contextValue = useShowValue(source);
    const displayedValue = formatDateToReadableFormat(value || contextValue);

    return <TextField value={displayedValue} label={label} source={source}/>
};

export default DateField;