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
    //取出所有的属性
    const { disabled,size,icon,prepand,append,...resetProps } = props;
    //根据属性计算不同的className 

    return (<>hello</>)
}

export default Input;


