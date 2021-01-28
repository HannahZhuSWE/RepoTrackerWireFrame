import React from 'react';
import classes from './LoginButton.module.css';
import Aux from '../../../hoc/Auxilary/Auxilary';

//log in button in the tool bar
//when clicked will pull up login page
//disabled when user is logged in
const loginButton = (props) =>{
    return( 
            <button 
                onClick={props.clicked} 
                className={classes.LoginButton}
                disabled={props.disabled}>
                    Log In
            </button>
            );
}

export default loginButton;