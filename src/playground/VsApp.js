class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.showDetails = this.showDetails.bind(this);
        //creating a state object for visibility
        this.state = {
            visibility:false
        };
    }
    showDetails(){
        this.setState((prState)=> {
            return {
                visibility:!prState.visibility
            };
        });
    }
    render(){
        return(
            <div>
                <h1>VisibilityToggle App</h1>
                <button onClick={this.showDetails}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && <p>Put your life in hands of a computer</p>}
            </div>
        );    
    }
}

ReactDOM.render(<VisibilityToggle/>,document.getElementById("app"));