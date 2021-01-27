import reducer from './loginReducer';
import * as actionType from '../actions';

describe('loginReducer reducer', () =>{

    //the inital state should be id : "", authenticated : false
    it('should return the initial state', () =>{
        expect(reducer(undefined, {})).toEqual({
            id : "",
            authenticated : false
        });
    })

    //when actionType.LOGIN is called the resulting state should be id : action.id , authenticated : true
    it('should set authenticated as true and id to the id passed in when actionType.LOGIN is called', () => {
        expect(reducer({
            id : "",
            authenticated : false
        },{
            type: actionType.LOGIN,
            id : "some-id"
        })).toEqual({
            id : "some-id",
            authenticated : true
        })
    })
    
});