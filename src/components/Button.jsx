import React from 'react'

export const getStartOnClick = () => {alert("This function is not yet implemented.")};

const Button = ({ styles }) => {
  return (
    <button onClick={getStartOnClick} type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Get Started
    </button>
  )
}

export default Button
