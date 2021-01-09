import React, { FC,useState,ChangeEvent } from 'react';
import Input,{ InputProps } from '../Input/input';

export interface AutocompleteProps extends Omit<InputProps,'onSelect'>{
    fetchSuggestions:(str:string) => string[];
    onSelect?:(item:string) => void;
}

export const Autocomplete:FC<AutocompleteProps> = (props) => {
    const { fetchSuggestions,onSelect,value,...restProps} = props;

    const [inputValue,setInputValue] = useState(value);

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setInputValue(value);
    }

    return (
        <div className="viking-auto-complete">
            <Input 
                value={value}
                onChange={handleChange}
                {...restProps}
            />
        </div>
    )
}