import React, { useEffect, useState } from 'react'
import { checkToken } from '../requests/login';
import { Navigate, useNavigate } from 'react-router-dom';
import { getProducts, productType, postproducts } from '../requests/product';
import $ from 'jquery';
import Homeblogcard from './Homeblogcard';








export default function Home() {
    let navigate = useNavigate();
    const [key, setkey] = useState();
    const [products, setProducts] = useState([]);
    const [allproducts, setallProducts] = useState([]);
    const resimyolu = "../images/1.jpeg";



    useEffect(() => {

        getProducts(products)
        .then((data) => {

            setallProducts(data)
        })
        .catch((error) => {
            console.error(error);
        });


    });







    return (
        <>

            <section className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="text-uppercase">New Arrivals</h2>
                        <hr className="templatemo-section-header-hr" />
                        <p className="text-uppercase templatemo-section-subheader">View All Products</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center" style={{ marginRight: "300px", marginBottom: "100px" }}>
                        <div className="new-arrival-container">
                            <div className="new-arrival-overlay">
                                <h3 className="text-uppercase new-arrival-title">
                                    <span className="font-script">Myra</span>
                                    <span className="smaller-text">10.10.2020</span>
                                </h3>
                            </div>
                            <img src="https://images.pexels.com/photos/16692240/pexels-photo-16692240/free-photo-of-kent-peyzaj-yaz-bina.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ height: "400px" }} />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                        <div className="new-arrival-container">
                            <div className="new-arrival-overlay">
                                <h3 className="text-uppercase new-arrival-title">
                                    <span className="font-script">Antiphellus antik tiyatrosu</span>
                                    <span className="smaller-text">17.10.2020</span>
                                </h3>
                            </div>
                            <img src="https://images.pexels.com/photos/8389217/pexels-photo-8389217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ height: "400px" }} />
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
                            <p className="text-uppercase templatemo-section-subheader">Tüm yazılar</p>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
                            <div className="row">

                                {

                                    allproducts.slice(0, 4).map((item) => (
                                        <Homeblogcard key={item.id} urun={item}></Homeblogcard>
                                    ))


                                }

                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="gold-border">

                                <div className="product-type-message">
                                    <h3 classNameName="text-uppercase gray-text product-type-message-title"><b>mauris vitae erat consequat auctor eu in elit.</b></h3>
                                    <p className="gray-text"><a href="http://www.templatemo.com/preview/templatemo_456_luxury_gold">Luxury Gold</a> is free responsive template from templatemo.com website. Feel free to download, customize and use this template for your websites. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                                    <p className="gray-text">Sed non  mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
                                    <p className="gray-text">Vivamus condimentum vel sem sed sagittis. Duis non sapien egestas, eleifend felis vel, consequat quam.</p>
                                    <a href="#" className="text-uppercase gold-text"><i>Mauris in erat justo</i></a>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>







        </>







    )
}





{/* <form action="">

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
            </div> */}
