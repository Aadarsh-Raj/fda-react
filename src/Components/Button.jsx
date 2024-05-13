import React from 'react'
import HamburgerIcon from './HamburgerIcon'

const Button = (props) => {

  return (
    <>
    <button onClick={props.onClick}>
        <HamburgerIcon />
    </button>
    </>
  )
}

export default Button
