import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import Search from './Search';

configure({adapter: new Adapter()});

describe('<Search />', ()=>{
    
    //calls props.clicked when search button is clicked
    it('should call props.clicked when the search button is pressed', () =>{
        const mockCallback = jest.fn();
        let wrapper = shallow(<Search clicked={mockCallback}/>);
        const button = wrapper.find('button');
        button.prop('onClick')();
        expect(mockCallback.mock.calls.length).toEqual(1);
    })

});

