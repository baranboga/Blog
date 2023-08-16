import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { updateproducts } from '../requests/product';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Blogupdate() {

    let navigate = useNavigate()
    const param = useParams()
    const [product, setProduct] = useState({
        _id: '',
        name: '',
        aciklama: '',
        imageUrl: '',
        ustbaslik: '',
    });
    const [id, setid] = useState(

    );





    useEffect(() => {

        setid(param.id)

        setProduct({
            name: param.name,
            aciklama: param.aciklama,
            imageUrl: param.imageUrl,
            ustbaslik: param.ustbaslik,
        });
    }, [param]);


    const urunupdate = (() => {

        let token = localStorage.getItem('token');

        if (token == null) {

            navigate("/login")
        }
        else {
            updateproducts(product, id, token)
                .then((data) => {
                    console.log('Product posted successfully:', data);
                    navigate("/bloglist")
                })
                .catch((error) => {
                    console.error(error);
                    alert("Blog kaydedilemedi")
                });

        }


    })

    return (


        <div class="container mt-3">
            <form>

                <div class="row my-5 gx-5">

                    <div class="col-md-10">

                        <input type="hidden" name="_id" value={product._id} onChange={((e) => {
                            setProduct({ ...product, _id: e.target.value });
                        })} />

                        <input type="hidden" name="imageUrl" value={product.imageUrl} onChange={((e) => {
                            setProduct({ ...product, imageUrl: e.target.value })
                        })} />
                        <div class="row mb-3">
                            <label for="baslik" class="col-sm-1 col-form-label">Name</label>
                            <div class="col-sm-11">
                                <input type="text" class="form-control" id="baslik" name="name" value={product.name} onChange={((e) => {
                                    setProduct({ ...product, name: e.target.value })
                                })} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="aciklama" className="col-sm-2 col-form-label">
                                Açıklama
                            </label>
                            <div className="col-sm-8">
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={product.aciklama} // Set initial data value
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setProduct({ ...product, aciklama: data });
                                    }}
                                />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="altbaslik" class="col-sm-1 col-form-label">Resimurl</label>
                            <div class="col-sm-11">
                                <input type="text" class="form-control" id="url" name="imageUrl" value={product.imageUrl} onChange={((e) => {
                                    setProduct({ ...product, imageUrl: e.target.value })
                                })} />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="aciklama" class="col-sm-1 col-form-label">ustbaslik</label>
                            <div class="col-sm-11">
                                <textarea id="editor" name="ustbaslik" class="form-control" rows="10" value={product.ustbaslik} onChange={((e) => {
                                    setProduct({ ...product, ustbaslik: e.target.value })
                                })}></textarea>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-sm-11 offset-sm-1">
                                <button class="btn btn-primary" onClick={((e) => {

                                    e.preventDefault()
                                    urunupdate()


                                })}>Kaydet</button>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-2">
                        <div class="row">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="anasayfa" name="anasayfa" />
                                <label class="form-check-label" for="anasayfa">
                                    Anasayfa
                                </label>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="onay" name="onay" />
                                <label class="form-check-label" for="onay">
                                    Onay
                                </label>
                            </div>
                        </div>

                        <div class="row border-top pt-3">

                            <div class="form-check">
                                <input class="form-check-input"
                                    type="checkbox"
                                    id="category_<%= category.id %>"
                                    name="categories[]"
                                    value="<%= category.id %>" />
                                <label class="form-check-label" for="category_<%= category.id %>">
                                    Category Label
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>



    )
}

export default Blogupdate