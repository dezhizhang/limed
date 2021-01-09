import React, { FC,useState,ChangeEvent } from 'react';
import Input,{ InputProps } from '../Input/input';

export interface AutocompleteProps extends Omit<InputProps,'onSelect'>{
    fetchSuggestions:(str:string) => string[];
    onSelect?:(item:string) => void;
}

export const Autocomplete:FC<AutocompleteProps> = (props) => {
    const { fetchSuggestions,onSelect,value,...restProps} = props;

    const [inputValue,setInputValue] = useState(value);

    return (
        <div className="viking-auto-complete">
            
        </div>
    )
}