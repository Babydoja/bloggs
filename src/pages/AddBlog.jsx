import React, { useState } from 'react'
import Header from './Header'
import {addDoc, collection } from "firebase/firestore"; 
import db from '../database/Config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function AddBlog() {
  const [img, setimg] = useState('')
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  const addBlog = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "blog_id"), {
        img,
        author,
        title,
        description,
      });
      console.log("Blog added successfully with ID:", docRef.id);
      toast.success('New blog added successfully')
      navigate('/')
    } catch (error) {
      console.error("Error adding blog:", error);
    }

    setAuthor('')
    setTitle('')
    setDescription('')
    setimg('')
  };

  
    
     

  return (
    <div className='min-h-[100vh] bg-[#000000e5]'>
        <Header/>
        <div className=''>
            <div className=' flex justify-center items-center mt-2 h-[80vh] flex-col text-center'>
                <h1 className='text-[30px] font-bold  text-white'>Add Blog</h1>
                <form onSubmit={addBlog}>
                    <input type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} value={title} className='border border-black w-96 p-2 mt-2 rounded'  /> <br />
                    <input type="text" placeholder="Author" onChange={(e)=>setAuthor(e.target.value)} value={author} className='border border-black w-96 p-2 mt-2 rounded' /> <br />
                    <input type="text" placeholder="Img" onChange={(e)=>setimg(e.target.value)} value={img} className='border border-black w-96 p-2 mt-2 rounded'/> <br />
                    <textarea  placeholder="Content" onChange={(e)=>setDescription(e.target.value)} value={description} className='border border-black w-96 p-2 mt-2 rounded' /> <br />
                    <button className='bg-red-600 w-96 p-2 mt-2 rounded text-white'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
