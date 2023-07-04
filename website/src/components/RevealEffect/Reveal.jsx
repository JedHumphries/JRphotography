import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'



const Reveal = ({ children }) => {
  return (
    <div style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
        <motion.div
        variants={{
          hidden: {opacity: 0, y: 75 },
          visible: {opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate="visible"
        >
        {children}
        </motion.div>
    </div>
  )
}

Reveal.propTypes = {
    children: PropTypes.object.isRequired,
  }

export default Reveal