import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'
import { Link } from "react-router-dom";

import {useNavigate} from 'react-router-dom';

const OurStoryButtonCircle = () => {
  const navigate = useNavigate()
  const getStartOnClick = () => {
    navigate('/SeniorTechWebsite/OurStories')
  };
  return (
    <Link to="/OurStories">
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-green p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-black'>Our</span>
          </p>
          <img
            src={arrowUp}
            alt='arrow'
            className='w-[23px] h-[23px] object-contain'
          />
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-black'>Stories</span>
        </p>
      </div>
    </div>
    </Link>
  )
}

export default OurStoryButtonCircle
