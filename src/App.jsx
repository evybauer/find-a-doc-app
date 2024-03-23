import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SearchProvider } from './providers/SearchProvider'
import Layout from '../src/components/Layout'

const Dashboard = lazy(() => import('./Routes/Dashboard'))
const Providers = lazy(() => import('./Routes/Providers'))

const App = () => (
  <SearchProvider>
    <Router>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path='/providers' element={<Providers />} />
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  </SearchProvider>
)

export default App
