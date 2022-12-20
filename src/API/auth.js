import axios from "axios";

const authURL = 'https://ck-mami-2022-twitter.herokuapp.com/api'

export const login = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/signin`,{
      account,
      password,
    })

    const { token } = data.data
    if(token) {
      return { success: true, ...data }
    }
    return data
    

  } catch(error) {
    console.log('[Login Failed]:', error)
  }
}