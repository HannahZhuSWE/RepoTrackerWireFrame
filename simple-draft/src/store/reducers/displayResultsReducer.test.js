import reducer from './displayResultsReducer';
import * as actionType from '../actions';

describe('displayResults reducer', () =>{
    //the inital state should be showResults : false
    it('should return the initial state', () =>{
        expect(reducer(undefined, {})).toEqual({
            showResults : false
        });
    })

    //when actionType.SEARCH is called and showResults is false it should change to true
    it('should change showResults to true upon first time search is clicked', () => {
        expect(reducer({
            showResults : false
        },{
            type: actionType.SEARCH
        })).toEqual({
            showResults : true
        })
    })
    
    //when actionType.SEARCH is called and showResults is true it should stay true
    it('should keep showResults as true when search is executed again', () => {
        expect(reducer({
            showResults : true
        },{
            type: actionType.SEARCH
        })).toEqual({
            showResults : true
        })
    })
});