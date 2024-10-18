import axios from "axios"
import Layout from "../../components/layout/Layout"
import Form from "./components/form/Form"
import { baseurl } from "../../../config.js"
import { useNavigate } from "react-router-dom"


const AddBlog = () => {
  const navigation = useNavigate()

  const handleCreateBlog =async(data)=>{
    try {
      const response = await axios.post(`${baseurl}/blog`,data,{
        headers : {
          "Content-Type" : "multipart/form-data",
          Authorization : localStorage.getItem('token')
        }
      })
      if(response.status ===201){
        navigation('/')
  
      }else{
        alert("registration failed")
      }
      
    } catch (error) {
      alert(error?.response?.data?.message)
      
    }

  }
  return (
    <Layout>
      <Form type = 'Create' onSubmit={handleCreateBlog} />

    </Layout>
  )
}

export default AddBlog