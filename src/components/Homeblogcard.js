import React from 'react'

function Homeblogcard(props) {
    return (
        
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="product-type-container">
                    <div className="product-type-overlay">
                        HELLO
                        <div className="product-type-info">
                            <i className="fa fa-search fa-2x gold-text"></i>
                            <h3 className="gold-text text-uppercase">Okumak için</h3>
                            <p className="text-uppercase white-text">o</p>
                        </div>
                    </div>
                    <div>
                    <img src={props.urun.imageUrl} style={{width:"300px",height:"300px",objectFit:'cover'}}  />
                    </div>
                </div>
            </div>


        
    )
}

export default Homeblogcard