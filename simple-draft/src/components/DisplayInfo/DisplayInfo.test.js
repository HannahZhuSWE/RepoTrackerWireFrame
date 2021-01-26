import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import DisplayInfo from './DisplayInfo';
import Aux from '../../hoc/Auxilary/Auxilary';

configure({adapter: new Adapter()});

describe('<DisplayInfo />', ()=>{
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<DisplayInfo />);
    });
    //if props.show is false it should only render one paragraph
    //if props.show is true it should render the Aux component with two lists inside
    //might be implemented later: if given a repo will only output one list, if given an article will output 2

});

