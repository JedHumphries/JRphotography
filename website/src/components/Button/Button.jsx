import React from 'react'
import PropTypes from 'prop-types'
import { Btn } from './Button.styled'

const Button = ({children}) => {
  return (
    <Btn 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, x: "-1px", y: "1px" }}
    > {children}
    </Btn>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Button



      
    