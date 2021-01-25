import React from 'react';
import logoIcon from '../../assets/images/searchIcon.jpg';
import classes from './Logo.module.css';

const logo = (props) =>{
    return (
        <div className={classes.Logo} style={{height:props.height}}>
            <img src={logoIcon} alt = 'SearchIcon' />
        </div>
    );
};

export default logo