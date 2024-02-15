import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './WelcomePage'
import WeatherPage from './WeatherPage'
import Layout from './Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
