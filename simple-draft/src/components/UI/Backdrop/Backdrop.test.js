import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import Backdrop from './Backdrop';

configure({adapter: new Adapter()});

describe('<Backdrop />', ()=>{
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<Backdrop />);
    });
    //should appear when props.show is true
    //should not appear when props.show is false (returns null)
});

