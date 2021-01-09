import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './input';

const defaultButton = () => {
    return <Input>default button</Input>
}
storiesOf('Input Component',module)
    .add('默认 Button ',defaultButton)