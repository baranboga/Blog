import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, sil, increment } from '../requests/slice';
import { FaTrash } from 'react-icons/fa';
import { getProducts, productType, postproducts } from '../requests/product';
import Blogcard from './Blogcard';
import $ from 'jquery';




export default function Blog() {
  const [products, setproducts] = useState([]);

 

  useEffect(() => {
    /* Mobile menu */
    $('.mobile-menu-icon').click(function () {
      $('.templatemo-nav').slideToggle();

    });

    $(window).resize(function () {
      if ($(window).width() > 767) {
        $('.templatemo-nav').show();
      } else {
        $('.templatemo-nav').hide();
      }
    });

    $('body').bind('touchstart', function () { });

    getProducts()
      .then((data) => {

        setproducts(data)
        console.log(products)
      })
      .catch((error) => {
        console.error(error);
      });
  });




  return (
    (
      <div>
        <div className="container">
          <div className="row">
            <section className="col-lg-8 col-md-8">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="text-uppercase">Latest News</h2>
                  <hr className="templatemo-section-header-hr" />
                  <p className="text-uppercase templatemo-section-subheader margin-bottom-0">View All Posts</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">

                  {
                    products.map((item)=>(
                      <Blogcard key={item.id} urun={item}></Blogcard> 
                    ))

                  }
                  
             
             
                
            
                </div>
              </div>
              <div className="row">
                pagenation
              </div>
            </section>
            <aside className="col-lg-4 col-md-4 templatemo-blog-post-aside">
              <div className="aside-block">
                <h4 className="text-uppercase"><i>Categories</i></h4>
                <hr className="gold-hr" />
                <ul className="category-list">
                  <li><a href="#">Hukuk</a></li>
                  <li><a href="#">Yazılım</a></li>
                  <li><a href="#">Gezi</a></li>
             
                </ul>
              </div>
              <div className="aside-block">
                {/* Diğer bloklar */}
              </div>
              <div className="aside-block">
                {/* Diğer bloklar */}
              </div>
            </aside>
          </div>
        </div>
      </div>




    )
  )
}
