import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Button from './button';

const defaultButton = () => {
    return <Button >button</Button>
}
storiesOf('Button 组件',module)
    .addDecorator(withInfo)
    .addParameters({
        info:{
            text:'button默认',
            inline:true,
        }
    })
    .add('默认 Button ',defaultButton)