
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Hero from './Components/Hero'
import Page from './Components/Page'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/page" element={<Page/>} />
      </Routes>
    </Router>
  )
}

export default App

