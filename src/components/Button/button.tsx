import React from 'react'
import classNames from 'classnames';

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonProps {
    href?:string;
    className?:string;
    disabled?:boolean;
    size?:ButtonSize;
    btnType?:ButtonType;
    children:React.ReactNode
}

const Button:React.FC<BaseButtonProps> = (props) => {
    const {href,className,disabled,size,btnType,children } = props;
    const classes = classNames('btn',{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size,
        'disabled':(btnType === ButtonType.Link) && disabled
    });
    if(btnType === ButtonType.Link && href) {
        return (
            <a
                href={href}
                className={classes}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                disabled={disabled}
                className={classes}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    disabled:false,
    btnType:ButtonType.Default
}

export default Button;



