import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import Search from './Search';

configure({adapter: new Adapter()});

describe('<Search />', ()=>{
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<Search />);
    });
    //should have a field component
    //should have a search button
});

