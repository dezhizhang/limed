import React from 'react';
import{ render,fireEvent }  from '@testing-library/react';
import Button,{ ButtonProps,ButtonSize,ButtonType } from './button';
const defaultProps = {
    onClick:jest.fn()
}

const testProps:ButtonProps = {
    btnType:ButtonType.Primary,
    size:ButtonSize.Large,
    className:'limed'
}

describe('test Button component',() => {
    it('should render the corrent default button',() => {
        const weapper = render(<Button {...defaultProps}>hello</Button>);
        const element = weapper.getByText('hello');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn btn-default');
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    it('should render to corrent component based on different props',() => {
        const weapper = render(<Button {...testProps}>hello</Button>);
        const element = weapper.getByText('hello');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('btn-primary btn-lg limed')
    })
    it('should render a link when btnType equals link and href is provided',() => {

    })

})

