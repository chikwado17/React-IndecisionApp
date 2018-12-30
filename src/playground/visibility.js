
let Visibility = false;


const showDetails = () => {
    Visibility = !Visibility;

    render();
}

const AppRoot = document.getElementById("app");
const render = () => {

    const template = (
        <div>
            <h1>Visibility App</h1>
            <button onClick={showDetails}>{Visibility ? "Hide Details" : "Show Details"}</button>

            {(Visibility && Visibility) && <p>Wow, am getting to understand reactjs</p>}
        </div> 
    );

    ReactDOM.render(template,AppRoot);

}

render();