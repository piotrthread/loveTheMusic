import React from 'react';
import css from './Header.scss';

class Header extends React.Component{
    render(){
        return <React.Fragment>
            <header>
                <div className="container">
                    <div className="header">
                        <img src="./images/main-text.svg"/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quos quod eum itaque doloribus qui vitae quam eius sunt quis, vel eveniet iste voluptate nostrum ducimus porro ipsa impedit molestias?</p>
                        <button>KEY FEATURES</button>
                        <div className="line"></div>
                    </div>
                </div>
            </header>
        </React.Fragment>;
    }
}

export default Header;