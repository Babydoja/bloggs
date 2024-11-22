
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './Header'
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import db from '../database/Config';
import { toast } from 'react-toastify';

export default function SingleBlog() {
    const {id} = useParams()
    const [blogdata, setblogdata] = useState({
      img: '',
      author: '',
      description: '',
      title: ''
    })
    const getSingleData = async() =>{
      const docRef = doc(db, "blog_id", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setblogdata(docSnap.data())
          console.log("Document data:", docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      
    }
    useEffect(() => {
     getSingleData()
    }, [id])
    

    const deleteBlog =async (id) =>{
      try {
        await deleteDoc(doc(db, "blog_id", id))
        toast.success('Blog deleted successfully')
      } catch (error) {
        console.log(error);
        toast.error('Blog not deleted') 
      }
    }
   


  return (
    <div>
      <Header/>
        <div className='text-white bg-[#000000ee] h-fit p-20 '>
            <div><img src={blogdata.img} className='h-[200px] w-full' alt="" /></div>
                <div className='p-[15px]'>
                  <h1>{blogdata.title}</h1>
                  <p className='py-[15px]'>{blogdata.description} <span className='text-[#ffffff2e]'>read more</span></p>
                  <hr />
                  <div className='flex justify-between pt-[15px] items-center'>
                    <h1>{blogdata.author}</h1>
                       <div className='flex items-center gap-5'>
                            <div><i onClick={()=>deleteBlog(id)} className='pi pi-trash text-[12px] bg-red-600 rounded-full p-2'></i></div>
                            <div><Link to={`/editblog/${id}`}><span className='pi pi-pencil text-[12px] bg-blue-600 rounded-full p-2 '></span></Link></div>
                        </div>
                  </div>
              </div>
        </div>
    </div>
  )
}
