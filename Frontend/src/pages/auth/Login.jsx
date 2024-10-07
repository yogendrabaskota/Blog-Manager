
import { useNavigate } from "react-router-dom"
import Form from "./components/form/Form"
import axios from "axios"


const Login = () => {
  
    const navigate = useNavigate()
  const handleLogin =async(data)=> {
    try {
      const response = await axios.post("http://localhost:3000/login",data)
    if(response.status === 200) {
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