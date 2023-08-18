import React from 'react';
import { NavLink} from 'react-router-dom'

function Blogcard(props) {
  return (
    <div>
      <article className="templatemo-blog-post">
        <div className="post-img-container">
          <img
            src={props.urun.imageUrl}
            alt="Post 1"
            className="post-img img-responsive"
            style={{ height: "450px", width: "400px" }}
          />
          <div className="templatemo-post-date gold-text">
            <div>
              <div className="text-center date">20</div>
              <div className="text-center">January</div>
            </div>
          </div>
        </div>
        <div className="post-title">
          <h3 className="text-uppercase" style={{ fontSize: "30px" }}>
            {props.urun.name}
          </h3>
        </div>
        <div className="post-meta-data">
          <p className="gold-text">
            <i style={{ fontSize: "20px" }}>{props.urun.ustbaslik}</i>
          </p>
        </div>
        <NavLink activeClassName="active" style={{ fontSize: "15px", textDecoration:"none",color:"black" }} to={`/text/${props.urun._id}`}>Oku
          <i className="fa fa-arrow-circle-o-right fa-2x v-align-middle"></i> 
          </NavLink>
        <hr />
      </article>
    </div>
  );
}

export default Blogcard;
