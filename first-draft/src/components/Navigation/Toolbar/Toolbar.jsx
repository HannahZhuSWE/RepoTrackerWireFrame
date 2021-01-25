import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import LoginButton from '../../Login/LoginButton/LoginButton';

const toolbar = (props) =>{
    return (
        <header className={classes.Toolbar}>
            <Logo height="80%"/>
            <div>Content Status Tracker</div>
            <LoginButton clicked={props.clicked}/>
        </header>
    );
}

export default toolbar;