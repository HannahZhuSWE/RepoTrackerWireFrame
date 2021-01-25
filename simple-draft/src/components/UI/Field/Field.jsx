import React from 'react';
import Aux from '../../../hoc/Auxilary/Auxilary';

const field = (props) =>{
    const capitalized = props.name.charAt(0).toUpperCase()+props.name.slice(1);
    return (
        <Aux>
            {props.label? <label for={props.name}>{capitalized}</label> : null}
            <input 
                id={props.name}
                name={props.name} 
                placeholder={capitalized} 
                type={props.type} 
                onChange={props.change} 
                value= {props.value}
            />
        </Aux>
        
    );
}

export default field;