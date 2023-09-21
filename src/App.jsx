import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState("light")


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="h-screen bg-slate-300 dark:bg-black flex justify-center items-center">
      <button className="bg-green-200 p-4 rounded-3xl" onClick={handleThemeSwitch}>
        Dark Mode!
      </button>
    </div>
  )
}

export default App
