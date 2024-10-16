
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/blog/Home'
import AddBlog from './pages/blog/AddBlog'
import EditBlog from './pages/blog/EditBlog'
import SingleBlog from './pages/blog/SingleBlog'
function App() {
  return (
    
     <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path='/register' element={ <Register /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/blog/add' element={ <AddBlog /> } />
        <Route path='/blog/edit' element={ <EditBlog /> } />
        
        <Route path='/blog/:id' element={ <SingleBlog /> } />
        

      </Routes>
     
     </BrowserRouter>
   
  )
}

export default App
