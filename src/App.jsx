import { useEffect } from 'react'

import { getAllUsers } from './services/userService'

import './App.css'

function App() {
  
  useEffect(() => {
    const getData = async () => {
      const result = await getAllUsers()
      console.log(result)
    }
    getData()
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
