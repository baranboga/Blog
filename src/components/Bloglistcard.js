import React, { useEffect, useState } from 'react';

function stripHtmlTags(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

function Bloglistcard(props) {
  const [url, setUrl] = useState();

  useEffect(() => {
    const encodedImageUrl = encodeURIComponent(props.urun.imageUrl);
    setUrl(encodedImageUrl);
  }, []);

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
            <td>{stripHtmlTags(props.urun.aciklama)}</td>
            <td>
              <a className="btn btn-sm btn-primary" href={`/blogupdate/${props.urun._id}/${url}/${props.urun.name}/${stripHtmlTags(props.urun.aciklama)}/${props.urun.ustbaslik}`}>edit</a>
              <a className="btn btn-sm btn-danger" href={`/blogsil/${props.urun._id}/${props.urun.name}`}>delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Bloglistcard;
