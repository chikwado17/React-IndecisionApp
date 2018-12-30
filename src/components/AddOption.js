import React from 'react';


export default class AddOption extends React.Component{
    state = {
        error: undefined
    }
    handleOnSubmit = (e) =>{
        
        e.preventDefault();
        const UserData = e.target.elements.options.value.trim();
        if(UserData){
            e.target.elements.options.value = ""
        }
        const error =  this.props.handleOnSubmit(UserData);
       
          this.setState(() => ({error:error}))
       
    };
    render() {
        return (

            <div>
             {this.state.error && <p className="add-option-error"> {this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleOnSubmit}>
                    <input className="add-option__input" type="text" name="options"/>
                    <button className="button">Add to Option</button>
                </form>
            </div>
        );
    }
};
