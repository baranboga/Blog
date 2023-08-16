import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getProductById } from '../requests/product';

function Text() {

    const[blog,setblog]=useState([])
    let navigate = useNavigate();

    useEffect(()=>{

        let token = localStorage.getItem('token');
        
        

        if (token == null) {

            navigate("/login")
        }
        else {
            getProductById(param.id, token)
                .then((data) => {
                    setblog(data)
                    console.log('Product posted successfully:', data);
                    navigate("/bloglist")
                })
                .catch((error) => {
                    console.error(error);
                    alert("Blog kaydedilemedi")
                });

        }






    })
    const param=useParams()

  return (
    <div>{blog.aciklama}</div>
  )
}

export default Text