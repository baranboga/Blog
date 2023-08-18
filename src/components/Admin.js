import React, { useState } from 'react';
import { postproducts } from '../requests/product';
import { useNavigate } from 'react-router';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Admin() {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const urunkaydet = () => {
    console.log(product)
    let token = localStorage.getItem('token');
    if (token == null) {
      navigate('/login');
    } else {
      postproducts(product, token)
        .then((data) => {
          console.log('Product posted successfully:', data);
          navigate('/bloglist');
        })
        .catch((error) => {
          console.error(error);
          alert('Blog kaydedilemedi');
        });
    }
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12 mt-3">
            <div className="alert alert-<%= message.class %>"></div>
            <form method="post" action="">
              <div className="row mb-3">
                <label htmlFor="name" className="col-sm-2 col-form-label">
                  Başlık
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) =>
                      setProduct({ ...product, name: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="ustbaslik" className="col-sm-2 col-form-label">
                  Alt Başlık
                </label>
                <div className="col-sm-8">
                  <textarea
                    name="ustbaslik"
                    className="form-control"
                    rows="5"
                    onChange={(e) =>
                      setProduct({ ...product, ustbaslik: e.target.value })
                    }
                  ></textarea>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="aciklama" className="col-sm-2 col-form-label">
                  Açıklama
                </label>
                <div className="col-sm-8">
                  <CKEditor
                    editor={ClassicEditor}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setProduct({ ...product, aciklama: data });
                    }}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="resim" className="col-sm-2 col-form-label">
                  Resim
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="resim"
                    name="imageUrl"
                    onChange={(e) =>
                      setProduct({ ...product, imageUrl: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="resim2" className="col-sm-2 col-form-label">
                  Resim2
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="resim2"
                    name="imageUrliki"
                    onChange={(e) =>
                      setProduct({ ...product, imageUrliki: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="resim3" className="col-sm-2 col-form-label">
                  Resim3
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="resim3"
                    name="imageUrluc"
                    onChange={(e) =>
                      setProduct({ ...product, imageUrluc: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-8 offset-sm-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="anasayfa"
                      name="anasayfa"
                    />
                    <label className="form-check-label" htmlFor="anasayfa">
                      Anasayfa
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-8 offset-sm-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="onay"
                      name="onay"
                    />
                    <label className="form-check-label" htmlFor="onay">
                      Onay
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-8 offset-sm-2">
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      urunkaydet();
                    }}
                    className="btn btn-primary"
                  >
                    Kaydet
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
