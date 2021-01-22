const loginValidation = (username, password) =>{
    if(username !== '' && password !== ''){
        return false;
    }
    else{
        return true;
    }
}

export default loginValidation;