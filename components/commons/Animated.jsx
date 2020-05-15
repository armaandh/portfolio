import { useRef } from "react"
import styled from '@emotion/styled';
import { motion, AnimatePresence } from "framer-motion"
import { withSize } from 'react-sizeme'

import { scrollToRef } from '../../utils/utils'
import { Button } from './Feedback'
import { Divider } from '../Boxes'

const PageContainer = styled(motion.div)`
  margin-bottom: 140px;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 60px;
  }
`

export const AnimatedLayout = ({ children, className }) => (
  <AnimatePresence>
    <PageContainer
      className={className}
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.8,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
    >
      {children}
    </PageContainer>
  </AnimatePresence>
)

const variants = {
  show: {
    opacity: 0,
    height: "35px",
    width: "35px",
    borderRadius: "500px",
  },
  hide: {
    opacity: 0,
    transition: { type: "spring", stiffness: 100 },
  }
}

export const AnimatedButton = withSize()(({ children, fullProcess, onClick, size, blue }) => {
  const isResponsive = size.width < 1024
  const dividerRef = useRef()
  const executeScroll = () => scrollToRef(dividerRef)
  const executeAnimation = () => {
    onClick()
    setTimeout(() => executeScroll(), 1300);
  }
  return (<>
    <AnimatePresence>
      {!fullProcess &&
        <Button
          blue={blue}
          onClick={executeAnimation}
          initial={{
            height: "initial",
            width: "initial",
            borderRadius: "32px",
          }}
          exit={{
            height: 0,
            width: 0,
            margin: "90px auto 90px auto",
            borderRadius: "500px",
            opacity: 0.01,
          }}
          transition={{
            borderRadius: { duration: 0 },
            type: "spring",
            stiffness: 400,
            damping: 100,
            duration: 1,
          }}
        >
          <motion.span exit={{ scale: 0 }} transition={{ duration: 0 }}  className="text">See the full process</motion.span>
        </Button>
      }
    </AnimatePresence>
    <AnimatePresence>
      {fullProcess && <Divider
        ref={dividerRef}
        blue={blue}
        initial={{
          opacity: 0,
          height: "35px",
          width: "35px",
          borderRadius: "500px",
        }}
        animate={{
          opacity: 1,
          height: "4px",
          width: "250px",
        }}
        transition={{
          delay: 1,
          type: "spring",
          stiffness: 400,
          damping: 100,
        }}
      />}
    </AnimatePresence>
  </>
  )
})