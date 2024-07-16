import React from 'react'
import {useNavigate} from 'react-router-dom';

const Button = ({ styles }) => {
  const navigate = useNavigate()
  const getStartOnClick = () => {
    navigate('/SeniorTechWebsite/OurStories')
  };
  return (
    <button onClick={getStartOnClick} type='button' className={`py-4 px-6 bg-green font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Our Stories
    </button>
  )
}

export default Button
