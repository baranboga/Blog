import React, { useEffect, useState } from "react";
import $ from "jquery";
import { useSelector } from "react-redux";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { selectKeyword } from "../requests/slice";
import { FaShoppingBasket } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import logo1 from "../images/logo.png";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function MainLayout() {
  const [key, setKey] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    let admin = localStorage.getItem("admin");
    setKey(admin);
  });

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link  to={"/"} className="nav-link">AnaSayfa</Link>
            </li>
            <li className="nav-item active">
              <Link to={"/create"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/index"} className="nav-link">
                Records
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <nav class="nav">
        <div class="container">
          <div class="logo">
            <div className="row"></div>
          </div>
          <div id="mainListDiv" class="main_list">
            <ul class="navlinks">
              <li>
                <Link to="/" >AnaSayfa</Link>
              </li>
              <li>
                <Link  to="/about" >Hakkımda</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">İletişim</Link>
              </li>

              {key && (
                <div>
                  <li>
                    <Link to="/admin">Blog Ekle</Link>
                  </li>
                  <li>
                    <Link to="/bloglist">Blog Listesi</Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => {
                        localStorage.clear();
                      }}
                      to="/"
                    >
                      Çıkış
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
          <span class="navTrigger">
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>

      <section className="home">
        <div>
          <img src={logo1} alt="" style={{ height: "333px", width: "300px" }} />
        </div>
      </section>

      <Outlet />

      <header></header>

      <main></main>

      <footer className="footer" style={{ marginTop: "55px" }}>
        <div className="footer__addr row">
          <div className="col-6">
            <img
              src={logo1}
              style={{ width: "200px", height: "200px" }}
              alt=""
            />
          </div>
          <div className="col-6">
            <h2>Contact</h2>
          </div>
        </div>

        <div class="legal">
          <p>&copy; 2023 Something. All rights reserved.</p>
        </div>
      </footer>
      <div />
    </div>
  );
}
