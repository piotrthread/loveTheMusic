import React from 'react';
import css from './Team.scss';
import Member from '../member/Member.jsx';

class Team extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index: 1
        };
    }

    handleForward = () => {
        if(this.state.index == 4){
            this.setState({index: 1});
        }else{
            this.setState({index: this.state.index + 1});
        }
    }
    handleBackward = () => {
        if(this.state.index == 1){
            this.setState({index: 4});
        }else{
            this.setState({index: this.state.index - 1});
        }
    }

    render(){
        return <React.Fragment>
            <section className="teamContainer">
                <div className="container">
                    <div className="team-section">
                        <div className="title">
                            <p>behind the scenes</p>
                            <span>MEET OUR TEAM</span>
                            <hr></hr>
                        </div>
                        <div className="membersDesktop">
                        <Member name="James" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident odit eaque dolore tempore quidem nihil officia rem odio iste et cumque blanditiis impedit fugiat, odit eaque dolore tempore." img="./images/photo1.png" handleForward={this.handleForward} handleBackward={this.handleBackward}/>    
                        <Member name="Kate" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptatem minima at vel numquam dolorum quidem nihil officia rem odio iste et cumque blanditiis impedit fugiat, odit eaque dolore tempore." img="./images/photo2.png" handleForward={this.handleForward} handleBackward={this.handleBackward}/>    
                        <Member name="Mark" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptatem minima at vel numquam dolorum quidem nihil officia rem odio iste et dolorum quidem nihil officia rem, odit eaque dolore tempore." img="./images/photo3.png" handleForward={this.handleForward} handleBackward={this.handleBackward}/>    
                        <Member name="Janet" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptatem minima at vel numquam dolorum quidem nihil officia rem odio dolor sit amet consectetur fugiat, odit eaque dolore tempore." img="./images/photo4.png" handleForward={this.handleForward} handleBackward={this.handleBackward}/>    
                        </div>
                        <div className="members">
                        {
                            this.state.index == 1 && <Member name="James" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident odit eaque dolore tempore quidem nihil officia rem odio iste et cumque blanditiis impedit fugiat, odit eaque dolore tempore." img="./images/photo1.png" handleForward={this.handleForward} handleBackward={this.handleBackward}/>    
                        }
                        {
                            this.state.index == 2 && <Member name="Kate" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptatem minima at vel numquam dolorum quidem nihil officia rem odio iste et cumque blanditiis impedit fugiat, odit eaque dolore tempore." img="./images/photo2.png" handleForward={this.handleForward} handleBackward={this.handleBackward}/>    
                        }
                        {
                            this.state.index == 3 && <Member name="Mark" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptatem minima at vel numquam dolorum quidem nihil officia rem odio iste et dolorum quidem nihil officia rem, odit eaque dolore tempore." img="./images/photo3.png" handleForward={this.handleForward} handleBackward={this.handleBackward}/>    
                        }
                        {
                            this.state.index == 4 && <Member name="Janet" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptatem minima at vel numquam dolorum quidem nihil officia rem odio dolor sit amet consectetur fugiat, odit eaque dolore tempore." img="./images/photo4.png" handleForward={this.handleForward} handleBackward={this.handleBackward}/>    
                        } 
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>;
    }
}

export default Team;

//Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptatem minima at vel numquam dolorum quidem nihil officia rem odio iste et cumque blanditiis impedit fugiat, odit eaque dolore tempore.