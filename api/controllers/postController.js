import {connectDB} from '../db.js'


export const getPosts = (req,res)=>{
    const q= req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    :"SELECT * FROM posts";

    connectDB.query(q,[req.query.cat],(err,data)=>{
        if(err) res.send(err);
        return res.status(200).json(data);
    })
}

export const getPost = (req,res)=>{
   
}

export const addPost = (req,res)=>{
   
}

export const deletePost = (req,res)=>{
   
}

export const updatePost = (req,res)=>{
   
}



