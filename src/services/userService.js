import app from "./config"

export const getAllUsers = async () => {
  try {
    const { data } = await app.get('/users')
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getOneUser = async (id) => {
  try {
    const { data } = await app.get(`/users/${id}`)
    return data
  } catch (error) {
    console.error(error);
  }
}