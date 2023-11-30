import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { getAllUsers } from './services/userService'

import config from './router'

import './App.css'

function App() {
  
  // useEffect(() => {
  //   const getData = async () => {
  //     const result = await getAllUsers()
  //     console.log(result)
  //   }
  //   getData()
  // }, [])

  return (
    <>
      <RouterProvider router={ config } />

    </>
  )
}

export default App
