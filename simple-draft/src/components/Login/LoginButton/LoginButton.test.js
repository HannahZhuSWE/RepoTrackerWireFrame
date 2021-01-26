import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import LoginButton from './LoginButton';

configure({adapter: new Adapter()});

describe('<LoginButton />', ()=>{
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<LoginButton />);
    });
    //is disabled when props.disabled is true
});

