import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import Logo from './Logo';

configure({adapter: new Adapter()});

describe('<Logo />', ()=>{
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<Logo />);
    });
    //renders one image
});

