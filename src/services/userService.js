import app from "./config"

const getAllUsers = async () => {
  try {
    const { data } = await app.get('/users')
    return data
  } catch (error) {
    console.error(error)
  }
}

export {
  getAllUsers
}