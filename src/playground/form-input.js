
const myObject = {

    title: "Indecision App",
    subTitle: "This is my first React Project",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    //Getting users input Data.
    const option = e.target.elements.options.value;
    if(option){
//Pushing the users data to the options array using push method
        myObject.options.push(option);
         //removing the users data after getting it.
        e.target.elements.options.value = "";
        render();
    }

};

const onRemoveAll = () => {
    myObject.options = [];
    render();
};

const makeDecision = () => { 

    //first is to generate a random number;

    const randomNumber = Math.floor(Math.random() * myObject.options.length);

    //getting the hole index of the array lists
    const option = myObject.options[randomNumber];
    alert(option);

}

var appRoot = document.getElementById("app");
const render = () => {
    const template = (
        <div>
            <h1>{myObject.title}</h1>
            {myObject.subTitle && <p>mySubTitle: {myObject.subTitle}</p>}
            <p>{myObject.options.length > 0 ? "Here are Options" : "No Options"}</p>

            {/* Disabling button when there is no input */}
            <button disabled={myObject.options.length === 0} onClick={makeDecision}>What should i do?</button>
            <button onClick={onRemoveAll}>Wipe</button>

 
           <ul>
               {myObject.options.map((items) => <li key={items}>UsersData: {items}</li>)}
           </ul>


            <form onSubmit={onFormSubmit}>
                <input type="text" name="options"/>
                <button>Add to Options</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
}

render();



