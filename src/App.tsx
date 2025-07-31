import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { useTheme } from './context/ThemeContext'
import { themeStyles } from './theme/themes'

function App() {
  const { theme } = useTheme()
  const currentTheme = themeStyles[theme]

  return (
    <div className={`min-h-screen ${currentTheme.background} ${currentTheme.text} ${currentTheme.font}`}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
