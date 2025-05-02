import React ,{ useContext }from 'react'
import Hero from './Componets/Hero/Hero'
import { ThemeProvider } from './Context/store'
import Navbar from './Componets/NavBar/Navbar'



function App() {
  return (
    <>
      <ThemeProvider.Provider value={{Theme, toggleTheme}}>
      <Navbar/>
      <Hero/>
      </ThemeProvider.Provider>
    </>
  )
}

export default App
