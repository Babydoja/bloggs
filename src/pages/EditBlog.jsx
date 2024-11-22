import React, { useEffect, useState } from 'react'
import Header from './Header'
import db from '../database/Config'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function EditBlog() {
  const [img, setimg] = useState('')
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  const {id} = useParams()
  const getSingleData = async() =>{
    const docRef = doc(db, "blog_id", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const datas = docSnap.data()
        setAuthor(datas.author)
        setDescription(datas.description)
        setTitle(datas.title)
        setimg(datas.img) 
      } else {
        console.log("No such document!");
      }
    
  }
  useEffect(() => {
    getSingleData()
  }, [id])

  const editblog = async (e) =>{
    e.preventDefault()
      const editdata = doc(db, "blog_id", id);
      await updateDoc(editdata, {
        img,
        author,
        title,
        description,
      });
      toast.success('Blog Updated Successfully')
      navigate('/')
    
  }
  return (
    <div className='min-h-[100vh] bg-[#000000e5]'>
      <Header/>
        <div className=''>
            <div className=' flex justify-center items-center mt-2 h-[100vh] flex-col text-center '>
                <h1 className='text-[30px] font-bold text-white'>Edit Blog</h1>
                <form onSubmit={editblog}>
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
