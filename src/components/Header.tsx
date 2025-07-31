import { useTheme } from '../context/ThemeContext'
import { Link } from 'react-router-dom'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-200 dark:bg-gray-800 p-4 flex justify-between items-center z-10">
      <div className="font-bold text-lg">🌈 MultiTheme App</div>
      <select
        className="p-2 rounded"
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
      >
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </select>
      <nav className="space-x-4 ml-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}
