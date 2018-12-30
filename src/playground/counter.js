let counter = 0;

let addOne = () => {
    counter++;
    renderCounter();
}

let minOne = () => {
    counter--;
    renderCounter();
}
let resetBtn = () => {
    counter = 0;
    renderCounter();
}





const renderCounter = () => {
    let templateTwo = (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minOne}>-1</button>
            <button onClick={resetBtn}>reset</button>
        </div>
    );
    
    ReactDOM.render(templateTwo, appRoot);
}

renderCounter();