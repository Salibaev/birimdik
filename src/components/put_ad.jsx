import axios from "axios";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import React, { useState } from 'react';
import { Select } from 'antd';
import { Input } from 'antd';
import Nav from "./navbar";
import Footer from "./footer";
import { useEffect } from "react";
import { Option } from "antd/lib/mentions";
import { useParams } from "react-router-dom";
import { Image } from 'antd';
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
  
const Put_ad = () =>{
    const [visible, setVisible] = useState(false);
  const local = localStorage.getItem('token');
  const params = useParams();
  const id = params.id;
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
      const ad_id = params.id;
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

        
        // const params = {
 
        //     location:location,
        //     descriptions:descriptions,
        //     categories:categories,
        //     images:images,
        //     price:price,
        //     numbers:numbers,
        //     image1:image1,
        //     image2:image2,
        //     image3:image3,
        //     image4:image4,
        //     image5:image5,
        //     image6:image6,
        //     recommend:recommend,
        //     currency:currency,
        //     userid:userid,
        //     city:city,
        //     ad_id:ad_id,

 
        // };
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
        form.append('ad_id',ad_id);
        
        

        const data = await axios({
            method:'post',
            data:form,
            url:'http://api.com/birimdik/update1',
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
    const [product, setProduct] = useState(null);
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
    useEffect(() => {
      fetchProducts();
      fetchProduct();
  }, [])
    return(
        <>
        <Nav/>
        <div className="container bgbg">
                <div class="row">
                <div className="col-md-3"></div>
                 <div className="col-md-6 card">
                 <div class="row">
    <div className='col-md-12'>
        <h5>Редактировать</h5>
    </div>
        <div className='row'>
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
    {product != null || product != undefined || product?.length > 0 ?
    <><label style={{ fontSize: '18px', fontFamily: 'unset' }}>ID: {product[0].id}</label>
      <div className="col-md-6 mt-2">
      
                <Image
                  preview={{
                  visible: false,
                  }}
                  width='100%'
                  height='98%'
                  src={'http://api.com/birimdik/uploads/'+ product[0].images}
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
                  <Image src={'http://api.com/birimdik/uploads/'+ product[0].images}/>
                  <Image src={'http://api.com/birimdik/uploads/'+ product[0].image1}/>
                  <Image src={'http://api.com/birimdik/uploads/'+ product[0].image2} />
                  <Image src={'http://api.com/birimdik/uploads/'+ product[0].image3} />
                  <Image src={'http://api.com/birimdik/uploads/'+ product[0].image4} />
                  <Image src={'http://api.com/birimdik/uploads/'+ product[0].image5} />
                  <Image src={'http://api.com/birimdik/uploads/'+ product[0].image6} />

                  </Image.PreviewGroup>
                  
                </div>

      </div>
      <div className="col-md-5">
              <div className="row">
                    <Image.PreviewGroup>
                  <div style={{padding:'5px'}} className="col-md-6">
                    <div><Image
                      
                      height='65px' width='100%'
                      src={'http://api.com/birimdik/uploads/'+ product[0].image1}
                      /></div>
                      <div>
                      <Image
                      style={{marginTop:'5px'}}
                      height='65px' width='100%'
                      src={'http://api.com/birimdik/uploads/'+ product[0].image2}
                      />
                      </div>
                      <div  style={{marginTop:'10px'}}>
                      <Image
                     
                      height='65px' width='100%'
                      src={'http://api.com/birimdik/uploads/'+ product[0].image3}
                      />
                      </div>
                      
                  </div>

                  <div style={{padding:'5px'}} className="col-md-6">
                    <div><Image
                      
                      height='65px' width='100%'
                      src={'http://api.com/birimdik/uploads/'+ product[0].image4}
                      /></div>
                      <div>
                      <Image
                      style={{marginTop:'5px'}}
                      height='65px' width='100%'
                      src={'http://api.com/birimdik/uploads/'+ product[0].image5}
                      />
                      </div>
                      <div  style={{marginTop:'10px'}}>
                      <Image
                     
                      height='65px' width='100%'
                      src={'http://api.com/birimdik/uploads/'+ product[0].image6}
                      />
                      </div>
                      
                  </div>
                     
                    
                    </Image.PreviewGroup>
                    
              </div>
      
      </div>
      </>
    : <>Loading</>
}
<div className="col-md-12">
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
  </div>
<div className="col-md-12">
<h5>Описание</h5>
{product != null || product != undefined || product ?.length > 0 ?
              <>
            <TextArea id="descriptions" defaultValue={product[0].descriptions} name="descriptions" onChange={(e) =>{setDescriptions(e.target.value)}} rows={4} placeholder="Описание" maxLength={300} />
            </>
              :<>Loading</>
          }
</div>
            

        
        </div>
       
        <div className='col-md-3 mt-2'>
        {product != null || product != undefined || product ?.length > 0 ?
              <>
        <Select 
        onChange={setCategories}
        name="categories" 
        id="categories"
      defaultValue={product[0].categories}
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
         </>
              :<>Loading</>
          }
        </div>
        <div className="col-md-4 mt-2">
        {product != null || product != undefined || product ?.length > 0 ?
              <>
          {products != null || products != undefined || products ?.length > 0 ?
              <><Select onChange={setCity} defaultValue={product[0].city} style={{width:'100%'}}>
                {products.map((products)=>
                
                
                  <Option value={products.city}>{products.city}</Option>

                )
                }
              </Select>
              </>
              :<>Loading</>
          }
            </>
              :<>Loading</>
          }
      </div>
        <div className='col-md-4 mt-2'>
        {product != null || product != undefined || product ?.length > 0 ?
              <>
        <Select
    onChange={setLocation}
    name="location" 
    id="location"
  defaultValue={product[0].location}
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
  </>
              :<>Loading</>
          }
        </div>
        <div className='col-md-3 mt-2'>
        {product != null || product != undefined || product ?.length > 0 ?
              <>
        <Input id="price" defaultValue={product[0].price} name="price" onChange={(e) =>{setPrice(e.target.value)}} rows={100} placeholder="Цена"/>
        </>
        :<>Loading</>
        }
        </div>
        <div className='col-md-3 mt-2'>
        {product != null || product != undefined || product ?.length > 0 ?
              <>
        <Select
        onChange={setCurrency}
        defaultValue={product[0].currency}
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
   </>
        :<>Loading</>
        }
        </div>
        <div className='col-md-4 mt-2'>
        {product != null || product != undefined || product ?.length > 0 ?
              <>
        <Input id="numbers" defaultValue={product[0].numbers} name="numbers" onChange={(e) =>{setNumbers(e.target.value)}}  placeholder="Номер телефона"/>
        </>
        :<>Loading..</>
} 
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
          <Button  onClick={addUser2}>
          Сохранить
          </Button>
          
        </div>
        
    </div>
                 </div>
  
</div>
</div>
<Footer/>
        </>
    )
}
export default Put_ad;