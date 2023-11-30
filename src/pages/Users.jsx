import { useEffect, useState } from "react"

import { getAllUsers } from "../services/userService"

const Users = () => {
  const [ users, setUsers ] = useState([])

  useEffect(()=> {
    const fetchData = async () => {
      const result = await getAllUsers()
      setUsers(result)
    }
    fetchData()
  }, [])

  return (
    <div>Users</div>
  )
}

export default Users