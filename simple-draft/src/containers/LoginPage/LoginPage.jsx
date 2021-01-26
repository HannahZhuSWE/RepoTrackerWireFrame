import React, { useState } from 'react';
import {connect} from 'react-redux'; 

import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Aux from '../../hoc/Auxilary/Auxilary';
import classes from './LoginPage.module.css';
import Field from '../../components/UI/Field/Field';
import loginValidation from '../../components/Login/loginValidation/loginValidation';
import * as actionType from '../../store/actions';

//displays a login page when the user clicks the log in button and removes it when the user logins in or clicks elsewhere
//keeps track of the username and password entered in the text fields and if there's an error with any of the fields
export const LoginPage = (props) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    //logic for whether or not login page appears
    let pageClasses = [classes.LoginPage, classes.Close];
    if(props.show){
        pageClasses = [classes.LoginPage, classes.Open];
    }

    //triggered when user sumbits their login info
    //will update state of id and authentication in the store
    const loginHandler = () =>{
        const result = loginValidation(username,password);
        setError(!result);
        if(result){
            props.onLogin(username);
            closeLoginHandler();
        }
    }

    //clears username, password and error before hiding login page
    const closeLoginHandler = () =>{
        setPassword('');
        setUsername('');
        setError(false);
        props.hide();
    }

    return(
        <Aux>
            <Backdrop show={props.show} clicked={closeLoginHandler} />
            <div className={pageClasses.join(' ')}>
                <div>
                    <h1>Log In</h1>
                </div>
                <div>
                    <Field name="username" type="string" value={username} change={event => {setUsername(event.target.value)}}/>
                </div>
                <div>
                    <Field name="password" type="string" value={password} change={event => {setPassword(event.target.value)}}/>
                </div>
                <div>
                    <button onClick={loginHandler}>Log In</button>
                </div>
                {error? <div className={classes.Error} >Incorrect username or password</div> : null}
            </div>
        </Aux>
        
    );
}

//mapping of actions to props
const mapDispatchToProps = dispatch =>{
    return {
        onLogin: (username) => dispatch({type: actionType.LOGIN, id:username })
    };
};

export default connect(null, mapDispatchToProps)(LoginPage);