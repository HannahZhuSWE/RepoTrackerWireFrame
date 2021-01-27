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
    it('should render backdrop when props.show is true', () => {
        wrapper.setProps({show : true});
        expect(wrapper.find('div')).toHaveLength(1);

    });

    //should not appear when props.show is false (returns null)
    it('should not render backdrop when props.show is false', () => {
        expect(wrapper.find('div')).toHaveLength(0);
    });
});

