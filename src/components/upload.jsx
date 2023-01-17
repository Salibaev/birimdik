import axios from "axios";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React, { useState } from 'react';
import { Select } from 'antd';
import { Input } from 'antd';
import Nav from "./navbar";
import Footer from "./footer";
import { useEffect } from "react";
import { Option } from "antd/lib/mentions";
const handleChange = (value) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};
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

const Upload1 = () =>{
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
    const { TextArea } = Input;
    

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
    const userid = localStorage.getItem('token');
    const [location,setLocation]= useState();
    const [descriptions, setDescriptions] = useState();
    const [categories,setCategories] = useState();
    const [images, setImages] = useState();
    const [price, setPrice] = useState();
    const [numbers, setNumbers] = useState();
    const [currency,setCurrency] = useState();
    const [image1,setImage1] = useState();
    const [image2,setImage2] = useState();
    const [image3,setImage3] = useState();
    const [image4,setImage4] = useState();
    const [image5,setImage5] = useState();
    const [image6,setImage6] = useState();
    const [recommend,setRecommend] = useState();
    const [city,setCity] = useState();

    const addUser2 = async ()=>{

        const form = new FormData();
        
        form.append('location', location);
        form.append('images',images);
        form.append('image1',image1);
        form.append('image2',image2);
        form.append('image3',image3);
        form.append('image4',image4);
        form.append('image5',image5);
        form.append('image6',image6);
        form.append('price',price);
        form.append('numbers',numbers);
        form.append('descriptions',descriptions);
        form.append('categories',categories);
        form.append('recommend',recommend);
        form.append('currency',currency);
        form.append('userid',userid);
        form.append('city',city);
        
        

        const data = await axios({
            method:'post',
            // params:params,
            data:form,
            url:'http://api.com/birimdik/client1',
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
    const [products,setProducts] = useState(null);
    const fetchProducts = async () => {
        
        const data = await axios({
            method:'get',
            url:'http://api.com/birimdik/location'
        });
        if(data.data.status == 200){
            setProducts(data.data.location);
            console.log('data',data)
        }else{
            console.log("Error fetch products!");
        }
    }
    useEffect(() => {
      fetchProducts();
  }, [])
    return(
        <>
        <Nav/>
        <div className="container bgbg">
                <div class="row">
                <div className="col-md-4"></div>
                 <div className="col-md-5 card">
                 <div class="row">
    <div className='col-md-12'>
        <h5>Разместите БЕСПЛАТНОЕ обьявление</h5>
    </div>
        <div className='col-md-12'>
             <p><b>Загрузите фото</b>(до 10)</p>
             <div className="row">
             <div className="col-md-3">
             <Upload
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
    </Upload>
             
             </div>
             <div className="col-md-2">
              <Upload
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
    </Upload>
             
             </div>
             </div>
             <input type={'file'} name="images" onChange={(e)=>{setImages(e.target.files[0])}} />
             <input type={'file'} name="image1" onChange={(e)=>{setImage1(e.target.files[0])}} />
             <input type={'file'} name="image2" onChange={(e)=>{setImage2(e.target.files[0])}} />
             <input type={'file'} name="image3" onChange={(e)=>{setImage3(e.target.files[0])}} />
             <input type={'file'} name="image4" onChange={(e)=>{setImage4(e.target.files[0])}} />
             <input type={'file'} name="image5" onChange={(e)=>{setImage5(e.target.files[0])}} />
             <input type={'file'} name="image6" onChange={(e)=>{setImage6(e.target.files[0])}} />
             

            <h5>Описание</h5>
            <TextArea id="descriptions" name="descriptions" onChange={(e) =>{setDescriptions(e.target.value)}} rows={4} placeholder="Описание" maxLength={300} />


        
        </div>
       
        <div className='col-md-3 mt-2'>
        <Select 
        onChange={setCategories}
        name="categories" 
        id="categories"
      defaultValue="Категория"
      style={{
        width: 120,
      }}
      
      options={[
        {
          value: '2',
        label: 'Транспорт',
        },
        {
          value: '1',
          label: 'Недвижимость',
          }
          ,
        {
          value: '3',
          label: 'Услуги',
          }
          ,
        {
          value: '4',
          label: 'Электроника',
          }
          ,
        {
          value: '5',
          label: 'Запчасти',
          }
          ,
        {
          value: '6',
          label: 'Работа',
          }
          ,
        {
          value: '7',
          label: 'Мода и стиль',
          }
          ,
        {
          value: '8',
          label: 'Детский мир',
          }
          ,
        {
          value: '9',
          label: 'Хобби,отдых и спорт',
          }
          ,
        {
          value: '10',
          label: 'Животное',
          }
          ,
        {
          value: '11',
          label: 'Отдам даром',
          }
          ,
        {
          value: '12',
          label: 'Охота и рыбалка',
          }
          ,
        {
          value: '13',
          label: 'Подарки',
          }
          ,
        {
          value: '14',
          label: 'Авто запчасти',
          }
          ,
        {
          value: '15',
          label: 'Бизнес',
          }
      ]}
    />
        
        </div>
        <div className="col-md-4 mt-2">
          {products != null || products != undefined || products ?.length > 0 ?
              <><Select onChange={setCity} defaultValue='Город' style={{width:'100%'}}>
                {products.map((products)=>
                
                
                  <Option value={products.city}>{products.city}</Option>

                )
                }
              </Select>
              </>
              :<>Loading</>
          }
      </div>
        <div className='col-md-4 mt-2'>
        <Select
    onChange={setLocation}
    name="location" 
    id="location"
  defaultValue="Выберите Метро"
    style={{
      width: 180,
    }}
    options={[
      {
        value: 'Арбатская',
        label: 'Арбатская',
      },
      {
        value: 'Полежаевская',
        label: 'Полежаевская',
      },
      {
        value: 'Выхино',
        label: 'Выхино',
      },
    ]}
  />
        </div>
        <div className='col-md-3 mt-2'>
        <Input id="price" name="price" onChange={(e) =>{setPrice(e.target.value)}} rows={1} placeholder="Цена"/>
        </div>
        <div className='col-md-3 mt-2'>
        <Select
        onChange={setCurrency}
        defaultValue="Валюта"
    name="currency"
    id="currency"
    style={{
      width: 120,
    }}
    options={[
      {
        value: 'RUB',
        label: 'RUB',
      },
      {
        value: 'KGZ',
        label: 'KGZ',
      },
      {
        value: 'USD',
        label: 'USD',
      },
    ]}
  />
        </div>
        <div className='col-md-4 mt-2'>

        <Input id="numbers" name="numbers" onChange={(e) =>{setNumbers(e.target.value)}} rows={1} placeholder="Номер телефона"/>
            <label style={{fontSize:'12px'}}>(Без нуля "0")</label>
        </div>
        <div className="col-md-4 mt-2">
        <Select
    onChange={setRecommend}
    name="recommend" 
    id="recommend"
  defaultValue="Показать в рекомендации"
    style={{
      width: 200,
    }}
    options={[
      {
        value: '1',
        label: 'Да',
      },
      {
        value: '0',
        label: 'Нет',
      },
    ]}
  />
        </div>
        
        <div className='col-md-12 mt-2'>
            <button onClick={addUser2} className='btn btn-primary'>
                Опубликовать
            </button>
        </div>
        
    </div>
                 </div>
  
</div>
</div>
<Footer/>
        </>
    )
}
export default Upload1;