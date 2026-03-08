import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Today from './sections/Today'
import Trays from './sections/Trays'
import Balcony from './sections/Balcony'
import Plants from './sections/Plants'
import Season from './sections/Season'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/today" replace />} />
        <Route path="/today" element={<Today />} />
        <Route path="/trays" element={<Trays />} />
        <Route path="/balcony" element={<Balcony />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/season" element={<Season />} />
      </Routes>
    </Layout>
  )
}
