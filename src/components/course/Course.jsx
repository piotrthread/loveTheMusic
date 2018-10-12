import React from 'react';
import css from './Course.scss';

class Course extends React.Component{
    render(){
        return <React.Fragment>
            <div className="course">
                <img src={this.props.img}></img>
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
                <button>READ MORE</button>
            </div>
        </React.Fragment>;
    }
}

export default Course;