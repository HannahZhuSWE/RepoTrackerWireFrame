import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import {LoginPage} from './LoginPage';


configure({adapter: new Adapter()});

describe('<LoginPage />', ()=>{
    let wrapper;
    beforeEach(() =>{
        wrapper = shallow(<LoginPage />);
    });
    //at the very start the username and password should be '' and error should be false
    
    //if there is an error it should display an error
    //if props.show is true it should show the div with everthing in it
    //if props.show is false it shouldn't show the div (but with the css code it just translate the page out of view so might not be a valid test)
    //if login button is clicked it should either set error to true or all states to '' or false
});

