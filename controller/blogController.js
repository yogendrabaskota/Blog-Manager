//const Blog = require("../../model/blogModel");
const Blog = require("../model/blogModel");


const fs  = require('fs');
const catchAsync = require("../services/catchAsync");
class BlogController{
    async createBlog(req, res) {
        
    
        const userId = req.userId;
        const { title, description, category, subtitle } = req.body;
    
        if (!title || !description || !category || !subtitle) {
            return res.status(400).json({
                message: 'Please provide title, description, category, and subtitle'
            });
        }
        let fileName;
        console.log(req.file)
        // Check if the file is present in the request
        if (!req.file) {
            return res.status(400).json({
                message: "Please Insert the Image"
            });
        }
    
        // Set fileName to the uploaded image's URL
        fileName = process.env.BASE_URL + req.file.filename;
    
        // Create the blog entry in the database
        await Blog.create({
            title,
            description,
            category,
            userId,
            subtitle,
            imageUrl: fileName
        });
    
        // Send success response
        res.status(201).json({
            message: "Blog Created Successfully"
        });
    }
    
    async getBlogs(req,res){
        const data = await Blog.find().populate('userId','-password')
        res.status(200).json({
            message : 'Blogs fetched successfully',
            data
        })
    }
    async getSingleBlog(req,res){
        const id = req.params.id 
    
        if(!id){
            return res.status(400).json({
                message : 'Please provide id'
            })
        }
           
        const data = await Blog.findById(id).populate('userId','-password')
        res.status(200).json({
            message : 'Blogs fetched successfully',
            data
        })
    }
    async deleteBlog(req,res){
        const id = req.params.id 
        const userId = req.userId 

        if(!id){
            return res.status(400).json({
                message : 'Please provide id'
            })
        }
        const data = await Blog.findById(id).populate('userId')
 
       // console.log(data.userId.equals(userId)) 
        // return 

        if(data.userId.equals(userId)){
            await Blog.findByIdAndDelete(id)
            res.status(200).json({
                message : 'Blogs deleted successfully',
            
            })
          
        }else{
            return res.status(403).json({
                message : "You arenot the author"
            })
        } 
   
    }

    async updateBlog(req,res){
        const userId = req.userId 
        const id = req.params.id 
        const {title,description,category,subtitle} = req.body
        const oldDatas = await Blog.findById(id).populate('userId')
        if(oldDatas.userId.equals(userId)){
            let fileName;
            if(req.file){
                
            const oldImagePath = oldDatas.imageUrl
           
            const localHostUrlLength = process.env.BASE_URL.length
            const newOldImagePath = oldImagePath.slice(localHostUrlLength)
            fs.unlink(`uploads/${newOldImagePath}`,(err)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log("File Deleted Successfully")
                }
            })
            fileName =  process.env.BASE_URL + req.file.filename
        }
        await Blog.findByIdAndUpdate(id,{
            title,
            description,
            category,
            subtitle,
            imageUrl : fileName
        })
         res.status(200).json({
            message : "Blog Updated Successfully"
        })
        }else{
            return res.status(403).json({
                message : "You arenot the author"
            })
        }
        
   
    }
}

module.exports = new BlogController()