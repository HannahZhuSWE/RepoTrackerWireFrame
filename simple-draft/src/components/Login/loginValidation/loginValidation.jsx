//given a username and password checks to see if it's valid
//current only checks to see that both username and password are filled out 
const loginValidation = (username, password) =>{
    if(username !== '' && password !== ''){
        return true;
    }
    else{
        return false;
    }
}

export default loginValidation;