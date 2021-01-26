import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import Toolbar from './Toolbar';

configure({adapter: new Adapter()});

describe('<Toolbar />', ()=>{
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<Toolbar />);
    });
    //should have a logo component
    //should have a log in button
});

