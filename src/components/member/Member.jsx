import React from 'react';
import css from './Member.scss';

class Member extends React.Component{
    backward = () => {
        this.props.handleBackward();
    }
    forward = () => {
        this.props.handleForward();
    }
    render(){
        return <React.Fragment>
            <div className="teamMember">
                <div className="teamImage">
                    <img src={this.props.img}/>
                </div>
                <h2>
                <img className="backArrow" src="./images/arrow.svg" onClick={this.backward}/>
                {this.props.name}
                <img className="frwdArrow" src="./images/arrow.svg" onClick={this.forward}/>
                </h2>
                <p>{this.props.desc}</p>
                <button>READ MORE</button>
            </div>
        </React.Fragment>;
    }
}

export default Member;