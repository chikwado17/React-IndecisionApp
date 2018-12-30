
const App = {
    options: []
};
const getInput = (e) => {
    e.preventDefault();
        //getting users data
        const UserData = e.target.elements.options.value;
        if(UserData){
            //pusing users data to array
            App.options.push(UserData);
            e.target.elements.options.value = "";
        }

     render();

};
const doSomething = () => {
    //resetting the array options
      App.options = [];
     render();
};

//displaying users data randomly
const displayOptions = () => {

    const randomDisplay = Math.floor(Math.random() * App.options.length);

            const option = App.options[randomDisplay];
        alert(option);
    render();
}
const appRoot = document.getElementById("app");
const render = () =>{

    const template = (

        <div>
            <h1>REACT APP</h1>

            {/* Displaying something when an input is being recived */}
            <p>{App.options.length ? "I Recived an Input" : "No Input Recived" }</p>
            {/*disabling button when is empty*/}
            <button disabled={App.options.length == 0} onClick={displayOptions}>Do something</button>
            <ul>
                {App.options.map((lists)=>{
                    return <li key={lists}>{lists}</li>
                })}
            </ul>
            <form onSubmit={getInput}>
                <input type="text" name="options"/>
                <button>Push to Options</button>
                {" "}
                <button onClick={doSomething}>Wipe</button>
            </form>
            
        </div>
    );

    ReactDOM.render(template,appRoot);
};
render();