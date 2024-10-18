import { useNavigate } from 'react-router-dom'
import Form from './components/form/Form'
import axios from 'axios'
import { baseurl } from '../../../config.js'

const Register = () => {
  const navigate = useNavigate()
  const handleRegister=async(data)=> {
    try {
      const response = await axios.post(`${baseurl}/register`,data)
    if(response.status === 201) {
      navigate('/login')

    }
      
    } catch (error) {
      alert(error?.response?.data?.message)
      //alert("ok this is error")
      
    }

  }
  return (
  <Form type = {'Register'} onSubmit={handleRegister} /> 
  )
}

export default Register