import { useEffect, useState } from "react"

import UserCard from "../components/UserCard/UserCard"

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

  const displayUsers = () => {
    return users.map(user => {
      return (
        <UserCard key={user.id} data={user} />
      )
    })
  }

  return (
    <div>
      { displayUsers() }
    </div>
  )
}

export default Users