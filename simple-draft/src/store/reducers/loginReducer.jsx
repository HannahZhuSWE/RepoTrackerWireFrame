import * as actionType from '../actions';

//reducer for login purposes, keeps track of the id of the user and whether the user is authenticated or not 
const initialState = {
    id : "",
    authenticated : false
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionType.LOGIN :
            return {
                ...state,
                id: action.id,
                authenticated : true
            }
    }
    
    return state;
};

export default reducer;