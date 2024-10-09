import { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import Card from './components/card/Card';
import { baseurl } from '../../../CONFIG.JS';
import axios from "axios"

const Home = () => {

  const [blogs,setBlogs] = useState([])
  const fetchBlog =async()=>{
    const response = await axios.get(`${baseurl}/blog`)
    if(response.status ===200){
      setBlogs(response.data.data)
      console.log(response)
    }
  }
  useEffect(()=>{
    fetchBlog()
  },[])
  return (
    <Layout>
      
      <div className='flex flex-wrap justify-center space-x-5 mt-6'>
      {
        blogs.length > 0 && blogs.map((blog)=>{
          return (
            <Card blog={blog} />
          )
        })
      }
      
        
      
      </div>

    </Layout>
  )
}

export default Home