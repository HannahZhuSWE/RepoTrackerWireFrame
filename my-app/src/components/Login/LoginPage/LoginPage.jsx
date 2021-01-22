import React, { useState } from 'react';
import loginButton from '../LoginButton/LoginButton';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilary/Auxilary';
import classes from './LoginPage.module.css';
import Field from '../../Form/Field/Field';
import loginValidation from '../loginValidation/loginValidation';


const LoginPage = (props) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    let pageClasses = [classes.LoginPage, classes.Close];
    if(props.show){
        pageClasses = [classes.LoginPage, classes.Open];
    }

    const loginHandler = () =>{
        const result = loginValidation(username,password)
        setError(result);
        if(!result){
            closeLoginHandler();
        }
    }

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

export default LoginPage;