import React, {useState, useEffect} from 'react'

import styles, { layout } from '../style'

import {stories} from '../constants'

const Story = ({index, name, content, img, position}) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const info = (
        <div className={layout.sectionInfo}>
        <p className={`${styles.paddingY} font-poppins font-normal text-current text-[16px] leading-[24px]`}>
          {content}
        </p>
        <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-black'>{name}</h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-black'>{position}</p>
        </div>
    )
    const image = (
        <div className={`${layout.sectionImg} ${styles.padding}`}>
            <img
              src={img}
              alt='image'
              className='w-[100%] h-[100%]'
            />
        </div>
    )
    if (index % 2 == 0) {
        const move_right = {
            marginLeft: `${scrollY / 10}px`,
            marginRight: `${-scrollY / 10}px`,
        };
        return (
            <span className={`flex md:flex-row flex-col`} style={move_right}>
            {info} {image}
            </span>
        )}
    else {
        const move_left = {
            marginLeft: `${-scrollY / 10}px`,
            marginRight: `${scrollY / 10}px`,
        };
        return (
        <span className={`flex md:flex-row flex-col`} style={move_left}>
        {image} {info}
        </span>
    )}
}

const OurStories = () => {
    return (
        <React.Fragment>
        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <h2 className={styles.heading2}>We would like to share some stories with you. </h2>
        </section>
        {
            stories.map((story, index)=>(
                <Story key={story.id} {...story} index={index}/>
            ))
        }

        </React.Fragment>
    )
}


export default OurStories