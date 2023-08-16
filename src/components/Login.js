import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { hover } from '@testing-library/user-event/dist/hover';
import { userauth } from '../requests/login';


// type resultType = {
//     token: string;
//     isAuthenticated: boolean;
// }

var login = false;

export default function Login() {
    let navigate = useNavigate();
    const [user, setUser] = useState({});
    const [login, setlogin] = useState(false);

    const kullanicigiris=(()=>{

        console.log(user)

        userauth(user)
        .then((data) => {
            console.log('Product posted successfully:', data);
            localStorage.setItem('token', data);
            localStorage.setItem('user', user.email);
            localStorage.setItem('admin', "true");
            setlogin(true)
            setTimeout(() => {
                
                navigate("/")
            }, 1000);

        })
        .catch((error) => {
            console.error(error);
            alert("hatalı kullanıcı adı veya şifre")
        });

        
// email
// "baraboga07@gmail.com"
// password
// "$2b$10$2HfuypTOqf/kH3rTwWTFUOBeO8cS1ylVxqoKQb./FA41b1lbAR1gq"



    })

    return (
        <>
            <div className='row d-flex align-content-center justify-content-center mt-5' >
                <div className='row d-flex align-item-center  justify-content-center mt-5'>
                    <div className="col-6 d-flex align-item-center text-center justify-content-center">
                        <form className="text-center" >
                            <h1 className="h3 mb-3 fw-normal" style={{ color: "#3F054C" }}> <i className="fa-solid fa-right-to-bracket " style={{ color: "#0c2a2f" }}></i> Giriş Yap</h1>
                            <div className="form-floating">
                                <input type="text"
                                    className="form-control mb-2"
                                    id="girisKullaniciAdi"
                                    placeholder="mail"
                                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                                    required />
                                <label htmlFor="floatingInput">Mail adresi</label>
                            </div>
                            <div className="form-floating">
                                <input type="password"
                                    className="form-control mb-2"
                                    id="girisSifre"
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    placeholder="Password"
                                    required />
                                <label htmlFor="floatingPassword">Şifre</label>
                            </div>

                            {login && <p style={{ color: "green" }}>Başarıyla giriş yaptınız. Yönlendiriliyorsunuz...</p>}


                            <button className="w-100 btn btn-lg btn-primary" style={{ backgroundColor: "#0c2a2f", color: "white" }} onClick={((e) => {

                                e.preventDefault()
                                kullanicigiris()


                            })} id="btnGirisYap"   >Giriş Yap</button>

                        </form>



                    </div>

                </div>
                <div className="row d-flex align-item-center justify-content-center mt-3'">
                    <div className="col-6 d-flex align-item-center   justify-content-center'">


                    </div>
                </div>
                <div className='row d-flex align-item-center  justify-content-center mt-3'>
                    <div className='col-6 d-flex align-item-center text-center justify-content-center'>

                        <NavLink className='nav-link mx-2 ' to={'/singin'} style={{ color: "black", fontSize: '20px' }}>Hesabınız yok mu?</NavLink>




                    </div>

                </div>


            </div>

        </>

    )
}
