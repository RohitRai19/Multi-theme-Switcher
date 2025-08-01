import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'theme1' | 'theme2' | 'theme3'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'theme1'
  })

  useEffect(() => {
    document.documentElement.className = ''
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
