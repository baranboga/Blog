import React, { useEffect, useState } from 'react';

function Bloglistcard(props) {
  const [url, setUrl] = useState();
  const [url2, setUrl2] = useState();
  const [url3, setUrl3] = useState();

  useEffect(() => {
    const encodedImageUrl = encodeURIComponent(props.urun.imageUrl);
    const encodedImageUrl2 = encodeURIComponent(props.urun.imageUrliki);
    const encodedImageUrl3 = encodeURIComponent(props.urun.imageUrluc);
    setUrl(encodedImageUrl);
    setUrl2(encodedImageUrl2);
    setUrl3(encodedImageUrl3);
  }, []);

  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th style={{ width: "50px" }}>id</th>
            <th style={{ width: "150px" }}>resim</th>
            <th>baslik</th>
            <th>acıklama</th>
            <th style={{ width: "130px" }}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.urun.id}</td>
            <td>
              <img src={props.urun.imageUrl} className="img-fluid" alt="" />
            </td>
            <td>{props.urun.name}</td>
            <td>
              {/* Use dangerouslySetInnerHTML to render formatted content */}
              <div dangerouslySetInnerHTML={createMarkup(props.urun.aciklama)} />
            </td>
            <td>
              <a className="btn btn-sm btn-primary" href={`/blogupdate/${props.urun._id}/${url}/${url2}/${url3}/${props.urun.name}/${encodeURIComponent(props.urun.aciklama)}/${props.urun.ustbaslik}`}>edit</a>
              <a className="btn btn-sm btn-danger" href={`/blogsil/${props.urun._id}/${props.urun.name}`}>delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Bloglistcard;
