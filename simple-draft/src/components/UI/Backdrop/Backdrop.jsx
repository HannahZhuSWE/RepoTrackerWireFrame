import React from 'react';
import classes from './Backdrop.module.css'


//backdrop for items that pop up and need the background to be covered
const backdrop = (props) =>{
    return(props.show? 
        <div 
            className={classes.Backdrop}
            onClick={props.clicked}>
        </div> 
        : null);
};

export default backdrop;