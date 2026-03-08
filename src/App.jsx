import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './components/Layout'
import Today from './sections/Today'
import Trays from './sections/Trays'
import Balcony from './sections/Balcony'
import Plants from './sections/Plants'
import Season from './sections/Season'

function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/today" replace />} />
          <Route path="/today" element={<AnimatedPage><Today /></AnimatedPage>} />
          <Route path="/trays" element={<AnimatedPage><Trays /></AnimatedPage>} />
          <Route path="/balcony" element={<AnimatedPage><Balcony /></AnimatedPage>} />
          <Route path="/plants" element={<AnimatedPage><Plants /></AnimatedPage>} />
          <Route path="/season" element={<AnimatedPage><Season /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}
