import React from 'react';
import css from './Footer.scss';

class Footer extends React.Component{
    render(){
        return <React.Fragment>
            <div className="footer">
                <div className="social">
                    <img src="./images/fb.svg"/>
                    <img src="./images/in.svg"/>
                    <img src="./images/tw.svg"/>
                </div>
                <p>Copyright: CodersLab and Threadicture.</p>
            </div>
        </React.Fragment>;
    }
}

export default Footer;