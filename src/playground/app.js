class IndecisionApp extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            options:[]
        }
        this.removeAll = this.removeAll.bind(this);
        this.pickOption = this.pickOption.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }
    removeAll () {
    //removinng individuals spaces
        this.setState(()=> ({options:[]}));
    };
    handleDeleteOption (optionToRemove) {
        this.setState((prevState)=> ({
            //filter array function help to filter the array value and check for the one to remove and still kepp the remaining values
            options:prevState.options.filter((option)=> optionToRemove !== option)
        }));
    }
    pickOption(){
        const randomNumber = Math.floor(Math.random() * this.state.options.length);

        //this is getting the indexing of the options array
        const option = this.state.options[randomNumber];
        alert(option);

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
    handleOnSubmit(option){

        //validatiing the users input
        if(!option){
            return "Enter a valid Input Item";
        }else if(this.state.options.indexOf(option) > -1){
            return "The input already exist";
        }
        this.setState((prevState)=>({options: prevState.options.concat([option]) }));
    };
    render() {
        const subTitle = "Put your life in hands of a Computer";
        return (
            <div>
                <Header subTitle={subTitle}/>
                <Action pickOption={this.pickOption} hasOption={this.state.options.length > 0}/>
                <Options handleDeleteOption={this.handleDeleteOption} options={this.state.options} removeAll={this.removeAll}/>
                <AddOption handleOnSubmit={this.handleOnSubmit}/>
            </div>
        );
    }
};
//setting default props for options array

//End
//Header Component
const Header = (props) => {
    return (
        <div>
        {/*//accessing the header attribute using this.props*/}
            <h1>{props.title}</h1>
            {props.subTitle && <h4>{props.subTitle}</h4>}
        </div>
    );
};
//creating a default props for title header
Header.defaultProps = {
    title:"Indecision App"
};
const Action = (props) => {
    return (
        <div>
            <button onClick={props.pickOption} disabled={!props.hasOption}>What should i do?</button>
        </div>
    );
};
const Options = (props) => {
    return (
        <div>
        <h3>Lists of Items</h3>
        <button onClick={props.removeAll}>Remove All</button>
        {props.options.length === 0 && <p>Please enter an item to get started!</p>}
            {props.options.map((num)=>{
                return <Option key={num} optionsText={num}
                    handleDeleteOption={props.handleDeleteOption}
                />
            })}
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionsText}
    { /* adding props.optionsText to be able to remove an option from a list*/}
            <button onClick={(e)=>{
                props.handleDeleteOption(props.optionsText);
            }}>remove</button>
        </div>
    );
};
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.state ={
            error: undefined
        }
    }
    handleOnSubmit(e){
        e.preventDefault();
        const UserData = e.target.elements.options.value.trim();
        if(UserData){
            e.target.elements.options.value = ""
        }
        const error =  this.props.handleOnSubmit(UserData);
          
          this.setState(() => ({error:error}))
       
    }
    render() {
        return (

            <div>
            {this.state.error && this.state.error}
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" name="options"/>
                    <button>Add to Option</button>
                </form>
            </div>
        );
    }
};



const AppRoot = document.getElementById("app");
ReactDOM.render(<IndecisionApp />,AppRoot);