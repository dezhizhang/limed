import React from 'react';
import{ render }  from '@testing-library/react';
import Button from './button';


test('test react button',() => {
    const weapper = render(<Button>button</Button>);
    const element = weapper.queryByText('button');
    expect(element).toBeTruthy();
});

