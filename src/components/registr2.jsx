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

  

const Registr2 = () =>{
   
  
    const [login,setLogin]= useState(null);
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const [avatar,setAvatar] = useState();
    const [numbers, setNumbers] = useState();
    const [code, setCode] = useState();
    const [uid, setUid] = useState();
    const [final,setFinal] = useState();
    const [name,setName] = useState(null);
    const [surname,setSurname] = useState(null);
    const [city,setCity] = useState(null);
    const [style1,setStyle1]=useState(false);
    const [product,setProduct] = useState(null);
    const [image_name,setImage_name] = useState('no_image.jpg');
    const number = localStorage.getItem('number');
    const user_id = localStorage.getItem('token2');

    const fetchProduct = async () => {
      const post = {
          id: user_id,
      };
      const data = await axios({
          method: 'get',
          params: post,
          url: 'http://api.com/birimdik/users2'
      });
      console.log(user_id);
      if (data.data.status == 200) {
          setProduct(data.data.users2);
          // localStorage.setItem('token2',product[0].id);
          // window.location.href='put_user2/' + numbers;
          console.log(user_id);
      } else {
          console.log("Error fetch products!");
  
      }
      
  }

  const fetchProduct2 = async () => {
    const post = {
        id: number,
    };
    const data = await axios({
        method: 'get',
        params: post,
        url: 'http://api.com/birimdik/users2'
    });
    console.log(data);
    if (data.data.status == 200) {
        setProduct(data.data.users2);
        setLogin(data.data.users2[0].login);
        setPassword(data.data.users2[0].password);
        setAvatar(data.data.users2[0].avatar);
        setNumbers(data.data.users2[0].numbers);
        setName(data.data.users2[0].name);
        setSurname(data.data.users2[0].surname);
        setCity(data.data.users2[0].city);
        setImage_name(data.data.users2[0].avatar);
    } else {
        console.log("Error fetch products!");

    }   
}

  const reg = async ()=>{
if(password == password2){
  const form = new FormData();

  form.append('login', login);
  form.append('password',password);
  form.append('avatar',avatar);
  form.append('numbers',numbers);
  form.append('name',name);
  form.append('surname',surname);
  form.append('city',city);
  form.append('user_id',user_id);
  form.append('image_name',image_name);

  const data = await axios({
      method:'post',
      data:form,
      url:'http://api.com/birimdik/put_users',
      headers: { "Content-Type": "multipart/form-data" }
     
  });
  console.log(data)
  if(data != null){
      if(data.status  == 200){
      console.log(data)
      console.log(image_name);
      // alert('data',data.status)
      window.location.href='/userinfo';
      }else{
          alert('Error')
      }
  }
}
}
    
    

    useEffect(()=>{
      fetchProduct2();
      fetchProduct();
    },[])
    return(
        <>
			<div  className="container ">
                <div  class="row bgbg">
                    <Nav/>
<div className="col-md-4 ">

</div>

<div class="col-md-4 card mt-5">
    <div class="row ">
    <div className='col-md-12 '>
        <h2 style={{color:'#2d2d7f'}}>Регистрация</h2>
    </div>        
<div className="col-md-4 col-12 text-center">

</div>
<div className="col-md-12">

  

    <div className="row ">
    <div className="col-md-2"></div>
    <div className="col-md-8">
    <div className="row">

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
    {/* <Input onChange={(e) =>{setPassword(e.target.value)}} /> */}
    </div>

    <div className="col-md-12 text-center mt-3">
      <label>
      Создать пароль:
      </label>
    </div>
    <div className="col-md-2">
    {/* <Select 
                  onChange={''}
                  defaultValue="+996"
                  placeholder='220404797'
                  style={{
                    width: 80,
                    marginLeft:'17px'
                  }}
                  options={[
                    {
                        value: +996,
                        label: '+996',
                      }
                  ]}
                /> */}
    </div>

    <div className="col-md-1"></div>

    <div className="col-md-7">
      {/* <Input placeholder="Напишите E-mail или Номер телефона" onChange={(e) =>{setNumbers(e.target.value)}} /> */}
    </div>
      <div className="col-md-2"></div>
      <div className="col-md-3"></div>

      <div className="col-md-7 mt-2">
      <Input placeholder="Придумайте пароль" onChange={(e) =>{setPassword(e.target.value)}} />
      {/* <Input placeholder="Придумайте пароль" onChange={(e) =>{setPassword(e.target.value)}} /> */}
    </div>
    <div className="col-md-2"></div>
      <div className="col-md-3"></div>
    <div className="col-md-7 mt-2">
      <Input placeholder="Потвердите пароль" onChange={(e) =>{setPassword2(e.target.value)}} />
    </div>

      <div className="col-md-4"></div>

<div className="col-md-4 mt-3">

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
        <Button type="primary" style={{float:'right'}} onClick={reg} >Сохранить</Button>
      </Form.Item>
      </div>
      <div className="col-md-12">
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      </div>

    <div className="col-md-6">

</div>
    </div>
</div>

<div style={{marginTop:'250px'}}>
<Footer/>
</div>

</div>
</div>
        </>
    )
}
export default Registr2;