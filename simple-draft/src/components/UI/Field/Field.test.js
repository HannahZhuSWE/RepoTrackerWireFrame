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
    it('should render backdrop when props.label is true', () => {
        wrapper.setProps({label : true});
        expect(wrapper.find('label')).toHaveLength(1);

    });

    //should not return a label when props.label is false
    it('should render backdrop when props.label is false', () => {
        expect(wrapper.find('label')).toHaveLength(0);

    });
});

