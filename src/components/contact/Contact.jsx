import React from 'react';
import css from './Contact.scss';
import { runInThisContext } from 'vm';

class Contact extends React.Component{
    handleSend = (e) => {
        e.preventDefault();
    }
    render(){
        return <React.Fragment>
            <div className="contact">
                <div className="title">
                                <p>stay tuned</p>
                                <span>CONTACT WITH US</span>
                                <hr></hr>
                </div>
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="E-mail"/>
                    <textarea placeholder="Your Message..."/>
                    <button onClick={this.handleSend}>SEND</button>
                </form>
            </div>
        </React.Fragment>;
    }
}

export default Contact;