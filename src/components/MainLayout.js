import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import { useSelector } from 'react-redux'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { selectKeyword, } from '../requests/slice';
import { FaShoppingBasket } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import logo from '../images/3.jpeg';









export default function MainLayout() {
    const [key, setKey] = useState()
    let navigate = useNavigate()


    useEffect(()=>{
        let admin = localStorage.getItem('admin');
        setKey(admin)
       

        $(document).ready(function(){

            /* Mobile menu */
            $('.mobile-menu-icon').click(function(){
                $('.templatemo-nav').slideToggle();				
            });
        
            $( window ).resize(function() {
                if($( window ).width() > 767) {
                    $('.templatemo-nav').show();	
                } else {
                    $('.templatemo-nav').hide();	
                } 
            });
        
          // http://stackoverflow.com/questions/2851663/how-do-i-simulate-a-hover-with-a-touch-in-touch-enabled-browsers
          $('body').bind('touchstart', function() {});
        
        });
    })
  



    return (



        <div>
            <div className="templatemo-container">
                <div className="templatemo-block-left">
                    <div className="templatemo-header-left">
                        <div className="templatemo-header-text-wrap">
                            <div className="templatemo-header-text">
                                <hr className="templatemo-header-hr" />
                                <p className="text-uppercase templatemo-slogan">Rıza Baran Boğa</p>
                            </div>
                        </div>
                        <div className="templatemo-header-left-overlay"></div>
                        <div className="templatemo-social templatemo-gray-bg">
                            <ul>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://github.com/baranboga"><i className="fa fa-github"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/riza-baran-boga-115818205/?originalSubdomain=tr"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="templatemo-block-right">
                    <div className="templatemo-header-right">
                        <div className="templatemo-header-right-overlay"></div>
                        <div className="mobile-menu-icon">
                            <i className="fa fa-bars"></i>
                        </div>
                        <nav className="templatemo-nav">
                            <ul className="text-uppercase">
                                <li><NavLink activeClassName="active" style={{ fontSize: "15px", textDecoration:"none" }} to="/">Anasayfa</NavLink></li>
                                <li><NavLink activeClassName="active" style={{ fontSize: "15px", textDecoration:"none"  }} to="/about">Hakkımda</NavLink></li>
                                <li><NavLink activeClassName="active" style={{ fontSize: "15px", textDecoration:"none"  }} to="/blog">Blog</NavLink></li>
                                <li><NavLink activeClassName="active" style={{ fontSize: "15px", textDecoration:"none"  }} to="/contact">İletişim</NavLink></li>
                                {key&&<li><NavLink style={{ fontSize: "15px", textDecoration:"none"  }} to="/admin">Admin</NavLink></li>}
                                {key&&<li><NavLink style={{ fontSize: "15px", textDecoration:"none"  }} to="/bloglist">Bloglistesi</NavLink></li>}
                                {key&&<li><NavLink activeClassName="active" onClick={(()=>{

                                    localStorage.clear()
                                    navigate("/")
                                    

                                })} style={{ fontSize: "15px", textDecoration:"none"  }} to={"/"} >Çıkış</NavLink></li>}
                                
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>


            <Outlet />

            
            <div className="templatemo-dark-bg">
                <div className="container" />
                <div className="row">
                    <div className="col-lg-12 text-center">
                   
                        <hr className="templatemo-about-hr" />
                        <p className="gray-text about-us-text" style={{fontFamily:'cursive',fontSize:"1.5rem"}}>serius est quam cogitas...</p>
                    </div>
                </div>
            </div>
            <div />


            <footer className="text-center">
                <p className="text-uppercase">
                    Copyright &copy; Rıza Baran Boğa
                </p>
            </footer>




        </div>

    )
}
