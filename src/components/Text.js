import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import {getbyid} from '../requests/product'


function Text() {

    function stripHtmlTags(html) {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
      }

    const[blog,setblog]=useState([])
    let navigate = useNavigate();
    const param=useParams()

    useEffect(()=>{

            console.log(param.id)
            
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
    <div>{stripHtmlTags(blog.aciklama)
    
    
    
    
    }</div>
  )
}

export default Text