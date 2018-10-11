import React from 'react';
import css from './Menu.scss';

class Menu extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            active: false
        };
    }

    handleClick = () => {
        this.setState({active: !this.state.active});
    }

    render(){
        return <React.Fragment>
            <nav>
                <div className="container">
                    <div className="menu-bar">
                        <p>LV.<span>MUSIC</span></p>
                        <div className={this.state.active ? "menu-hamburger-active" : "menu-hamburger"} onClick={this.handleClick}>
                        <div className={this.state.active ? "line-active" : "line"}></div>
                        </div>
                    </div>
                    <ul className={this.state.active ? "menu-active" : "menu"}>
                         {this.props.tabs.map((element, index) => {
                             return <li key = {index} onClick={this.handleClick}>{element}</li>;
                        })}
                    </ul>  
                </div>  
            </nav>
        </React.Fragment>;
    }
}

export default Menu;