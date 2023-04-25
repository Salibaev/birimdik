import axios from "axios";
import { useState } from "react";
import Footer from "./footer";
import Nav from "./navbar";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React from 'react';
import { auth } from "../firebase/firebase-config";
import { useEffect } from "react";
import firebase from "firebase";
// import GoogleLogin from "react-google-login";
import { GoogleLogin } from '@leecheuk/react-google-login'
import { gapi } from 'gapi-script';
const clientId = '806199593777-9nsuk0sv1rroo6tkrmr5641u7e3td4fp.apps.googleusercontent.com';
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const Registr = () => {

  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState();
  const [avatar, setAvatar] = useState();
  const [numbers, setNumbers] = useState();
  const [code, setCode] = useState();
  const [uid, setUid] = useState();
  const [uid2, setUid2] = useState();
  const [final, setFinal] = useState();
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [city, setCity] = useState(null);
  const [style1, setStyle1] = useState(false);
  const [product, setProduct] = useState(null);
  const [product2, setProduct2] = useState(null);
  const [logged, setLogged] = useState(false);
  const [google_id, setGoogle_id] = useState(null);


  const local = localStorage.getItem('token');
  const Logged = () => {
    if (local != null) {
      setLogged(true);
    }
  }

  const fetchProduct2 = async () => {
    const post = {
      id: numbers,
    };
    const data = await axios({
      method: 'get',
      params: post,
      url: 'http://api.com/birimdik/users4'
    });
    console.log(data);
    if (data.data.status == 200) {
      alert('Такой номер существует');
    } else {
      console.log("Регистрация");
      register();
    }

  }

  const fetchProduct = async () => {
    const post = {
      id: numbers,
    };
    const data = await axios({
      method: 'get',
      params: post,
      url: 'http://api.com/birimdik/users2'
    });
    console.log(data);

    if (data.data.status == 200) {
      setProduct2(data.data.users2);
      Logged();
      console.log(data.data.users2[0].id);
      localStorage.setItem('token2', data.data.users2[0].id || product2[0].id);
      localStorage.setItem('token', data.data.users2[0].id || product2[0].id);
      console.log(data.data.users2[0].id);
      window.location.href = 'registr2/' + data.data.users2[0].id;

    } else {
      console.log(data);

    }

  }

  const fetchProduct3 = async () => {
    const post = {
      id: login,
    };
    const data = await axios({
      method: 'get',
      params: post,
      url: 'http://api.com/birimdik/users_login'
    });
    console.log(data);
    if (data.data.status == 200) {
      alert('Такой логин существует');
    } else {
      console.log("Регистрация");
      reg2();
    }

  }

  const fetchProduct4 = async () => {
    const post = {
      id: login,
    };
    const data = await axios({
      method: 'get',
      params: post,
      url: 'http://api.com/birimdik/users_login'
    });
    console.log(data);

    if (data.data.status == 200) {
      setProduct2(data.data.users_login);
      console.log(data.data.users_login[0].id);
      localStorage.setItem('token2', data.data.users_login[0].id);
      localStorage.setItem('token', data.data.users_login[0].id);
      localStorage.setItem('login', data.data.users_login[0].login);
      console.log(data.data.users_login[0].id);
      Logged();
      window.location.href = 'registr2/' + data.data.users_login[0].id;

    } else {
      console.log("error registr2");
    }

  }

  const register = async () => {
    auth.signInWithPhoneNumber(`+996${numbers}`, window.verify).then((result) => {
      console.log('res', result);
      setFinal(result);
      fetchStyle1();
    }).catch((error) => {
      alert('err', error);
    })
  }


  const fetchStyle1 = async () => {
    setStyle1(true);
  }
  const confirmOtp = () => {
    console.log('otp');
    if (code === null || final === null)
      return;
    final.confirm(code).then((result) => {
      console.log('res', result);
      if (result.user.uid != null) {
        setUid(result.user.uid);
        setProduct(result);
        console.log('uid', uid);
        localStorage.setItem('number', numbers);
      }
      if (uid != null) {
        reg();
      }
    }).catch((err) => {
      console.log('err', err);
    })

  }
  const responseGoogle = async (response) => {
    
    setGoogle_id(response.profileObj.googleId);
      setLogin(response.profileObj.email);
      setName(response.profileObj.name);
      setSurname(response.profileObj.familyName);
    console.log("google response", response);
    const email = response.profileObj.email;
    const name = response.profileObj.name;
    const uid2 = response.profileObj.googleId;
    
    console.log('datas', email, name, uid2);
    if (response != null) {
      if(login != null){
        fetchProduct3();
      }
      // setAvatar(response.profileObj.imageUrl);
      console.log(response.profileObj.familyName);
    }
  }
  const onFailure = (response) => {
    console.log("Failure!", response);
  }

  const reg2 = async () => {
    const params = {
      'login' : login,
      'password' : password,
      'numbers' : numbers,
      'name' : name,
      'surname' : surname,
      'city' : city,
      'uid' : uid,
      'google_id' :google_id,
    }
    console.log('params',params)
    const data = await axios({
      method: 'post',
      params: params,
      url: 'http://api.com/birimdik/registr',
      // headers: { "Content-Type": "multipart/form-data" }

    });
    console.log(params)
    if (data != null) {
      if (data.status == 200) {
        fetchProduct4();
        console.log('success');
      } else {
        alert('fetchproduct не запущен!')
      }

    }
  }



  const reg = async () => {

    const params = {
      'login' : login,
      'password' : password,
      'numbers' : numbers,
      'name' : name,
      'surname' : surname,
      'city' : city,
      'uid' : uid,
      'google_id' :google_id,
    }
    console.log('params',params)
    const data = await axios({
      method: 'post',
      params: params,
      url: 'http://api.com/birimdik/registr_form',
      // headers: { "Content-Type": "multipart/form-data" }

    });
    console.log(params)
    if (data != null) {
      if (data.status == 200) {
        fetchProduct();
        console.log('success');
      } else {
        alert('fetchproduct не запущен!')
      }

    }
  }
  useEffect(() => {
    window.verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    window.verify.render();
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);
  }, [])
  return (
    <>
      <div className="container ">
        <div class="row bgbg">
          <Nav />
          <div className="col-md-4 ">

          </div>

          <div class="col-md-4 card mt-5">
            <div class="row ">
              <div className='col-md-12 '>
                <h2 style={{ color: '#2d2d7f' }}>Регистрация</h2>
              </div>
              <div className="col-md-4 col-12 text-center">
              </div>
              <div className="col-md-12">



                <div className="row ">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <div className="row">

                      <div className="col-md-3 mt-2">
                        <img src="https://img.freepik.com/free-icon/google_318-278809.jpg" style={{ width: '40px', height: '40px' }}></img>
                      </div>
                      <div className="col-md-3 mt-2">
                        <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png" style={{ width: '40px', height: '40px' }}></img>
                      </div>
                      <div className="col-md-3 mt-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/3938/3938028.png" style={{ width: '40px', height: '40px' }}></img>
                      </div>
                      <div className="col-md-3 mt-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Ok_new_logo.png?20150213095340" style={{ width: '40px', height: '40px' }}></img>
                      </div>

                    </div>
                    {/* <Input onChange={(e) =>{setPassword(e.target.value)}} /> */}
                  </div>

                  <div className="col-md-12 text-center mt-3">
                    <label>
                      Номер телефона:
                    </label>
                  </div>
                  <div className="col-md-2">
                    <Select
                      onChange={''}
                      defaultValue="+996"
                      placeholder='220404797'
                      name="currency"
                      id="currency"
                      style={{
                        width: 80,
                        marginLeft: '17px'
                      }}
                      options={[
                        {
                          value: +996,
                          label: '+996',
                        }
                      ]}
                    />
                  </div>


                  <div className="col-md-1"></div>

                  <div className="col-md-7">

                    <Input placeholder="XXX 12 34 56" onChange={(e) => { setNumbers(e.target.value) }} />
                  </div>
                  <div className="col-md-2"></div>

                  <div className="col-md-12 text-center mt-2">
                    <GoogleLogin
                      clientId={clientId}
                      buttonText="Войти через Google"
                      onSuccess={responseGoogle}
                      // onClick={responseGoogle}
                      onFailure={onFailure}
                      cookiePolicy={'single_host_origin'}
                      isSignedIn={false}
                    />
                  </div>

                  <div className="col-md-4 mt-3">
                    {style1 ?
                      <>
                        <Input placeholder="Код из СМС" onChange={(e) => { setCode(e.target.value) }} />
                        <div className="col-md-12 mt-3">
                          <Form.Item >
                            <Button type="secondary" onClick={confirmOtp} >OK</Button>
                          </Form.Item>
                        </div>
                      </>
                      : <></>
                    }

                  </div>
                  <div className="col-md-12 text-center">
                    <label>
                      {/* Пароль:  */}
                    </label>
                  </div>

                  <div className="col-md-1"></div>



                  <div className="col-md-2"></div>

                </div>

              </div>


              <div className="col-md-12 mt-3">
                <Form.Item >
                  <Button type="primary" style={{ float: 'right' }} onClick={fetchProduct2} >OK</Button>
                </Form.Item>
              </div>
              <div className="col-md-12">
                <Form.Item label="Switch" valuePropName="checked">
                  <Switch />
                </Form.Item>
                <div id="recaptcha-container"></div>
              </div>

              <div className="col-md-6">

              </div>
            </div>
          </div>

          <div style={{ marginTop: '250px' }}>
            <Footer />
          </div>

        </div>
      </div>
    </>
  )
}
export default Registr;