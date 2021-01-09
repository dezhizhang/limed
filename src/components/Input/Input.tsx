import React, {FC, InputHTMLAttributes,ReactElement } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
type InputSize = 'lg' | 'sm'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>,'size'>{
    disabled?:boolean;
    size?:InputSize;
    icon?:IconProp;
    prepand?:string | ReactElement;
    append?:string | ReactElement;
}

export const Input:FC<InputProps> = (props) => {
    return (<>hello</>)
}

export default Input;


