import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from './footer';
import Nav from './navbar';
import React from 'react';
import { Button, Modal, Radio, Tabs } from 'antd';
import { Checkbox, Form, Input } from 'antd';
import Post2 from './post2';
import { tab } from '@testing-library/user-event/dist/tab';
import Post_lk from './post_lk';
import { Select } from 'antd';

const Put_user = ()=>{
    const user_id = localStorage.getItem('token');
    const [product, setProduct] = useState(null);
    const [login,setLogin]= useState();
    const [password, setPassword] = useState();
    const [avatar,setAvatar] = useState();
    const [numbers, setNumbers] = useState();
    const [name,setName] = useState();
    const [surname,setSurname] = useState();
    const [city,setCity] = useState();
    const [image_name,setImage_name] = useState();
   console.log(user_id)
    const fetchProduct = async () => {
        const post = {
            id: user_id,
        };
        const data = await axios({
            method: 'get',
            params: post,
            url: 'http://api.com/birimdik/users1'
        });
        console.log(data);
        if (data.data.status == 200) {
            setProduct(data.data.users1);
            setLogin(data.data.users1[0].login);
            setPassword(data.data.users1[0].password);
            setAvatar(data.data.users1[0].avatar);
            setNumbers(data.data.users1[0].numbers);
            setName(data.data.users1[0].name);
            setSurname(data.data.users1[0].surname);
            setCity(data.data.users1[0].city);
            setImage_name(data.data.users1[0].avatar);
        } else {
            console.log("Error fetch products!");

        }   
    }
    // const image_name = product[0].avatar;
    const reg = async ()=>{

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
            alert('data',data.status)
            }else{
                alert('Error')
            }
        }
    }

    useEffect(() => {

        fetchProduct();
    }, []) 
    return(
        <>
        <Nav/>
        {product != null || product != undefined || product?.length > 0 ?
    <>
        <div class="container card usercard"> 
                <div class="row mt-2">
    <h5>Изменить данные</h5>
                <div className='col-md-3 card  mt-2'>
                <div className='row'>
                
                      <div className='col-md-3'><img style={{width:'100px',height:'100px',borderRadius:'50%'}} src={'http://api.com/birimdik/uploads/' + product[0].avatar}></img></div>
                  
                      <div className='col-md-8 ml-3 mt-3'>
                        <p>{product[0].name}</p>
                        <b style={{color:'gold'}}>Подключить в бизнес аккаунт</b>
                        <p>ID: {product[0].id}</p>                        
                      </div>
                      <input type={'file'} name="avatar" onChange={(e)=>{setAvatar(e.target.files[0])}} />

                    <div className='col-md-12'>
                        <Button onClick={reg}>Сохранить</Button>
                    </div>
                    </div>
                </div>
                
                <div className='col-md-8 ml-5 mt-5'>
                  <div className='row'>
                  <div style={{width:'200px'}} className=' card'>
                  <div className='row'>

                  <div className='col-md-12'>
                    <p style={{color:'grey'}}>Логин</p>
                     <Input onChange={(e) =>{setLogin(e.target.value)}} allowClear defaultValue={product[0].login} />
                  </div>

                  <div className='col-md-12'>
                    <p style={{color:'grey'}}>Пароль</p>
                    <Input onChange={(e) =>{setPassword(e.target.value)}} allowClear defaultValue={product[0].password} />
                  </div>

                  </div>
                </div>

                <div style={{width:'200px'}} className=' ml-3 card'>
                  <div className='row'>

                  <div className='col-md-12'>
                    <p style={{color:'grey'}}>Имя</p>
                    <Input onChange={(e) =>{setName(e.target.value)}} allowClear defaultValue={product[0].name} />
                  </div>

                  <div className='col-md-12'>
                    <p style={{color:'grey'}}>Фамилия</p>
                    <Input onChange={(e) =>{setSurname(e.target.value)}} allowClear defaultValue={product[0].surname} />
                  </div>

                  </div>
                </div>

                <div style={{width:'200px'}} className=' ml-3 card'>
                  <div className='row'>

                  <div className='col-md-12'>
                    <p style={{color:'grey'}}>Номер телефона</p>
                    <Input onChange={(e) =>{setNumbers(e.target.value)}} allowClear defaultValue={product[0].numbers} />
                  </div>

                  <div className='col-md-12'>
                    <p style={{color:'grey'}}>Город</p>
                    <Input onChange={(e) =>{setCity(e.target.value)}} allowClear defaultValue={product[0].city} />
                  </div>

                  </div>
                </div>

                <div style={{width:'200px'}} className=' ml-3 card'>
                  <div className='row'>

                  <div className='col-md-12'>
                    <p style={{color:'grey'}}>E-mail</p>
                    <Input allowClear defaultValue='Не указано' />
                  </div>

                  <div className='col-md-12'>
                    <p style={{color:'grey'}}>Пол</p>
                    <Input allowClear defaultValue='Не указано' />
                  </div>

                 
                  </div>
                </div>
                
                  </div>
                </div>
                </div>
                </div>
           
</>
    :<>Loading</>
}
<div className='col-md-12 '>
<Footer/>
</div>
        
        
    </>
    
    );
    }
    
    
    export default Put_user;