import React from 'react';


//setting default props for options array

//End
//Header Component
const Header = (props) => (
    <div className="header">
    {/*//accessing the header attribute using this.props*/}
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
        </div>
    </div>
);
//creating a default props for title header
Header.defaultProps = {
    title:"Indecision App"
};


export default Header;