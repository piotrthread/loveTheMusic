import React from 'react';
import css from './Member.scss';

class Member extends React.Component{
    render(){
        return <React.Fragment>
            <div className="teamMember">
                <div className="teamImage">
                    <img src={this.props.img}/>
                </div>
                <h2>{this.props.name}</h2>
                <p>{this.props.desc}</p>
                <button>READ MORE</button>
            </div>
        </React.Fragment>;
    }
}

export default Member;