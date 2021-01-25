import React from 'react';
import Aux from '../../../hoc/Auxilary/Auxilary';

const dropdown = (props) =>{
    //const capitalized = props.label.charAt(0).toUpperCase()+props.label.slice(1);
    return (
        <Aux>
            {props.label? <label for={props.name}>{props.label.charAt(0).toUpperCase()+props.label.slice(1)}</label>: null}
            <select id={props.name} onChange={(event) => props.changed(event)}>
                {props.options.map((opt, index) => {return (
                    <option value={props.values[index]}>{opt}</option>
                );})}
            </select>
        </Aux>
    );
}

export default dropdown;