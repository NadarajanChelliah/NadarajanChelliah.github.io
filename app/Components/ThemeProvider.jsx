'use client'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeCtx = createContext({ isDark:false, toggle:()=>{} })
export const useTheme = () => useContext(ThemeCtx)

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)

  // initial load: localStorage -> prefers-color-scheme
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    setIsDark(saved ? saved === 'dark' : false)
  }, [])

  // apply to <html> and persist
  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme','dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme','light')
    }
  }, [isDark])

  const value = useMemo(() => ({ isDark, toggle: () => setIsDark(d => !d) }), [isDark])
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>
}