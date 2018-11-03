import React from 'react';
import Course from '../../components/course/Course.jsx';
import css from './Courses.scss';

class Courses extends React.Component{
    render(){
        return <React.Fragment>
            <section className="coursesContainer">
                <div className="container">
                    <div className="courses-section">
                        <div className="title">
                            <p>learn how to</p>
                            <span>LOVE MUSIC</span>
                            <hr></hr>
                        </div>
                        <div className="courses">
                            <Course img="./images/img1.png" title="LOREM IPSUM SIT DOLOR" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, beatae quis ducimus nulla quos et recusandae." />
                            <Course img="./images/img2.png" title="LOREM IPSUM SIT DOLOR" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, beatae quis ducimus nulla quos et recusandae." />
                            <Course img="./images/img3.png" title="LOREM IPSUM SIT DOLOR" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, beatae quis ducimus nulla quos et recusandae." />   
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>;
    }
}

export default Courses;

