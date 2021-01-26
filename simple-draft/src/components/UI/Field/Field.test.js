import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import Field from './Field';

configure({adapter: new Adapter()});

describe('<Field />', ()=>{
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<Field />);
    });
    //should return a field
    //should return a label when label is true
    //should not return a label when label is false
});

