import React from 'react';
import css from "./App.scss";
import Menu from "../../components/menu/Menu.jsx";
import Header from "../../components/header/Header.jsx";
import Courses from '../../components/courses/Courses.jsx'
import Banner from '../../components/banner/Banner.jsx'
import Team from '../../components/team/Team.jsx'

class App extends React.Component{
    render(){
        return <React.Fragment>
                
            <Menu tabs = {["HOME PAGE", "COURSES", "ABOUT US", "CONTACT"]}/>
            <Header />
            <Courses />
            <Banner />
            <Team />
                    
        </React.Fragment>;
    }
}

export default App;