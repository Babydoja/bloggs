import React, { useEffect, useState } from 'react'
import Header from './Header'
import { collection, getDocs } from "firebase/firestore";
import db from '../database/Config';
import { Link, useParams } from 'react-router-dom';
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from 'react-toastify';



export default function Home() {
    const {id} = useParams()
    const [Alldata, setAlldata] = useState([])
    const getAllData = async () => {
        const response = await getDocs(collection(db, "blog_id"));
        const dataArray = []       
        response.forEach((doc) => {
            const dataitem = {
                id:doc.id,
                img:doc.data().img,
                author : doc.data().author,
                title:doc.data().title,
                description:doc.data().description,
               
            }    
            dataArray.push(dataitem);     
        });
        setAlldata(dataArray)
    }
    useEffect(() => {
      getAllData()
    }, []) 

    const deleteBlog =async (id) =>{
      try {
        await deleteDoc(doc(db, "blog_id", id))
        toast.success('Blog deleted successfully')
        getAllData()
      } catch (error) {
        console.log(error);
        toast.error('Blog not deleted') 
      }
    }
  return (
    <div className='min-h-[100vh] bg-[#000000e5]'>
        <Header/>
        <div className='flex flex-wrap justify-center gap-7 mt-8'>
            {
                Alldata.map((item, index) => (
                    <div key={index} className='text-white bg-[black] w-[300px] h-fit rounded hover:border'>
                        <div><img src={item.img} alt="" /></div>
                        <div className='p-[15px]'>
                            <h1>{item.title}</h1>
                            <p className='py-[15px]'>{item.description} <span className='text-[#ffffff2e]'><Link to={`/singleblog/${item.id}`}>read more</Link></span></p>
                            <hr />
                            <div className='flex justify-between pt-[15px] items-center'>
                                <h1>{item.author}</h1>
                                <div className='flex items-center gap-5'>
                                    <div><i onClick={()=>deleteBlog(item.id)} className='pi pi-trash text-[12px] bg-red-600 rounded-full p-2'></i></div>
                                    <div><Link to={`/editblog/${item.id}`} ><span className='pi pi-pencil text-[12px] bg-blue-600 rounded-full p-2 '></span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))          
            }
        </div>



    </div>
  )
}
