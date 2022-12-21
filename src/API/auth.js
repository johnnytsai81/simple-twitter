import axios from "axios";
import Swal from "sweetalert2";


const authURL = 'https://ck-mami-2022-twitter.herokuapp.com/api'

export const userLogin = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/signIn`,{
      account,
      password,
    })

    const { token } = data.data
    const { role } = data.data.user

    if(token && role !== 'admin') {
      return { success: true, ...data }
    }
    return data
    
  } catch (error) {
    console.log('[Login Failed]:', error.response.data)
        // 登入失敗訊息
      Swal.fire({
        position: "top",
        title: error.response.data.message,
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });

  }
}

export const register = async ({ account, name, email, password, checkPassword}) => {
  try {
    const { data } = await axios.post(`${authURL}/users`,
    {
      account,
      name,
      email,
      password,
      checkPassword,
    })

    const { createdUser } = data.data

    if(createdUser) {
      return { success: true, ...data }
    }
    return data

    
  } catch (error) {
    console.log('[Register Failed]:', error.response.data)
    // 註冊失敗訊息
    Swal.fire({
      position: "top",
      title: error.response.data.message,
      timer: 1000,
      icon: "error",
      showConfirmButton: false,
    });
  }
}

export const adminLogin = async ({ account, password }) => {
  try {
    const { data } = await axios.post(`${authURL}/signIn`,{
      account,
      password,
    })

    const { token } = data.data
    const { role } = data.data.user

    if(token && role === 'admin') {
      return { success: true, ...data }
    }
    return data
    
  } catch (error) {
    console.log('[Admin Login Failed]:', error.response.data)
        // 登入失敗訊息
      Swal.fire({
        position: "top",
        title: error.response.data.message,
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
  }
}


