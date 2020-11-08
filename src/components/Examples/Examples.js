import React from 'react';
import "./Examples.css";

import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

function Examples() {
    return (
        <div className="examples">
            <Slide left>
            <h1> BROWSE BY CATEGORIES </h1>
            </Slide>
            <div className="examples__categories">
                <Fade bottom>
                <section className="examples__category">
                    <img src="./img/living-room.jpg" alt="living room" />
                    <h4> Living Room </h4>
                </section>
               
                <section className="examples__category">
                    <img src="./img/bed-room.jpg" alt="living room" />
                    <h4>  Bedroom </h4>
                </section>
                
                <section className="examples__category">
                    <img src="./img/dining-room.jpg" alt="living room" />
                    <h4> Dining Room </h4>
                </section>
                
                <section className="examples__category">
                    <img src="./img/office.jpg" alt="living room" />
                    <h4> Office </h4>
                </section>
                
                <section className="examples__category">
                    <img src="./img/kids.jpg" alt="living room" />
                    <h4> Kid's Room </h4>
                </section>
                
                <section className="examples__category">
                    <img src="./img/nursery.jpg" alt="living room" />
                    <h4> Nursery </h4>
                </section>
                </Fade>
            </div>
        </div>
    )
}

export default Examples;
