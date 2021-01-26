import * as actionType from '../actions';

//reducer for displaying data, keeps track of whether or not the user has searched for an article or repo yet
const initialState = {
    showResults : false
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionType.SEARCH :
            return {
                ...state,
                showResults : true
            }
    }
    
    return state;
};

export default reducer;