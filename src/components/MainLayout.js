import React, { useEffect, useState } from "react";
import $ from "jquery";
import { useSelector } from "react-redux";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { selectKeyword } from "../requests/slice";
import { FaShoppingBasket } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import logo from "../images/3.jpeg";

export default function MainLayout() {
  const [key, setKey] = useState();
  let navigate = useNavigate();


  a

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            {/* nav-link */}
            <ul class="navbar-nav">
              <li>
                <Link activeClassName="active" to="/"
                style={{color:"black",textDecoration:"none",marginRight:"10px"}}>
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link className="navbar-nav" to="/about"
                 style={{color:"black",textDecoration:"none",marginRight:"10px"}}>
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="/blog"
                 style={{color:"black",textDecoration:"none",marginRight:"10px"}}>
                  Blog
                </Link>
              </li>
              <li>
                <Link activeClassName="active" to="/contact"
                 style={{color:"black",textDecoration:"none",marginRight:"10px"}}>
                  İletişim
                </Link>
              </li>
              {key && (
                <li>
                  <NavLink
                     style={{color:"black",textDecoration:"none",marginRight:"10px"}}
                    to="/admin"
                  >
                    Admin
                  </NavLink>
                </li>
              )}
              {key && (
                <li>
                  <NavLink
                    style={{color:"black",textDecoration:"none",marginRight:"10px"}}
                    to="/bloglist"
                  >
                    Bloglistesi
                  </NavLink>
                </li>
              )}
              {key && (
                <li>
                  <NavLink
                    activeClassName="active"
                    onClick={() => {
                      localStorage.clear();
                      navigate("/");
                    }}
                    style={{color:"black",textDecoration:"none"}}
                    to={"/"}
                  >
                    Çıkış
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/* <div className="templatemo-container">
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
            </div> */}

      <Outlet />

      <div className="templatemo-dark-bg">
        <div className="container" />
        <div className="row">
          <div className="col-lg-12 text-center">
            <hr className="templatemo-about-hr" />
            <p
              className="gray-text about-us-text"
              style={{ fontFamily: "cursive", fontSize: "1.5rem" }}
            >
              serius est quam cogitas...
            </p>
          </div>
        </div>
      </div>
      <div />

      <footer className="text-center">
        <p className="text-uppercase">Copyright &copy; Rıza Baran Boğa</p>
      </footer>
    </div>
  );
}
