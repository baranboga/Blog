import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import {getbyid} from '../requests/product'


function Text() {

    function stripHtmlTags(html) {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
      }

      const createMarkup = (html) => {
        return { __html: html };
      };

    const[blog,setblog]=useState([])
    let navigate = useNavigate();
    const param=useParams()

    useEffect(()=>{

            console.log(param.id)
            console.log(blog)
            getbyid(param.id)
                .then((data) => {
                    console.log(data)
                    setblog(data)
                    console.log('Product posted successfully:', data);
                   
                })
                .catch((error) => {
                    console.error(error);
                    alert("Blog kaydedilemedi")
                });

        






    })
   

  return (
    <div className='row'>
    <div className='col-8'>
      <div className='container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <div style={{fontSize:"35px",marginTop:"5rem",fontStyle:"italic"}}>{blog.name}</div>
    </div>
     <div className='container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop:"100px" }}>
    <div dangerouslySetInnerHTML={createMarkup(blog.aciklama)} />
    </div>
    </div>
    <div className='col-4'>
    <img src="https://images.pexels.com/photos/8144625/pexels-photo-8144625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    <img src="https://images.pexels.com/photos/8144625/pexels-photo-8144625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  )
}

export default Text