import axios from "axios";
import { CloseOutlined, EditOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Modal, Upload } from 'antd';
import React, { useState } from 'react';
import { Select } from 'antd';
import { Input } from 'antd';
import Nav from "./navbar";
import Footer from "./footer";
import { useEffect } from "react";
import { Option } from "antd/lib/mentions";
import { useParams } from "react-router-dom";
import { Image } from 'antd';
import { Tooltip } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import DragAndDropUploader from "./Drag_And_Drop_Uploader";



const handleChange = (value) => {
  alert('123')
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};


const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });


const Put_ad = () => {



  const [visible, setVisible] = useState(false);
  const local = localStorage.getItem('token');
  const params = useParams();
  const id = params.id;
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const { TextArea } = Input;




  const ad_id = params.id;
  const userid = localStorage.getItem('token');
  const [location, setLocation] = useState();
  const [descriptions, setDescriptions] = useState();
  const [categories, setCategories] = useState();
  const [images, setImages] = useState();
  const [price, setPrice] = useState();
  const [numbers, setNumbers] = useState();
  const [currency, setCurrency] = useState();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [image4, setImage4] = useState();
  const [image5, setImage5] = useState();
  const [image6, setImage6] = useState();
  const [recommend, setRecommend] = useState();
  const [city, setCity] = useState();
  let [imagess,setImagess] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [files, setFiles] = useState([]);

  const addUser2 = async () => {
    const form = new FormData();
    form.append('location', location);
    form.append('images', files[0]);
    form.append('image1', files[1]);
    form.append('image2', files[2]);
    form.append('image3', files[3]);
    form.append('image4', files[4]);
    form.append('image5', files[5]);
    form.append('image6', files[6]);
    form.append('price', price);
    form.append('numbers', numbers);
    form.append('descriptions', descriptions);
    form.append('categories', categories);
    form.append('recommend', recommend);
    form.append('currency', currency);
    form.append('userid', userid);
    form.append('city', city);
    form.append('ad_id', ad_id);

    const data = await axios({
      method: 'post',
      data: form,
      url: 'http://api.com/birimdik/update1',
      headers: { "Content-Type": "multipart/form-data" }
    });
    console.log(data)
    if (data != null) {
      if (data.status == 200) {
        console.log(data)
        alert('data', data.status)
      } else {
        alert('Error')
      }
    }
  }
  const [products, setProducts] = useState(null);
  const fetchProducts = async () => {

    const data = await axios({
      method: 'get',
      url: 'http://api.com/birimdik/location'
    });
    if (data.data.status == 200) {
      setProducts(data.data.location);
      console.log('data', data)
    } else {
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
      setLocation(data.data.post[0].location);
      setDescriptions(data.data.post[0].descriptions);
      setCategories(data.data.post[0].categories);
      setNumbers(data.data.post[0].numbers);
      setCurrency(data.data.post[0].currency);
      setPrice(data.data.post[0].price);
      setImages(data.data.post[0].images);
      setImage1( data.data.post[0].image1);
      setImage2(data.data.post[0].image2);
      setImage3(data.data.post[0].image3);
      setImage4(data.data.post[0].image4);
      setImage5(data.data.post[0].image5);
      setImage6(data.data.post[0].image6);
      setFiles([...files,'http://api.com/birimdik/uploads/' + data.data.post[0].images,'http://api.com/birimdik/uploads/' +data.data.post[0].image1,'http://api.com/birimdik/uploads/' +data.data.post[0].image2,'http://api.com/birimdik/uploads/' +data.data.post[0].image3,'http://api.com/birimdik/uploads/' +data.data.post[0].image4,data.data.post[0].image5,'http://api.com/birimdik/uploads/' +data.data.post[0].image6,])
      setFileList(...fileList,
      [
        {
          uid: 's',
          id: data.data.post[0].id,
          name: data.data.post[0].images,
          status: 'done',
          url: data.data.post[0].images != null ? 'http://api.com/birimdik/uploads/' + data.data.post[0].images : 'http://api.com/birimdik/uploads/no_image3.png',
        },
      {
        uid: '2',
        id: data.data.post[0].id,
        name: data.data.post[0].image1,
        status: 'done',
        url: data.data.post[0].image1 != null ? 'http://api.com/birimdik/uploads/' + data.data.post[0].image1 : 'http://api.com/birimdik/uploads/no_image3.png',
      },
      {
        uid: '3',
        id: data.data.post[0].id,
        name: data.data.post[0].image2,
        status: 'done',
        url: data.data.post[0].image2 != null ? 'http://api.com/birimdik/uploads/' + data.data.post[0].image2 : 'http://api.com/birimdik/uploads/no_image3.png',
      }
      ,
      {
        uid: '4',
        id: data.data.post[0].id,
        name: data.data.post[0].image3,
        status: 'done',
        url: data.data.post[0].image3 != null ? 'http://api.com/birimdik/uploads/' + data.data.post[0].image3 : 'http://api.com/birimdik/uploads/no_image3.png',
      }
      ,
      {
        uid: '5',
        id: data.data.post[0].id,
        name: data.data.post[0].image4,
        status: 'done',
        url: data.data.post[0].image4 != null ? 'http://api.com/birimdik/uploads/' + data.data.post[0].image4 : 'http://api.com/birimdik/uploads/no_image3.png',
      }
      ,
      {
        uid: '6',
        id: data.data.post[0].id,
        name: data.data.post[0].image5,
        status: 'done',
        url: data.data.post[0].image5 != null ? 'http://api.com/birimdik/uploads/' + data.data.post[0].image5 : 'http://api.com/birimdik/uploads/no_image3.png',
      }
      ,
      {
        uid: '7',
        id: data.data.post[0].id,
        name: data.data.post[0].image6,
        status: 'done',
        url: data.data.post[0].image6 != null ? 'http://api.com/birimdik/uploads/' + data.data.post[0].image6 : 'http://api.com/birimdik/uploads/no_image3.png',
      }
      ]
      )
      
      setRecommend(data.data.post[0].recommend);
      setCity(data.data.post[0].city);
      console.log('data', data)
    } else {
      console.log("Error fetch products!");
      console.log(data);
    }
  }

const onRemove = async (e)=>{
  const post = {
    id: id,
    image_name: e.name,
    uid: e.uid
  };
  const data = await axios({
    method: 'delete',
    params: post,
    url: 'http://api.com/birimdik/update1',
  });
  console.log('event remove',data);  

}

  useEffect(() => {
    fetchProducts();
    fetchProduct();
  }, [])
  return (
    <>
      <Nav />
      <div className="container bgbg">
        <div class="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 card">
            <div class="row">
              <div className='col-md-12'>
                <h5>Редактировать</h5>
              </div>
              <div className='row'>
              <div className="col-md-12">
                <DragAndDropUploader
                  className="mb-3 p-2"
                  fileList={fileList.length > 0 ? fileList : []}
                  defaultFileList={fileList.length > 0 ? fileList: []}
                  style={{width:'100%',height:'100px'}}
                  onChange={(file) => {
                    setFiles([...files, file]);
                  }}
                  onRemove={(f) => {
                    const index = files.indexOf(f);
                    if (index !== -1) {
                      const f = files.splice(index, 1);
                      setFiles(f);
                    }
                  }}
                />
                  </div>  
                {product != null || product != undefined || product?.length > 0 ?
                  <><label style={{ fontSize: '18px', fontFamily: 'unset' }}>ID: {product[0].id}</label>
                  <div >
                  <Upload
                      
                      className="upload-list-inline"
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture"
                     
                      fileList={fileList.length > 0 ? fileList : []}
                      onRemove={onRemove}
                      
                    >
                      <Button icon={<UploadOutlined />}></Button>
                    </Upload>
                  </div>
                    
                    
                  </>
                  : <>Loading</>
                }
               
                <div className="col-md-12">
                  <h5>Описание</h5>
                  {product != null || product != undefined || product?.length > 0 ?
                    <>
                      <TextArea id="descriptions" defaultValue={product[0].descriptions} name="descriptions" onChange={(e) => { setDescriptions(e.target.value) }} rows={4} placeholder="Описание" maxLength={300} />
                    </>
                    : <>Loading</>
                  }
                </div>



              </div>

              <div className='col-md-3 mt-2'>
                {product != null || product != undefined || product?.length > 0 ?
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
                  : <>Loading</>
                }
              </div>
              <div className="col-md-4 mt-2">
                {product != null || product != undefined || product?.length > 0 ?
                  <>
                    {products != null || products != undefined || products?.length > 0 ?
                      <><Select onChange={setCity} defaultValue={product[0].city} style={{ width: '100%' }}>
                        {products.map((products) =>


                          <Option value={products.city}>{products.city}</Option>

                        )
                        }
                      </Select>
                      </>
                      : <>Loading</>
                    }
                  </>
                  : <>Loading</>
                }
              </div>
              <div className='col-md-4 mt-2'>
                {product != null || product != undefined || product?.length > 0 ?
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
                  : <>Loading</>
                }
              </div>
              <div className='col-md-3 mt-2'>
                {product != null || product != undefined || product?.length > 0 ?
                  <>
                    <Input id="price" defaultValue={product[0].price} name="price" onChange={(e) => { setPrice(e.target.value) }} rows={100} placeholder="Цена" />
                  </>
                  : <>Loading</>
                }
              </div>
              <div className='col-md-3 mt-2'>
                {product != null || product != undefined || product?.length > 0 ?
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
                  : <>Loading</>
                }
              </div>
              <div className='col-md-4 mt-2'>
                {product != null || product != undefined || product?.length > 0 ?
                  <>
                    <Input id="numbers" defaultValue={product[0].numbers} name="numbers" onChange={(e) => { setNumbers(e.target.value) }} placeholder="Номер телефона" />
                  </>
                  : <>Loading..</>
                }
                <label style={{ fontSize: '12px' }}>(Без нуля "0")</label>
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
                <Button onClick={addUser2}>
                  Сохранить
                </Button>

              </div>

            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}
export default Put_ad;