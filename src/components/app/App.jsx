import React from 'react';
import css from "./App.scss";
import Menu from "../../components/menu/Menu.jsx";
import Header from "../../components/header/Header.jsx";

class App extends React.Component{
    render(){
        return <React.Fragment>
                
            <Menu tabs = {["HOME PAGE", "COURSES", "ABOUT US", "CONTACT"]}/>
            <Header />
                    
        </React.Fragment>;
    }
}

export default App;