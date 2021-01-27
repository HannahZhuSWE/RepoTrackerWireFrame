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
    
    //if props.show is false it should render no lists
    it('should render no lists when props.show is false', () => {
        expect(wrapper.find('ul')).toHaveLength(0);
    });

    //if props.show is true it should render two lists 
    it('should render two lists when props.show is true', () => {
        wrapper.setProps({show : true});
        expect(wrapper.find('ul')).toHaveLength(2);

    });

    //might be implemented later: if given a repo will only output one list, if given an article will output 2

});

