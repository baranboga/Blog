import React, { useEffect, useState } from 'react'
import Bloglistcard from './Bloglistcard'
import { getProducts, productType, postproducts } from '../requests/product';
import { useNavigate } from 'react-router';


function Bloglist() {


    let navigate=useNavigate()

    const[product,setproduct]=useState([])

    useEffect(() => {

        let token = localStorage.getItem('token');

        if(token==null){
    
          navigate("/login")
        }

        else{

          getProducts()
          .then((data) => {
            setproduct(data)
          })
          .catch((error) => {
            console.error(error);
          });


        }

       
      });
    return (
        <div>
            <div class="container mt-3">
                <div class="row">
                    <div class="col-md-12 mt-3">

                    {
                        product.map((item)=>(

                            <Bloglistcard key={item.id} urun={item} ></Bloglistcard>


                        ))



                    }
                    
                        
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Bloglist