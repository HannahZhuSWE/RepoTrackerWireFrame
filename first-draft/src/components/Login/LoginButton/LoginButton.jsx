import React from 'react';
import classes from './LoginButton.module.css';

const loginButton = (props) =>{
    return(<button onClick={props.clicked} className={classes.LoginButton}>Log In</button>);
}

export default loginButton;