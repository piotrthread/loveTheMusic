import React from 'react';
import css from './Banner.scss';

class Banner extends React.Component{
    render(){
        return <React.Fragment>
            <section>
                <div className="container">
                    <div className="banner">
                        <h1>LOVE THE <span>MUSIC</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laudantium esse inventore?</p>
                    </div>
                </div>
            </section>
        </React.Fragment>;
    }
}

export default Banner;