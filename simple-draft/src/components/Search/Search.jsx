import React from 'react';
import classes from './Search.module.css';
import Field from '../UI/Field/Field';
const search = (props) =>{
    return (
            <div className={classes.Search}>
                <div>I want to find info on... &nbsp;
                    <Field 
                        name="Enter Repo/Article URL"
                        change={props.change} 
                        value={props.value}
                        type="string"
                        />
                    <button onClick={props.clicked}>Search</button>
                </div>
            </div>
    );
}

export default search;