import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { deleteproducts, updateproducts } from '../requests/product';

function Blogsil() {

  const [id, setid] = useState();
  const param = useParams()
  let navigate=useNavigate()

  useEffect(()=>{


    setid(param.id)


  })


  const blogsil=(()=>{

    setid(param.id)

    let token = localStorage.getItem('token');

        if(token==null){
    
          navigate("/login")
        }
        else{
          deleteproducts(id,token)
          .then((data) => {
              console.log('Product posted successfully:', data);
              navigate("/bloglist") 
          })
          .catch((error) => {
              console.error(error);
              alert("Blog silinemedi")
          });
    
        }

  })

  return (
    <div>

      <h1>{param.ustbaslik}</h1>
      <div class="container mt-3">
        <div class="row">
          <div class="col-md-12 mt-3 text-center">
            <div class="alert alert-secondary">
              <p class="mb-3">
                {
                  <h2>{`${param.name} isimli ürünü silmek istiyor musnuz`}</h2>
                }

              </p>
              <form >
                <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                <input type="hidden" name="blogid" value="<%= blog.id %>" />
                <button class="btn btn-danger" onClick={((e)=>{
                  
                  e.preventDefault()
                  blogsil()

                })}>Evet</button>
                <NavLink style={{ fontSize: "15px" }} to="/bloglist">Hayır</NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Blogsil