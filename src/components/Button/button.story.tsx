import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './button';

const defaultButton = () => {
    return <Button>default button</Button>
}
storiesOf('Button Component',module)
    .add('默认 Button ',defaultButton)