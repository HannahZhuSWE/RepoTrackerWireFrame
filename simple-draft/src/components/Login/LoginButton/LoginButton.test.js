import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, mount, shallow} from 'enzyme';
import LoginButton from './LoginButton';

configure({adapter: new Adapter()});

describe('<LoginButton />', ()=>{

    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<LoginButton />);
    });

    //is enabled when props.disabled is false
    it('should be enabled when props.disabled is false', () =>{
        expect(wrapper.closest('button').prop('disabled')).not.toBeTruthy();
    })

    //is disabled when props.disabled is true
    it('should be disabled when props.disabled is true', () =>{
        wrapper.setProps({disabled : true});
        expect(wrapper.closest('button').prop('disabled')).toBeTruthy();
    })

    //calls props.clicked when button is clicked
    it('should call props.clicked when the button is pressed', () =>{
        const mockCallback = jest.fn();
        wrapper = shallow(<LoginButton clicked={mockCallback}/>);
        const button = wrapper.find('button');
        button.prop('onClick')();
        expect(mockCallback.mock.calls.length).toEqual(1);
    })

    
});

