import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';
import loginValidation from './loginValidation';


configure({adapter: new Adapter()});

describe('loginValidation', ()=>{
    //if password is empty return false
    it('should return false if password is empty', () => {
        expect(loginValidation('some-id', '')).not.toBeTruthy();
    });
    //if username is empty return false
    it('should return false if password is empty', () => {
        expect(loginValidation('', 'some-password')).not.toBeTruthy();
    });
    //if both username and password are empty return false
    it('should return false if both username and password are empty', () => {
        expect(loginValidation('', '')).not.toBeTruthy();
    });
    //if neither username or password are empty return true
    it('should return true if neither username or password are empty', () => {
        expect(loginValidation('some-id', 'some-password')).toBeTruthy();
    });
});

