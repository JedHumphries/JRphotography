import React, { useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import { motion, useInView, useAnimation } from 'framer-motion'


const Reveal = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const mainControls = useAnimation()
  const sliderControls = useAnimation()

  useEffect(() => {
    if(isInView) {
      mainControls.start("visible")
      sliderControls.start("visible")

    }
  }, [isInView]) 

  return (
    <div ref={ref} style={{ position: "relative", width: "fit-content", overflow: "hidden" }}>
        <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={mainControls}
          // whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
        {children}
        </motion.div>
        <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" }
          }}
          initial="hidden"
          animate={sliderControls}
          // whileInView={{ left: "100%" }}
          transition={{ duration: 0.5, ease: "easeIn"}}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: "black",
            zIndex: 20,
          }}
        >
        </motion.div>
    </div>

  )
}

Reveal.propTypes = {
    children: PropTypes.object.isRequired,
  }

export default Reveal