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

const Newpassword = () =>{
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
    const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

 
    

    const [login,setLogin]= useState(null);
    const [password, setPassword] = useState();
    const [avatar,setAvatar] = useState();
    const [numbers, setNumbers] = useState();
    const [code, setCode] = useState();
    const [uid, setUid] = useState();
    const [uid2, setUid2] = useState(null);
    const [final,setFinal] = useState();
    const [name,setName] = useState(null);
    const [surname,setSurname] = useState(null);
    const [city,setCity] = useState(null);
    const [style1,setStyle1]=useState(false);
    const [product,setProduct] = useState(null);
    const [product2,setProduct2] = useState(null);


  //   const fetchProduct2 = async () => {
  //     const post = {
  //       id: numbers,
  //   };
  //     const data = await axios({
  //         method: 'get',
  //         params: post,
  //         url: 'http://api.com/birimdik/users4'
  //     });
  //     console.log(data);
  //     if (data.data.status == 200) {
  //         alert('Такой номер существует');
  //     } else {
  //         console.log("Error fetch products!");
  //         register();
  //     }
      
  // }
  
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
          setUid(data.data.users2[0].uid);
          localStorage.setItem('token2',product2[0].id);
            console.log(uid);
            if(uid != null){
              register();
            }
      } else {
          console.log("Error fetch products!");
  
      }
      
  }

    const register = async ()=>{
      auth.signInWithPhoneNumber(`+996${numbers}`,window.verify).then((result)=>{
        console.log('res',result);
        setFinal(result);
        fetchStyle1();
      }).catch((error)=>{
        alert('err',error);
      })
  }


    const fetchStyle1 = async()=>{
      setStyle1(true);
  }
  const confirmOtp = () =>{
        console.log('otp');
        if(code === null || final === null)
        return;
          final.confirm(code).then((result) =>{
            setUid2(result);
            console.log('res', result);
           setProduct(result);
           
           console.log('uid',result.user.uid);
           console.log('uid google',uid2.user.uid);
           console.log('uid mydb',product2[0].id);
           localStorage.setItem('number',numbers);
           if(result.user.uid === uid){
           window.location.href='/registr2/' + product2[0].id;
           }
          
           
          }).catch((err) => {
            console.log('err',err);
          })
        
  }

  


    
    const reg = async ()=>{
      
      const form = new FormData();

      form.append('login', login);
      form.append('password',password);
      form.append('avatar',avatar);
      form.append('numbers',numbers);
      form.append('name',name);
      form.append('surname',surname);
      form.append('city',city);
      form.append('uid',uid);
      
      const data = await axios({
          method:'post',
          data:form,
          url:'http://api.com/birimdik/registr',
          headers: { "Content-Type": "multipart/form-data" }
         
      });
        console.log(data)
        if(data != null){
            if(data.status  == 200){
            console.log(data)
            // window.location.href="userinfo";
            window.location.href='registr2/' + product[0].id;
            }else{
                alert('Такой номер существует')
            }
        }
    }
    useEffect(()=>{
      window.verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      window.verify.render();
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
        <h2 style={{color:'#2d2d7f'}}>Восстановления пароля</h2>
    </div>        
<div className="col-md-4 col-12 text-center">
{/* <p className="mobavatar" >Аватар</p> */}
{/* <input className="setavatar"  type={'file'} name="avatar" onChange={(e)=>{setAvatar(e.target.files[0])}} /> */}

{/* <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="avatar"
          style={{
            width: '100%',
          }}
        />
      ) : (
        uploadButton
      )}
    </Upload> */}
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
      Пароль будет отправлен на email или номер телефона, указанные при регистрации 
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
                    marginLeft:'17px'
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
    
    <Input placeholder="XXX 12 34 56" onChange={(e) =>{setNumbers(e.target.value)}} />
      </div>
      <div className="col-md-2"></div>

      <div className="col-md-4"></div>

<div className="col-md-4 mt-3">
{style1 ?
    <>
      <Input  placeholder="Код из СМС" onChange={(e) =>{setCode(e.target.value)}} />
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
        <Button type="primary" style={{float:'right'}} onClick={fetchProduct} >OK</Button>
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

<div style={{marginTop:'250px'}}>
<Footer/>
</div>

</div>
</div>
        </>
    )
}
export default Newpassword;