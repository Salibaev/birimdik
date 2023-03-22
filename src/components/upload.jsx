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
import { Cascader } from 'antd';

// const handleChange = (value) => {
//   console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
// };
// const getBase64 = (img, callback) => {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// };
// const beforeUpload = (file) => {
//   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//   if (!isJpgOrPng) {
//     message.error('You can only upload JPG/PNG file!');
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error('Image must smaller than 2MB!');
//   }
//   return isJpgOrPng && isLt2M;
// };

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const onChange = (value) => {
  console.log(value);
};
const { TextArea } = Input;

const Upload1 = () => {
  const params = useParams();
  const [id, setId] = useState(params.id);


  // const [loading, setLoading] = useState(false);
  // const [imageUrl, setImageUrl] = useState();
  // const handleChange = (info) => {
  //   if (info.file.status === 'uploading') {
  //     setLoading(true);
  //     return;
  //   }
  //   if (info.file.status === 'done') {
  //     // Get this url from response in real world.
  //     getBase64(info.file.originFileObj, (url) => {
  //       setLoading(false);
  //       setImageUrl(url);
  //     });
  //   }
  // };



  // const uploadButton = (
  //   <div>
  //     {loading ? <LoadingOutlined /> : <PlusOutlined />}
  //     <div
  //       style={{
  //         marginTop: 8,
  //       }}
  //     >
  //       Upload
  //     </div>
  //   </div>
  // );
  const userid = localStorage.getItem('token');
  const [location, setLocation] = useState();
  const [descriptions, setDescriptions] = useState();
  const [categories, setCategories] = useState();
  const [images, setImages] = useState('no_image3.png');
  const [price, setPrice] = useState();
  const [numbers, setNumbers] = useState();
  const [currency, setCurrency] = useState();
  const [custom, setCustom] = useState(false);
  const [custom2, setCustom2] = useState(false);
  const [custom3, setCustom3] = useState(false);
  const [subCategories, setSubcategories] = useState();
  const [subCategories2, setSubcategories2] = useState();
  const [subCategories3, setSubcategories3] = useState();
  const [podcategories, setPodcategories] = useState();
  const [models, setModels] = useState();
  const [buy_sell, setBuy_sell] = useState();
  const [image1, setImage1] = useState('no_image3.png');
  const [image2, setImage2] = useState('no_image3.png');
  const [image3, setImage3] = useState('no_image3.png');
  const [image4, setImage4] = useState('no_image3.png');
  const [image5, setImage5] = useState('no_image3.png');
  const [image6, setImage6] = useState('no_image3.png');
  const [recommend, setRecommend] = useState();
  const [city, setCity] = useState();

  const addUser2 = async () => {

    const form = new FormData();

    form.append('location', location);
    form.append('images', images);
    form.append('image1', image1);
    form.append('image2', image2);
    form.append('image3', image3);
    form.append('image4', image4);
    form.append('image5', image5);
    form.append('image6', image6);
    form.append('price', price);
    form.append('numbers', numbers);
    form.append('descriptions', descriptions);
    form.append('categories', categories);
    form.append('recommend', recommend);
    form.append('currency', currency);
    form.append('userid', userid);
    form.append('city', city);
    form.append('podcategories', parseInt(podcategories) );
    form.append('models', models);
    form.append('buy_sell', buy_sell);

    const data = await axios({
      method: 'post',
      // params:params,
      data: form,
      url: 'http://api.com/birimdik/client1',
      headers: { "Content-Type": "multipart/form-data" }
    });
    console.log(data)
    if (data != null) {
      if (data.status == 200) {
        console.log(data)
        alert('data', data.status)
      } else {
        console.log(form)
        alert('Error')

      }
    }
  }
  const fetchCategory = async (id) => {
    const params = {
      id:id
    }
    const data = await axios({
      method: 'get',
      url: 'http://api.com/birimdik/postcategory',
      params: params
    })
    console.log('sub', data);
    if (data.data.status == 200) {
      setCustom(true);
      setSubcategories(data.data.postcategory);
    } else {
      setCustom(false);
    }
  }
  const fetchCategory2 = async (id) => {
    const params = {
      id:id
    }
    const data = await axios({
      method: 'get',
      url: 'http://api.com/birimdik/postcategory',
      params: params
    })
    console.log('sub', data);
    if (data.data.status == 200) {
      setCustom2(true);
      setSubcategories2(data.data.postcategory);
    } else {
      setCustom2(false);
    }

  }
  const fetchCategory3 = async (id) => {
    const params = {
      id:id
    }
    const data = await axios({
      method: 'get',
      url: 'http://api.com/birimdik/postcategory',
      params: params
    })
    console.log('sub', data);
    if (data.data.status == 200) {
      setCustom3(true);
      setSubcategories3(data.data.postcategory);
    } else {
      setCustom3(false);
    }

  }
  const onChange = async (value) => {
    console.log(`selected ${value}`);
    setCategories(value);
    fetchCategory(value);

  };
  const onChange2 = async (value) => {
    console.log(`selected ${value}`);
    setPodcategories(value);
    fetchCategory2(value);
  };
  const onChange3 = async (value) => {
    console.log(`selected ${value}`);
    setBuy_sell(value);
    fetchCategory3(value);
  };
  const onChange4 = async (value) => {
    console.log(`selected ${value}`);
    setModels(value);

  };

  const [products2, setProducts2] = useState(null);
  const fetchProducts2 = async () => {
    const post = {
      id: id,
    };
    const data = await axios({
      method: 'get',
      params: post,
      url: 'http://api.com/birimdik/postcategory'
    });
    if (data.data.status == 200) {
      setProducts2(data.data.postcategory);
      console.log('data', data)
    } else {
      console.log("Error fetch products!");
      console.log(data);
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
  useEffect(() => {
    fetchProducts();
    fetchProducts2();
  }, [])
  return (
    <>
      <Nav />
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
                    </Upload> */}

                  </div>
                </div>
                <input type={'file'} name="images" onChange={(e) => { setImages(e.target.files[0]) }} />
                <input type={'file'} name="image1" onChange={(e) => { setImage1(e.target.files[0]) }} />
                <input type={'file'} name="image2" onChange={(e) => { setImage2(e.target.files[0]) }} />
                <input type={'file'} name="image3" onChange={(e) => { setImage3(e.target.files[0]) }} />
                <input type={'file'} name="image4" onChange={(e) => { setImage4(e.target.files[0]) }} />
                <input type={'file'} name="image5" onChange={(e) => { setImage5(e.target.files[0]) }} />
                <input type={'file'} name="image6" onChange={(e) => { setImage6(e.target.files[0]) }} />


                <h5>Описание</h5>
                <TextArea id="descriptions" name="descriptions" onChange={(e) => { setDescriptions(e.target.value) }} rows={4} placeholder="Описание" maxLength={300} />



              </div>
              {/* <div className="col-md-3 mt-3 d-none">
                <Cascader options={options} onChange={onChange} placeholder="Please select" />
              </div> */}


              {products2 != null || products2 != undefined || products2?.length > 0 ?
                <>
                  <div className="col-md-3 mt-3">
                    <Select onChange={onChange} defaultValue='Категории' style={{ width: '100%' }}>{products2.map((products) =>
                      <Option value={products.id}>{products.name}</Option>
                    )
                    }
                    </Select>
                  </div>
                  {custom ?
                    <>
                      <div className="col-md-3 mt-3">
                        <Select onChange={onChange2} defaultValue='Подкатегории' style={{ width: '100%' }}>
                          {subCategories?.length > 0 ?
                            <>{
                              subCategories.map((products) =>
                                <Option value={products.id}>{products.name}</Option>
                              )
                            }
                            </> : <></>
                          }
                           
                        </Select>
                      </div>
                    </>
                    : <></>
                  }
                  {custom2 ?
                    <>
                      <div className="col-md-3 mt-3">
                        <Select onChange={onChange3} defaultValue='Продать' style={{ width: '100%' }}>
                          {subCategories2?.length > 0 ?
                            <>{
                              subCategories2.map((products) =>
                                <Option value={products.id}>{products.name}</Option>
                              )
                            }
                            </> : <></>
                          }
                           
                        </Select>
                      </div>
                    </>
                    : <></>
                  }
                   {custom3 ?
                    <>
                      <div className="col-md-3 mt-3">
                        <Select onChange={onChange4} defaultValue='Модели' style={{ width: '100%' }}>
                          {subCategories3?.length > 0 ?
                            <>{
                              subCategories3.map((products) =>
                                <Option value={products.name}>{products.name}</Option>
                              )
                            }
                            </> : <></>
                          }
                           
                        </Select>
                      </div>
                    </>
                    : <></>
                  }
                </>
                : <>Loading</>
              }


              <div className="col-md-3 mt-3">
                {products != null || products != undefined || products?.length > 0 ?
                  <><Select onChange={setCity} defaultValue='Город' style={{ width: '100%' }}>
                    {products.map((products) =>


                      <Option value={products.city}>{products.city}</Option>

                    )
                    }
                  </Select>
                  </>
                  : <>Loading</>
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
                <Input id="price" name="price" onChange={(e) => { setPrice(e.target.value) }} rows={1} placeholder="Цена" />
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

                <Input id="numbers" name="numbers" onChange={(e) => { setNumbers(e.target.value) }} rows={1} placeholder="Номер телефона" />
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
                <button onClick={addUser2} className='btn btn-primary'>
                  Опубликовать
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}
export default Upload1;