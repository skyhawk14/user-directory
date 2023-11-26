import React from 'react'
import './Button.css'
const Button = ({children, clickHandler}) => {
  return (
    <button
      onClick={clickHandler}
      className='button-container'
    >
      {children}
    </button>
  )
}

export default Button