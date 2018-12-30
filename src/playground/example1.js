
const myObject = {

    title: "Indecision App",
    subTitle: "This is my first React Project",
    options: ["one","two"]
}
const template = (
    <div>
        <h1>{myObject.title}</h1>
       
        <p>{myObject.options.length > 0 ? myObject.options[1] : "Unknown"}</p>
       {(myObject.subTitle && myObject.subTitle) && <p>mySubTitle: {myObject.subTitle}</p>}
        <ul>
            <li>Item one</li>
            <li>Item two</li>
        
        </ul>
    </div>
);

var appRoot = document.getElementById("app");
ReactDOM.render(template,appRoot);
