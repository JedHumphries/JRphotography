import React from 'react'

import { Btn } from './Button.styled'

const Button = () => {
  return (
    <Btn
    initial={{ scale: 0}}
    whileInView={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    > More Images</Btn>
  )
}


export default Button



      
    