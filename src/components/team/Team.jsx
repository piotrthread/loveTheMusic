import React from 'react';
import css from './Team.scss';
import Member from '../member/Member.jsx';

class Team extends React.Component{
    render(){
        return <React.Fragment>
            <section>
                <div className="container">
                    <div className="team-section">
                        <div className="title">
                            <p>behind the scenes</p>
                            <span>MEET OUR TEAM</span>
                            <hr></hr>
                        </div>
                        <div className="members">
                               <Member name="James" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptatem minima at vel numquam dolorum quidem nihil officia rem odio iste et cumque blanditiis impedit fugiat, odit eaque dolore tempore." img="./images/photo1.png"/>
                               <Member name="Kate" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptatem minima at vel numquam dolorum quidem nihil officia rem odio iste et cumque blanditiis impedit fugiat, odit eaque dolore tempore." img="./images/photo2.png"/>
                               <Member name="Mark" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptatem minima at vel numquam dolorum quidem nihil officia rem odio iste et cumque blanditiis impedit fugiat, odit eaque dolore tempore." img="./images/photo3.png"/>
                               <Member name="Janet" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptatem minima at vel numquam dolorum quidem nihil officia rem odio iste et cumque blanditiis impedit fugiat, odit eaque dolore tempore." img="./images/photo4.png"/>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>;
    }
}

export default Team;

//Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptatem minima at vel numquam dolorum quidem nihil officia rem odio iste et cumque blanditiis impedit fugiat, odit eaque dolore tempore.