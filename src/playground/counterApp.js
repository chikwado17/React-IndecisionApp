
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minOne = this.minOne.bind(this);this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount(){

        const StringCount = localStorage.getItem("count");
            const count = parseInt(StringCount, 10);

            if(isNaN){
                this.setState(() => ({count:count}));
            }
   
     };
     componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem("count", this.state.count);
        }
     }
    addOne() {
        //to increment the state of the count to one.
       this.setState((prev)=>{
            return {
               count: prev.count + 1 
            }
       });
    }
    minOne(){
       this.setState((prev)=>{
            return{
                count:prev.count - 1
            }
       });
    }
    reset(){
     this.setState(() => ({count: 0}));
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

const AppRoot = document.getElementById("app");
ReactDOM.render(<Counter/>,AppRoot);