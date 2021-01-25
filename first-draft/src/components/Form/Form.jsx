import React from 'react';
import Field from './Field/Field';
import Aux from '../../hoc/Auxilary/Auxilary';
import Dropdown from './Dropdown/Dropdown';
import classes from './Form.module.css'

const form = (props) =>{
    const repos = ["Azure", "VSCode", "Windows"];
    const services = ["service 1", "service 2", "service 3"];
    const subservices = ["subservice 1", "subservice 2"];
    return (
        <div className={classes.Form}>
            <div>
                <Dropdown name="repo" options={repos}/>
                <Dropdown name="services" options={services}/>
                <Dropdown name="subservice" options={subservices}/>
            </div>
            <div>
                <Field name="github url" type="string"/>
                <button>Search</button>
            </div>
        </div>
        
    );
}

export default form;