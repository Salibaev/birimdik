import axios from "axios";
import { useState } from "react";
import Footer from "./footer";
import Nav from "./navbar";
import React from 'react';
import { Button, Modal, Radio, Tabs } from 'antd';
import { Checkbox, Form, Input } from 'antd';

const Vhod = () =>{

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
        console.log('user:',user)
        if(user.data.status == 200){
            localStorage.setItem('token',user.data.user[0].id);
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
        <div className="col-md-12 text-center ml-5 mt-2">
      <b className="text-primary"><a>У вас нет аккаунта?</a></b>
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