import React from 'react';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import AddOption from './AddOption';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component{
    
    state = {
        options:[],
        selectedOption:undefined
    }
    //method to close the modal
   handleClose = () => {
        this.setState(() => ({ selectedOption: undefined  }));
   };
    removeAll = () => {
    //removinng individuals spaces
        this.setState(()=> ({options:[]}));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=> ({
            //filter array function help to filter the array value and check for the one to remove and still kepp the remaining values
            options:prevState.options.filter((option)=> optionToRemove !== option)
        }));
    }
    pickOption = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);

        //this is getting the indexing of the options array
        const option = this.state.options[randomNumber];
      
        //Displaying the modal by addding selectedOption to option
        this.setState(() => ({
            selectedOption:option
        }));

    };
    
    handleOnSubmit = (option) => {

        //validatiing the users input
        if(!option){
            return "Enter a valid Input Item";
        }else if(this.state.options.indexOf(option) > -1){
            return "The input already exist";
        }
        this.setState((prevState)=>({options: prevState.options.concat([option]) }));
    };
    componentDidMount(){

        try{
         const json = localStorage.getItem('options');
         const options = JSON.parse(json);
 
             if(options){
                 this.setState(() => ({options:options}));
             }
        }catch(e){
 
        }
     }
     componentDidUpdate(prevProps,prevState){
         if(prevState.options.length !== this.state.options.length){
             const json = JSON.stringify(this.state.options);
                 localStorage.setItem('options',json);
         }
     }
    render() {
        const subTitle = "Put your life in hands of a Computer";
        return (
            <div>
            <Header subTitle={subTitle}/>
                <div className="container">
                    <Action pickOption={this.pickOption} hasOption={this.state.options.length > 0}/>
                        <div className="widget">
                            <Options handleDeleteOption={this.handleDeleteOption} options={this.state.options} removeAll={this.removeAll}/>
                            <AddOption handleOnSubmit={this.handleOnSubmit}/>
                        </div>
                </div>
                <OptionModal handleClose={this.handleClose}  selectedOption={this.state.selectedOption}/>
            </div>
        );
    }
};