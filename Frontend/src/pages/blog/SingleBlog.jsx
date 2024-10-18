
import { Link, useNavigate, useParams } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseurl } from '../../../config.js'
import EditBlog from './EditBlog'

//import { baseurl } from '../../../config'


const SingleBlog = () => {

  const { id } = useParams()
  //console.log("this ", id)
  const [blog,setBlog] = useState({})
  const navigate = useNavigate()

  const deleteBlog=async()=>{
    try {
      
    const response = await axios.delete(`${baseurl}/blog/${id}`,{
      headers : {
        'Authorization' : localStorage.getItem('token')
      }
    })
      if(response.status === 200){
        navigate('/')
      }else{
        alert("Cannot delete")
      }

    } catch (error) {
      alert(error.response.data.message)
      
    }
    }
    const fetchBlog =async()=>{
    const response = await axios.get(`${baseurl}/blog/${id}`)
       //console.log(response.data.data)


      if(response.status === 200){
        setBlog(response.data.data)
      
     }
    
    }
  useEffect(()=>{
    fetchBlog()
  },[])

  
  return (
    <Layout>


    <div className="bg-gray-100 dark:bg-gray-800 py-8 h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={blog.imageUrl}
                alt="Product"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">    
                <Link to={`/blog/edit/${id}`}>
                
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onClick={EditBlog}>
                  Edit 
                </button>
                </Link>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600" onClick={deleteBlog}>
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
             {blog?.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {blog?.subtitle}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">Categories:</span>
                <span className="text-gray-600 dark:text-gray-300"> <b>{blog?.category}</b></span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Published by </span>
                <span className="text-gray-600 dark:text-gray-300">{blog?.userId?.username}</span>
              </div>
            </div>
            
            
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {blog.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

        
    </Layout>
  )
}

export default SingleBlog