import Footer from "./footer";
import Nav from './navbar';
import Postcard from "./postcard";
import Share from "./share";
import Smsmodal from "./smsmodal";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import Post2 from "./post2";
import { Image } from 'antd';
import React from 'react';
import { CopyOutlined } from '@ant-design/icons';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import {
  AutoComplete,
  Button,
  Cascader,
  Col,
  DatePicker,
  Input,
  InputNumber,
  Row,
  Select,
  Tooltip,
} from 'antd';
const { Option } = Select;

const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const { TextArea } = Input;
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
  
const Put_ad =()=>{
    const [visible, setVisible] = useState(false);
    const local = localStorage.getItem('token');
    const params = useParams();
    const id = params.id;
    const [product, setProduct] = useState(null);
    


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
    const fetchProduct = async () => {
        const post = {
            id: id,
        };
        const data = await axios({
            method: 'get',
            params: post,
            url: 'http://api.com/birimdik/post'
        });
        if (data.data.status == 200) {
            setProduct(data.data.post);
            console.log('data', data)
        } else {
            console.log("Error fetch products!");
            console.log(data);
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
    const [category,setCategory] = useState(null);
    const fetchCategory = async () => {
        
        const data = await axios({
            method:'get',
            url:'http://api.com/birimdik/category'
        });
        if(data.data.status == 200){
            setCategory(data.data.post);
            console.log('data',data)
        }else{
            console.log("Error fetch products!");
        }
    }
  
  
   

    useEffect(() => {
        fetchProduct();
        fetchProducts();
        fetchCategory();
    }, [])


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

    const update = async ()=>{

        
        const params = {
 
            location:location,
            descriptions:descriptions,
            categories:categories,
            images:images,
            price:price,
            numbers:numbers,
            image1:image1,
            image2:image2,
            image3:image3,
            image4:image4,
            image5:image5,
            image6:image6,
            recommend:recommend,
            currency:currency,
            userid:userid,
            city:city,

 
        };
        
        

        const data = await axios({
            method:'post',
            params:params,
            url:'http://api.com/birimdik/update1'
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

    return (
        <>
           




            <Nav />

            <div class="container bg-light">
                <div class="row">

                    {product != null || product != undefined || product?.length > 0 ?
                        <>
                           <div className="col-md-6">
                                    <Image
        preview={{
          visible: false,
        }}
        width='100%'
        src={product[0].images}
        onClick={() => setVisible(true)}
      />
      <div
        style={{
          display: 'none',
        }}
      >
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
           <Image src={product[0].images}/>
          <Image src={product[0].image1}/>
          <Image src={product[0].image2} />
          <Image src={product[0].image3} />
          <Image src={product[0].image4} />
          <Image src={product[0].image5} />
          <Image src={product[0].image6} />
          
        </Image.PreviewGroup>
      </div>

                                    </div>
                                    <div className="col-md-3">
                                  <div className="row">
                                        <Image.PreviewGroup>
                                      <div style={{padding:'5px'}} className="col-md-6">
                                        <div><Image
                                          
                                          height='65px' width='100%'
                                          src={product[0].image1}
                                          /></div>
                                          <div>
                                          <Image
                                          style={{marginTop:'5px'}}
                                          height='65px' width='100%'
                                          src={product[0].image2}
                                          />
                                          </div>
                                          <div  style={{marginTop:'10px'}}>
                                          <Image
                                         
                                          height='65px' width='100%'
                                          src={product[0].image3}
                                          />
                                          </div>
                                          
                                      </div>

                                      <div style={{padding:'5px'}} className="col-md-6">
                                        <div><Image
                                          
                                          height='65px' width='100%'
                                          src={product[0].image4}
                                          /></div>
                                          <div>
                                          <Image
                                          style={{marginTop:'5px'}}
                                          height='65px' width='100%'
                                          src={product[0].image5}
                                          />
                                          </div>
                                          <div  style={{marginTop:'10px'}}>
                                          <Image
                                         
                                          height='65px' width='100%'
                                          src={product[0].image6}
                                          />
                                          </div>
                                          
                                      </div>
                                         
                                        
                                        </Image.PreviewGroup>
                                  </div>
                          
                          </div>

                          <div class="col-md-6  ">
                          <p><i class="far fa-clock"></i> дата публикации {product[0].date1}</p> 

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
             <label for="images">URL:</label>
             <Select
             onChange={setImages}
             name="images" 
             id="images"
           defaultValue="Главное фото"
    style={{
      width: 120,
    }}
    
    options={[
      {
        value: 'https://img1.fonwall.ru/o/fb/mercedes-benz-s63-white-side-view-luxury.jpeg?route=mid&amp;h=750',
        label: 'Авто',
      },
      {
        value: 'https://www.mirlandshaft.ru/wp-content/uploads/2017/12/60-2.jpg',
        label: 'Дом',
      },
    ]}
    
  />
   <Select
    onChange={setImage1}
    name="image1" 
    id="image1"
  defaultValue="Фото1"
    style={{
      width: 120,
    }}
    options={[
      {
        value: 'https://img1.fonwall.ru/o/fb/mercedes-benz-s63-white-side-view-luxury.jpeg?route=mid&amp;h=750',
        label: 'Авто',
      },
      {
        value: 'https://www.mirlandshaft.ru/wp-content/uploads/2017/12/60-2.jpg',
        label: 'Дом',
      },
    ]}
  />
   <Select
    onChange={setImage2}
    name="image2" 
    id="image2"
  defaultValue="Фото2"
    style={{
      width: 120,
    }}
    options={[
      {
        value: 'https://img1.fonwall.ru/o/fb/mercedes-benz-s63-white-side-view-luxury.jpeg?route=mid&amp;h=750',
        label: 'Авто',
      },
      {
        value: 'https://www.mirlandshaft.ru/wp-content/uploads/2017/12/60-2.jpg',
        label: 'Дом',
      },
    ]}
  />
   <Select
    onChange={setImage3}
    name="image3" 
    id="image3"
  defaultValue="Фото3"
    style={{
      width: 120,
    }}
    options={[
      {
        value: 'https://img1.fonwall.ru/o/fb/mercedes-benz-s63-white-side-view-luxury.jpeg?route=mid&amp;h=750',
        label: 'Авто',
      },
      {
        value: 'https://www.mirlandshaft.ru/wp-content/uploads/2017/12/60-2.jpg',
        label: 'Дом',
      },
    ]}
  />
   <Select
   
   onChange={setImage4}
    name="image4" 
    id="image4"
  defaultValue="Фото4"
    style={{
      width: 120,
      marginLeft:'60px',
    }}
    options={[
      {
        value: 'https://img1.fonwall.ru/o/fb/mercedes-benz-s63-white-side-view-luxury.jpeg?route=mid&amp;h=750',
        label: 'Авто',
      },
      {
        value: 'https://www.mirlandshaft.ru/wp-content/uploads/2017/12/60-2.jpg',
        label: 'Дом',
      },
    ]}
  />
   <Select
    onChange={setImage5}
    name="image5" 
    id="image5"
  defaultValue="Фото5"
    style={{
      width: 120,
    }}
    options={[
      {
        value: 'https://img1.fonwall.ru/o/fb/mercedes-benz-s63-white-side-view-luxury.jpeg?route=mid&amp;h=750',
        label: 'Авто',
      },
      {
        value: 'https://www.mirlandshaft.ru/wp-content/uploads/2017/12/60-2.jpg',
        label: 'Дом',
      },
    ]}
  />
   <Select
    onChange={setImage6}
    name="image6" 
    id="image6"
  defaultValue="Фото6"
    style={{
      width: 120,
    }}
    options={[
      {
        value: 'https://img1.fonwall.ru/o/fb/mercedes-benz-s63-white-side-view-luxury.jpeg?route=mid&amp;h=750',
        label: 'Авто',
      },
      {
        value: 'https://www.mirlandshaft.ru/wp-content/uploads/2017/12/60-2.jpg',
        label: 'Дом',
      },
    ]}
  />


                            <p className="mt-2">Категории</p>
                            <Select 
        onChange={setCategories}
        name="categories" 
        id="categories"
      defaultValue="Категория"
      style={{
        width: '100%',
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
                          {/* {category != null || category != undefined || category ?.length > 0 ?
              <><Select onChange={setCategories} defaultValue={category.name} style={{width:'100%'}}>
                {category.map((category)=>
                
                
                  <Option value={category.name}>{category.name}</Option>

                )
                }
              </Select>
              </>
              :<>Loading</>
          } */}
                          
        <p style={{fontSize:'20px',fontFamily:'-moz-initial'}}><label style={{fontFamily:'sans-serif'}}>цена </label> <Input
                            style={{
                            width: '20%',
                            }}
                            id="price" name="price"
                            onChange={(e) =>{setPrice(e.target.value)}}
                            defaultValue={product[0].price}
                            /><label style={{marginLeft:'10px',fontSize:'12px'}}>
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
                                </label></p>

        <p style={{ fontSize: '10px' }}><i class="fa-solid fa-eye"> : 150 просмотров</i></p>
        
        <i class="fa-sharp fa-solid fa-map-location-dot"></i> <a >Город{products != null || products != undefined || products ?.length > 0 ?
              <><Select onChange={setCity} defaultValue={product.city} style={{width:'100%'}}>
                {products.map((products)=>
                
                
                  <Option value={products.city}>{products.city}</Option>

                )
                }
              </Select>
              </>
              :<>Loading</>
          }</a>
          
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
              {/* <p><i class="fa-solid fa-user mt-3"></i>Автор:</p> */}
              
              <i class="fa-solid fa-phone"></i><label>Номер телефона</label> <Input
              id="numbers" name="numbers"
              onChange={(e) =>{setNumbers(e.target.value)}}
              defaultValue={'+996'+product[0].numbers} />
            
        <p> <a>ID:                                   
        <label style={{ fontSize: '18px', fontFamily: 'unset' }}>{product[0].id}</label>
        <div className="col-md-12">
            <b style={{ fontSize: '16px' }}>Описание</b>
            <p className="card" style={{ fontSize: '18px', fontFamily: 'unset' }}>
            <TextArea id="descriptions" name="descriptions" onChange={(e) =>{setDescriptions(e.target.value)}} rows={4} placeholder="Описание" maxLength={300} /></p>
        </div>       
            </a></p>
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
            <button onClick={update} className="btn btn-primary">Сохранить</button>
                            </div>
                                            
                                            
                                                    
                                                    
                    </>
                        : <>Loading</>
                    }

                    
                </div>
            </div>
            <Footer />
        </>
    );
    }
    
    
    export default Put_ad;