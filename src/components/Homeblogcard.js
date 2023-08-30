import React from 'react'
import { Link} from "react-router-dom";

function Homeblogcard(props) {
    return (
        
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="product-type-container">
                    <div className="product-type-overlay">
                    
                 

                        <div className="product-type-info">
                            <i className="fa fa-search fa-2x gold-text"></i>
                            <Link className='gold-text text-uppercase' style={{textDecoration:"none"}} to={`/text/${props.urun._id}`}>Oku</Link>
                           
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