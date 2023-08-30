import React, { useEffect, useState } from "react";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getProducts, productType, postproducts } from "../requests/product";
import Homeblogcard from "./Homeblogcard";
import logo from "../images/3.jpeg";
import $ from "jquery";
import likya1 from "../images/likya1.jpg";
import likyabaran from "../images/likyabaran.jpg";
import likyamyra from "../images/likyamyra.jpg";


export default function Home() {
  const [products, setProducts] = useState([]);
  const [allproducts, setallProducts] = useState([]);

  useEffect(() => {
    getProducts(products)
      .then((data) => {
        setallProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <>
      <div
        className="w3-content"
        style={{ maxWidth: "1400px", marginTop: "50px" }}
      >
        <div className="w3-row">
          <div className="w3-col l8 s12">
            {/* Blog entry */}
            <div className="w3-card-4 w3-margin w3-white">
              <img src={likya1} alt="Nature" style={{ width: "100%" }} />
              <div className="w3-container">
                <h3>
                  <b>GELİDONYA FENERİ</b>
                </h3>
                <h5>
                 
                  <span className="w3-opacity">Ekim 7, 2021</span>
                </h5>
              </div>
              <div className="w3-container">
                <p>
                  Gelidonya Feneri'nin etkileyici manzarası altında sıralanan
                  adalar, sakin ve turkuaz renkli suların üzerinde mistik bir
                  hava yaratır. Likya Yolu'nun yorgunluğunu unutturan bu adalar,
                  kendinizi keşif dolu bir hikayenin içinde bulmanızı sağlar.
                  Birbirinden farklı büyüklükteki adalar, etkileyici koylar ve
                  gizli plajlar sunar. Sahip oldukları doğal güzellikleri ve
                  sakin atmosferleri ile adeta rüya gibi bir ortam yaratırlar.
                </p>
              </div>
            </div>
            <hr />

            {/* More blog entries can be added here */}
          </div>

          <div className="w3-col l4">
            {/* About Card */}
            <div className="w3-card w3-margin w3-margin-top">
              <img src={likyabaran} style={{ width: "100%" }} alt="Avatar" />
              <div className="w3-container w3-white">
                <h4>
                  <b style={{ fontStyle: "italic" }}>Rıza Baran Boğa</b>
                </h4>
                <p>
                  Bu blog, hem seyahat deneyimlerimi paylaşmak hem de yazılım
                  dünyasındaki öğrenme serüvenlerimi aktarmak için bir platform.
                  Sizleri hem farklı coğrafyalara götürecek hem de kodlamaya
                  dair ipuçları sunacak içeriklerle dolu olacak. Eğer siz de hem
                  dünyayı gezmeyi hem de kod yazmayı seviyorsanız, doğru
                  adrestesiniz demekt
                </p>
                <ul
                  className="d-flex"
                  style={{ listStyleType: "none", padding: 0 }}
                >
                  <li style={{ marginRight: "30px" }}>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      <FaGithub
                        style={{
                          marginRight: "5px",
                          color: "black",
                          fontSize: "30px",
                        }}
                      />
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>

      <section
        className="container"
        style={{ padding: "0", marginTop: "50px" }}
      >
        <div className="row">
          <div
            className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center"
            style={{ marginRight: "300px", marginBottom: "100px" }}
          >
            <div className="new-arrival-container">
              <div className="new-arrival-overlay">
                <h3 className="text-uppercase new-arrival-title">
                  <span className="font-script">Myra</span>
                  <span className="smaller-text">10.10.2020</span>
                </h3>
              </div>
              <img
                src={likyamyra}
                style={{ height: "500px",width:"500px" }}
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
            <div className="new-arrival-container">
              <div className="new-arrival-overlay">
                <h3 className="text-uppercase new-arrival-title">
                  <span className="font-script">
                    Antiphellus antik tiyatrosu
                  </span>
                  <span className="smaller-text">17.10.2020</span>
                </h3>
              </div>
              <img
                src="https://images.pexels.com/photos/8389217/pexels-photo-8389217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{ height: "500px",width:"500px" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="templatemo-gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="text-uppercase">Yazılar</h2>
              <hr className="templatemo-section-header-hr" />
              <p className="text-uppercase templatemo-section-subheader">
                Tüm yazılar
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
              <div className="row">
                {allproducts.slice(0, 4).map((item) => (
                  <Homeblogcard key={item.id} urun={item}></Homeblogcard>
                ))}
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="gold-border">
                <div className="product-type-message">
                  <h3 classNameName="text-uppercase gray-text product-type-message-title">
                    <b>mauris vitae erat consequat auctor eu in elit.</b>
                  </h3>
                  <p className="gray-text">
                    <a href="http://www.templatemo.com/preview/templatemo_456_luxury_gold">
                      Luxury Gold
                    </a>{" "}
                    is free responsive template from templatemo.com website.
                    Feel free to download, customize and use this template for
                    your websites. Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                    consequat ipsum, nec sagittis sem nibh id elit.
                  </p>
                  <p className="gray-text">
                    Sed non mauris vitae erat consequat auctor eu in elit.
                    className aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Mauris in erat
                    justo.
                  </p>
                  <p className="gray-text">
                    Vivamus condimentum vel sem sed sagittis. Duis non sapien
                    egestas, eleifend felis vel, consequat quam.
                  </p>
                  <a href="#" className="text-uppercase gold-text">
                    <i>Mauris in erat justo</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

{
  /* <form action="">

                <li>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' id='name' onChange={((e) => {

                        setProducts({ ...products, name: e.target.value })

                    })} />
                </li>
                <li>
                    <label htmlFor="price">Price</label>
                    <input type="number" name='price' id='price' onChange={((e) => {

                        setProducts({ ...products, price: e.target.value })

                    })} />
                </li>
                <li>
                    <label htmlFor="description">Description</label>
                    <input type="text" name='description' id='description' onChange={((e) => {

                        setProducts({ ...products, description: e.target.value })

                    })} />
                </li>
                <li>
                    <label htmlFor="imageurl">İmage</label>
                    <input type="text" name='imageurl' id='imageurl' onChange={((e) => {

                        setProducts({ ...products, imageUrl: e.target.value })

                    })} />
                </li>
                <button onClick={((e) => (

                    e.preventDefault(),
                    yukle()


                ))} type='submit' >Tıkla</button>
            </form>


            <button onClick={urunler}>Urunleri getir</button>

            <div>
                {allproducts.map((item) => (
                    // Burada h3 etiketini döndürmeniz gerekiyor
                    <div>
                        <h3 key={item.id}>{item.imageUrl}</h3>
                        <img src={item.imageUrl} alt="resim" />

                    </div>

                ))}
            </div> */
}
