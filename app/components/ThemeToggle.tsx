'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
    >
      <motion.div
        className="w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 24 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === 'dark' ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'light' ? (
            <Sun className="w-3 h-3 text-yellow-500" />
          ) : (
            <Moon className="w-3 h-3 text-blue-400" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  )
}
