import { useNavigate } from 'react-router-dom'
import Form from './components/form/Form'
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate()
  const handleRegister=async(data)=> {
    try {
      const response = await axios.post("localhost:3000/register",data)
    if(response.status === 201) {
      navigate('/login')

    }else{
      alert("error")
    }
      
    } catch (error) {
      alert(error?.response?.data?.message)
      
    }

  }
  return (
  <Form type = {'Register'} onSubmit={handleRegister} /> 
  )
}

export default Register