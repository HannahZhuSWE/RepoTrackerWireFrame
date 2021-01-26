import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import loginValidation from './loginValidation';


configure({adapter: new Adapter()});

describe('loginValidation', ()=>{
    //if password is empty return false
    //if username is empty return false
    //if neither are empty return true
});

