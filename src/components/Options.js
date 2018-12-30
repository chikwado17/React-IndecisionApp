import React from 'react';
import Option from '../components/Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button className="button button--link" onClick={props.removeAll}>Remove All</button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please enter an item to get started!</p>}
            {props.options.map((num, index)=>{
                return <Option 
                count={index + 1}
                key={num} optionsText={num}
                    handleDeleteOption={props.handleDeleteOption}
                />
            })}
    </div>
);

export default Options;