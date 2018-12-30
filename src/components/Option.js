import React from 'react';
 const Option = (props) => (
    <div className="option">
    <p className="option__text">{props.count}. {props.optionsText}</p>
        
{ /* adding props.optionsText to be able to remove an option from a list*/}
        <button className="button button--link" onClick={(e)=>{
            props.handleDeleteOption(props.optionsText);
        }}>remove</button>
    </div>
);
export default Option;