import axios from "axios";
import { useState } from "react";
import Footer from "./footer";
import Nav from "./navbar";
import React from 'react';
import { Button, Modal, Radio, Tabs } from 'antd';
import { Checkbox, Form, Input } from 'antd';
import GoogleLogin from "@leecheuk/react-google-login";
import { gapi } from 'gapi-script';
const clientId = '806199593777-9nsuk0sv1rroo6tkrmr5641u7e3td4fp.apps.googleusercontent.com';

const Vhod = () =>{
  const local = localStorage.getItem('token');
  const [logged, setLogged] = useState(false);

  const Logged = () => {
    if (local != null) {
      setLogged(true);
    }
  }

  const [email2, setEmail2] = useState(null);
  const responseGoogle = async (response) => {
    
    // setGoogle_id(response.profileObj.googleId);
    //   setLogin(response.profileObj.email);
    //   setName(response.profileObj.name);
    //   setSurname(response.profileObj.familyName);
    console.log("google response", response);
    const email = response.profileObj.email;
    setEmail2(response.profileObj.email);
    const name = response.profileObj.name;
    const uid2 = response.profileObj.googleId;
    
    console.log('datas', email, name, uid2);
    if (response != null) {
      if(email != null){
        setEmail2(email);
        fetchProduct3();
      }
      // setAvatar(response.profileObj.imageUrl);
      console.log(response.profileObj.familyName);
    }
  }
  const onFailure = (response) => {
    console.log("Failure!", response);
  }

  const fetchProduct3 = async () => {
    const post = {
      id: email2,
    };
    const data = await axios({
      method: 'get',
      params: post,
      url: 'http://api.com/birimdik/users_login'
    });
    console.log(email2);
    if (data.data.status == 200) {
      localStorage.setItem('token2', data.data.users_login[0].id);
      localStorage.setItem('token', data.data.users_login[0].id);
      localStorage.setItem('login', data.data.users_login[0].login);
      Logged();
      window.location.href = 'registr2/' + data.data.users_login[0].id;
    } else {
      console.log("405");

    }

  }

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
    const [login,setLogin]= useState();
    const [password, setPassword] = useState();    
    const Login = async ()=>{
        const params = {
            'login':login,
            'password':password
        }
        const user = await axios({
            method: 'get',
            url: 'http://api.com/birimdik/users',
            params:params
        });
        console.log('user:',user);
        if(user.data.status == 200){
            localStorage.setItem('token',user.data.user[0].id);
            localStorage.setItem('token2',user.data.user[0].id);
            console.log('token',localStorage.getItem('token'));
            
            window.location.href="/";
        }else{
            alert('Неверный логин или пароль!');
        }
        
    }
    
    console.log('token',localStorage.getItem('token'));
    return(
        <>
        <Nav/>
        <div style={{height:'500px'}}  className="container bgbg">
            <div className="row ">
              <div style={{marginTop:'100px',color:'white'}} className="col-md-11 text-center">
                <h3 style={{color:'white'}}>Вход</h3>
              </div>
            <div  className="col-md-3"></div>
            
            <div className="col-md-4">
            <Form
            
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
     
        label="Логин"
        name="login"
        rules={[
          {
            required: true,
            message: 'Заполните поле!',
          },
        ]}
      >
        <Input onChange={(e) =>{setLogin(e.target.value)}} />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          {
            required: true,
            message: 'Заполните поле!',
          },
        ]}
      >
        <Input.Password onChange={(e) =>{setPassword(e.target.value)}} />
        <div className="row">
          <div className="col-md-12 mt-2">
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
          <div className="col-md-12">
            <label style={{color:'red',float:'right'}}><a href="newpassword">Забыли пароль?</a></label>
          </div>

        <div className="col-md-3 mt-2">
            <img src="https://img.freepik.com/free-icon/google_318-278809.jpg" style={{width:'40px',height:'40px'}}></img>
          </div>
          <div className="col-md-3 mt-2">
            <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png" style={{width:'40px',height:'40px'}}></img>
          </div>
          <div className="col-md-3 mt-2">
            <img src="https://cdn-icons-png.flaticon.com/512/3938/3938028.png" style={{width:'40px',height:'40px'}}></img>
          </div>
          <div className="col-md-3 mt-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Ok_new_logo.png?20150213095340" style={{width:'40px',height:'40px'}}></img>
          </div>

          </div>
        <div className="col-md-12 text-center ml-5 mt-2">
          
        
      <b  className="text-primary"><a href="/registr">У вас нет аккаунта?</a></b>
      </div>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      > 
        <Checkbox>Сохранить данные</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button onClick={Login} type="primary" htmlType="submit">
          Вход
        </Button>
      </Form.Item>
      
    </Form>
    
            </div>

           
        </div>
		</div>
    <Footer/>	
        </>
    )
}
export default Vhod;