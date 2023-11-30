import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"

import { getOneUser } from '../services/userService'

const UserDetails = () => {
  const { id } = useParams()
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const result = await getOneUser(id)
      setUser(result)
    }
    fetchData()
  }, [])

  return (
    <div>
        { Object.keys(user).length !==0 ?
        <>
          <h3>
          <strong>Name:</strong> {user.name}
        </h3>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Street:</strong> {user.address.street}
        </p>
        </> :
        <h1>
          Loading
        </h1>
      }
    </div>
  );
}

export default UserDetails