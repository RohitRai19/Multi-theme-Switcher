type Theme = 'theme1' | 'theme2' | 'theme3'

interface ThemeStyles {
  background: string
  text: string
  font: string
 
}

export const themeStyles: Record<Theme, ThemeStyles> = {
  theme1: {
    background: 'bg-white',
    text: 'text-black',
    font: 'font-sans',
  },
  theme2: {
    background: 'bg-gray-900',
    text: 'text-white',
    font: 'font-serif',
  },
  theme3: {
    background: 'bg-yellow-100',
    text: 'text-purple-700',
    font: 'font-[Pacifico]',
  },
}
