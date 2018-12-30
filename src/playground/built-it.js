
let Visibility = false;


const displayItem = () => {
    Visibility = !Visibility;
    render();
}
 const appRoot = document.getElementById("app");

const render = () => {

    const template = (
        <div>
            <h1>Visibility Toggle</h1> 
            <button onClick={displayItem}>{Visibility ? "Hide Details" : "Show Details"} </button>
        </div>
    );
    ReactDOM.render(template,appRoot);
}

render();

