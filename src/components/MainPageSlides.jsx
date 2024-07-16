import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import slides from '../assets/slides';
import '../index.css'

const MainPageSlides = () => {
    return (
        <Slide indicators={true} duration={3000}>
            {slides.map((slide, index) => (
                <div key={index} className="each-slide-effect">
                    <div> <img src={slide} className='w-[100%] h-[100%] relative z-[5]'/> </div>
                </div>
            ))}
        </Slide>
    )
}

export default MainPageSlides;
