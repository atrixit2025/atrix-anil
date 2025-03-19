import React from 'react';
import video from '../../assets/atrix office shoot comressed.mp4';

const AboutHero = () => {
    return (
        <div className='max-w-[95%] mx-auto pt-40 '>
            <video
                className="w-full rounded-lg"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default AboutHero;
