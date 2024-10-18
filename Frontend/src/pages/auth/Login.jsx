
import { useNavigate } from "react-router-dom"
import Form from "./components/form/Form"
import axios from "axios"
import { baseurl } from "../../../config.js"


const Login = () => {
  
    const navigate = useNavigate()
  const handleLogin =async(data)=> {
    try {
      const response = await axios.post(`${baseurl}/login`,data)
    if(response.status === 200) {
      localStorage.setItem('token',response.data.token)
      navigate('/')  

    }else{
      alert("error")
    }
      
    } catch (error) {
      alert(error?.response?.data?.message)
      
    }

  }

  
    return (
      
  
      <Form type = {'Login'} onSubmit={handleLogin}/>
    )
  }
  
  export default Login