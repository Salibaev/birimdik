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

const Registrmob = () =>{
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
    

    const [login,setLogin]= useState();
    const [password, setPassword] = useState();
    const [avatar,setAvatar] = useState();
    const [numbers, setNumbers] = useState();
    const [name,setName] = useState();
    const [surname,setSurname] = useState();
    const [city,setCity] = useState();
    const reg = async ()=>{
      const form = new FormData();

      form.append('login', login);
      form.append('password',password);
      form.append('avatar',avatar);
      form.append('numbers',numbers);
      form.append('name',name);
      form.append('surname',surname);
      form.append('city',city);
      
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
            alert('data',data.status)
            }else{
                alert('Error')
            }
        }
    }
    return(
        <>
			<div className="container ">
                <div class="row bgbg">
                    <Nav/>
<div className="col-md-4 ">

</div>

                    
<div class="col-md-4 card ">
    <div class="row ">
    <div className='col-md-12 '>
        <h2 style={{color:'#2d2d7f'}}>Регистрация</h2>
    </div>        
<div className="col-md-12 col-12 ">
<label className="mobavatar" >Аватар</label>
<input type={'file'} name="avatar" onChange={(e)=>{setAvatar(e.target.files[0])}} />

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
<Form.Item  label="Логин">
        <Input onChange={(e) =>{setLogin(e.target.value)}} />
      </Form.Item>

      <Form.Item label="Пароль">
        <Input onChange={(e) =>{setPassword(e.target.value)}} />
      </Form.Item>
</div>
{/* <div className="col-md-12">
<Form.Item label="Имя">
        <Input onChange={(e) =>{setName(e.target.value)}} />
      </Form.Item>

      <Form.Item label="Фамилия">
        <Input onChange={(e) =>{setSurname(e.target.value)}} />
      </Form.Item>
</div> */}
<div className="col-md-12">
<Form.Item label="Номер телефона">
        <Input onChange={(e) =>{setNumbers(e.target.value)}} />
      </Form.Item>

      <label className="mt-2" >Город:</label>
      <Select 
        onChange={setCity}
        name="city" 
        id="city"
      defaultValue="Москва"
      style={{
        width: 185,
       marginLeft:'10px'
      }}
      
      options={[
        {
          value: 'Москва',
          label: 'Москва',
        },
        {
            value: 'Питер',
            label: 'Питер',
          }
      ]}
    />
</div>
<div className="col-md-12">
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


<Footer/>
</div>
</div>
        </>
    )
}
export default Registrmob;