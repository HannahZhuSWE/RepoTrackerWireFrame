import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import {Layout} from './Layout';

configure({adapter: new Adapter()});

describe('<Layout />', ()=>{
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<Layout />);
    });
    //at the very start the search value should be '' and the login page should be set to false
    //should have a Toolbar, LoginPage, Search, and DisplayInfo component 
    
});

