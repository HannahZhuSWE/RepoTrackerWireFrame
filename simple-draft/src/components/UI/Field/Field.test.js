import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import Field from './Field';

configure({adapter: new Adapter()});

describe('<Field />', ()=>{
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<Field name=""/>);
    });

    //should return a label when props.label is true
    it('should render label when props.label is true', () => {
        wrapper.setProps({label : true});
        expect(wrapper.find('label')).toHaveLength(1);

    });

    //should not return a label when props.label is false
    it('should not render label when props.label is false', () => {
        expect(wrapper.find('label')).toHaveLength(0);

    });

    //calls props.change when something in text field changes
    it('should call props.change when the something in text field changes', () =>{
        const mockCallback = jest.fn();
        wrapper.setProps({change: mockCallback});
        const input = wrapper.find('input');
        input.prop('onChange')();
        expect(mockCallback.mock.calls.length).toEqual(1);
    })

    //value in text field should equal props.value
    it('should have value in text field equal to props.value', () =>{
        wrapper.setProps({value:"value"});
        const input = wrapper.find('input');
        expect(input.prop("value")).toEqual("value");
    })
});

