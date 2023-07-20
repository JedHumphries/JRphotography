import React from 'react'
import PropTypes from 'prop-types'
import { Btn } from './Button.styled'

const Button = ({children}) => {
  return (
    <Btn 
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    > {children}
    </Btn>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Button



      
    