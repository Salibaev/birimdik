import Footer from "./footer";
import Nav from './navbar';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import React from 'react';
import Nedvij from "./nedvij";
import Post2 from "./post2";
import { Button, Select } from "antd";
import { Option } from "antd/lib/mentions";
import Input from "antd/lib/input/Input";
import { Cascader } from 'antd';



const Podcategory = () => {
    const params = useParams();
    const [id,setId] = useState(params.id);
    const [product,setProduct] = useState(null);
    const [products,setProducts] = useState(null);
    const [products1,setProducts1] = useState(null);
    const [products2,setProducts2] = useState(null);
    const [products3,setProducts3] = useState(null);
    const [products4,setProducts4] = useState(null);
    const [products5,setProducts5] = useState(null);
    const [products_city,setProducts_city] = useState(null);
    const [custom, setCustom] = useState(false);
    const [custom2, setCustom2] = useState(false);
    const [custom3, setCustom3] = useState(false);
    const [subCategories, setSubcategories] = useState();
    const [subCategories2, setSubcategories2] = useState();
    const [subCategories3, setSubcategories3] = useState();
    const [podcategories, setPodcategories] = useState();
    const [buy_sell,setBuy_sell] = useState(42 || 43);
    const [currency, setCurrency] = useState('Все');
    const [parent_id, setParent_id] = useState();
    const [parent_id2, setParent_id2] = useState();

    const onChange = (value) => {
        console.log(`selected ${value}`);
        setCity(value);
      };
      const onChange2 = (value) => {
        console.log(`selected ${value}`);
        setBuy_sell(value);
      };
      const onChange3 = (value) => {
        console.log(`selected ${value}`);
        setModels(value);
      };

    const onChange4 = (value) => {
        console.log(`selected ${value}`);
        setParent_id(value);
        fetchCategory(value);
        fetchCategory2(value);
        fetchProducts1(value);
      };
      const onChange5 = (value) => {
        console.log(`selected ${value}`);
        setParent_id2(value);
        fetchProducts5(value);
      };
      const [priceot, setPriceot] = useState(0);
      const [pricedo, setPricedo] = useState(1000000);
    //   const onChange5 = (value) => {
    //     console.log(`selected ${value}`);
    //     setPrice_ot(value);
    //   };
    //   const onChange6 = (value) => {
    //     console.log(`selected ${value}`);
    //     setPrice_do(value);
    //   };


    const fetchProducts= async () => {
        const post = {
            id: id,
        };
        const data = await axios({
            method: 'get',
            params: post,
            url: 'http://api.com/birimdik/postcategory'
        });
        if (data.data.status == 200) {
            setProducts(data.data.postcategory);
            console.log('data', data)
        } else {
            console.log("Error fetch products!");
            console.log(data);
        }
    }
    const fetchProducts1= async (parent_id) => {
        const post = {
            id: parent_id,
        };
        const data = await axios({
            method: 'get',
            params: post,
            url: 'http://api.com/birimdik/postcategory'
        });
        if (data.data.status == 200) {
            setProducts1(data.data.postcategory);
            console.log('data', data)
            fetchProducts4();
            
        } else {
            console.log("Error fetch products!");
            console.log(data);
        }
    }

    const fetchProducts2= async () => {
        // const post = {
        //     id: 18,
        // };
        const data = await axios({
            method: 'get',
            // params: post,
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

    const fetchProducts3= async () => {
    
        const data = await axios({
            method: 'get',
            url: 'http://api.com/birimdik/client1get'
        });
        if (data.data.status == 200) {
            setProducts3(data.data.client1get);
            console.log('data', data)
        } else {
            console.log("Error fetch products!");
            console.log(data);
        }
    }

    const fetchProducts4= async () => {
        const post = {
            id: 310,
        };
        const data = await axios({
            method: 'get',
            params: post,
            url: 'http://api.com/birimdik/postcategory'
        });
        if (data.data.status == 200) {
            setProducts4(data.data.postcategory);
            console.log('data', data)
        } else {
            console.log("Error fetch products!");
            console.log(data);
        }
    }

    const fetchProducts5= async (parent_id2) => {
        if(parent_id2 == 31){
        const post = {
            id: 31,
        };
        const data = await axios({
            method: 'get',
            params: post,
            url: 'http://api.com/birimdik/postcategory'
        });
        if (data.data.status == 200) {
            setProducts5(data.data.postcategory);
            console.log('data', data)
        } else {
            console.log("Error fetch products!");
            console.log(data);
        }
    }else{
    console.log(parent_id2);
    }
    }
    
   
    

    
    const fetchProducts_city = async () => {
        
        const data = await axios({
            method:'get',
            url:'http://api.com/birimdik/location'
        });
        if(data.data.status == 200){
            setProducts_city(data.data.location);
            console.log('data',data)
        }else{
            console.log("Error fetch products!");
        }
    }
    const fetchProduct= async () => {
        const post = {
            id: id,
        };
        const data = await axios({
            method: 'get',
            params: post,
            url: 'http://api.com/birimdik/post_ad'
        });
        if (data.data.status == 200) {
            setProduct(data.data.post);
            console.log('data', data)
        } else {
            console.log("Error fetch products!");
            console.log(data);
        }
    }
    const [models, setModels] = useState('Все');
    const [city, setCity] = useState('Все');

    useEffect(() => {
        fetchProduct();
        fetchProducts();
        fetchProducts_city();
        fetchProducts2();
        fetchProducts3();
    }, [])

    const City = async () => {
        if(parent_id != 'Все' && city == 'Все' && models == "Все"  && id == 2){
            const post = {
                id: parseInt(priceot),
                id1: parseInt (pricedo),
                id2:city,
                id3:id,
                id4:models,
                id5:parent_id,
                id6:buy_sell,
                id7:currency,

            };
            console.log('params',post);

            const data = await axios({
                method: 'get',
                params: post,
                url: 'http://api.com/birimdik/filter_podcat'
            });

            if (data.data.status == 200) {
                setProduct(data.data.post);
                console.log('data', data)
                // fetchProduct();
            }else {
                console.log("Error fetch products!");
                console.log(data);
                // window.location.href=""+ id;
            }
        }
        if(parent_id != 'Все' && city == 'Все' && models == "Все" && currency == 'Все' && id == 2){
            const post = {
                id: parseInt(priceot),
                id1: parseInt (pricedo),
                id2:city,
                id3:id,
                id4:models,
                id5:parent_id,
                id6:buy_sell,
                id7:currency,

            };
            console.log('params',post);

            const data = await axios({
                method: 'get',
                params: post,
                url: 'http://api.com/birimdik/filter_podcat2'
            });

            if (data.data.status == 200) {
                setProduct(data.data.post);
                console.log('data', data)
                // fetchProduct();
            }else {
                console.log("Error fetch products!");
                console.log(data);
                // window.location.href=""+ id;
            }
        }
        if(city == "Все" && models != "Все" && id == 2){

            const post = {
                id: parseInt(priceot),
                id1: parseInt (pricedo),
                id2:city,
                id3:id,
                id4:models,
                id5:parent_id,
                id6:buy_sell,
                id7:currency,
            };

            const data = await axios({
                method: 'get',
                params: post,
                url: 'http://api.com/birimdik/models_city'
            });

            if (data.data.status == 200) {
                setProduct(data.data.post);
                console.log('data', data)
            }else {
                console.log("Error fetch products!");
                console.log(data);
                // window.location.href=""+ id;
            }
        }
        if(city == "Все" && models != "Все" && id == 2 && currency != "Все"){

            const post = {
                id: parseInt(priceot),
                id1: parseInt (pricedo),
                id2:city,
                id3:id,
                id4:models,
                id5:parent_id,
                id6:buy_sell,
                id7:currency,
            };

            const data = await axios({
                method: 'get',
                params: post,
                url: 'http://api.com/birimdik/models_city_currency'
            });

            if (data.data.status == 200) {
                setProduct(data.data.post);
                console.log('data', data)
            }else {
                console.log("Error fetch products!");
                console.log(data);
                // window.location.href=""+ id;
            }
        }
        if(city != 'Все' && models == "Все" && id == 2 ){
            const post = {
                id: parseInt(priceot),
                id1: parseInt (pricedo),
                id2:city,
                id3:id,
                id4:models,
                id5:parent_id,
                id6:buy_sell,
                id7:currency,
            };

            const data = await axios({
                method: 'get',
                params: post,
                url: 'http://api.com/birimdik/city_models'
            });

            if (data.data.status == 200) {
                setProduct(data.data.post);
                console.log('data', data)
                // fetchProduct();
            }else {
                console.log("Error fetch products!");
                console.log(data);
                // window.location.href=""+ id;
            }
        }
        if(city != 'Все' && models == "Все" && currency == 'Все' && id == 2 ){
            const post = {
                id: parseInt(priceot),
                id1: parseInt (pricedo),
                id2:city,
                id3:id,
                id4:models,
                id5:parent_id,
                id6:buy_sell,
                id7:currency,
            };

            const data = await axios({
                method: 'get',
                params: post,
                url: 'http://api.com/birimdik/city_models2'
            });

            if (data.data.status == 200) {
                setProduct(data.data.post);
                console.log('data', data)
                // fetchProduct();
            }else {
                console.log("Error fetch products!");
                console.log(data);
                // window.location.href=""+ id;
            }
        }
        if(city != 'Все' && models != "Все" && currency != 'Все' && id == 2 ){
            const post = {
                id: parseInt(priceot),
                id1: parseInt (pricedo),
                id2:city,
                id3:id,
                id4:models,
                id5:parent_id,
                id6:buy_sell,
                id7:currency,
            };

            const data = await axios({
                method: 'get',
                params: post,
                url: 'http://api.com/birimdik/filter_city'
            });

            if (data.data.status == 200) {
                setProduct(data.data.post);
                console.log('data', data)
                // fetchProduct();
            }else {
                console.log("Error fetch products!");
                console.log(data);
                // window.location.href=""+ id;
            }
        }
        if(city != 'Все' && models != "Все" && currency == "Все" && id == 2 ){
            const post = {
                id: parseInt(priceot),
                id1: parseInt (pricedo),
                id2:city,
                id3:id,
                id4:models,
                id5:parent_id,
                id6:buy_sell,
                id7:currency,
            };

            const data = await axios({
                method: 'get',
                params: post,
                url: 'http://api.com/birimdik/filter_city2'
            });

            if (data.data.status == 200) {
                setProduct(data.data.post);
                console.log('data', data)
                // fetchProduct();
            }else {
                console.log("Error fetch products!");
                console.log(data);
                // window.location.href=""+ id;
            }
        }
        if(parent_id != 'Все' && currency != "Все"  && id == 1 ){
            const post = {
                id: parseInt(priceot),
                id1: parseInt (pricedo),
                id2:city,
                id3:id,
                id5:parent_id,
                id6:buy_sell,
                id7:currency,
            };

            const data = await axios({
                method: 'get',
                params: post,
                url: 'http://api.com/birimdik/filter_city_kv1'
            });

            if (data.data.status == 200) {
                setProduct(data.data.post);
                console.log('data', data)
                // fetchProduct();
            }else {
                console.log("Error fetch products!");
                console.log(data);
                // window.location.href=""+ id;
            }
        }
        if(parent_id != 'Все' && currency == "Все"  && id == 1 ){
            const post = {
                id: parseInt(priceot),
                id1: parseInt (pricedo),
                id2:city,
                id3:id,
                id5:parent_id,
                id6:buy_sell,
                id7:currency,
            };

            const data = await axios({
                method: 'get',
                params: post,
                url: 'http://api.com/birimdik/filter_city_kv'
            });

            if (data.data.status == 200) {
                setProduct(data.data.post);
                console.log('data', data)
                // fetchProduct();
            }else {
                console.log("Error fetch products!");
                console.log(data);
                // window.location.href=""+ id;
            }
        }
        if(parent_id != 'Все' && city != 'Все' && id == 1 ){
            const post = {
                id: parseInt(priceot),
                id1: parseInt (pricedo),
                id2:city,
                id3:id,
                id5:parent_id,
                id6:buy_sell,
                id7:currency,
            };

            const data = await axios({
                method: 'get',
                params: post,
                url: 'http://api.com/birimdik/filter_city_kv_2'
            });

            if (data.data.status == 200) {
                setProduct(data.data.post);
                console.log('data', data)
                // fetchProduct();
            }else {
                console.log("Error fetch products!");
                console.log(data);
                // window.location.href=""+ id;
            }
        }
        if(parent_id != 'Все' && city != 'Все' && currency == "Все" && id == 1 ){
            const post = {
                id: parseInt(priceot),
                id1: parseInt (pricedo),
                id2:city,
                id3:id,
                id5:parent_id,
                id6:buy_sell,
                id7:currency,
            };

            const data = await axios({
                method: 'get',
                params: post,
                url: 'http://api.com/birimdik/filter_city_kv_3'
            });

            if (data.data.status == 200) {
                setProduct(data.data.post);
                console.log('data', data)
                // fetchProduct();
            }else {
                console.log("Error fetch products!");
                console.log(data);
                // window.location.href=""+ id;
            }
        }
        
            
        }
        
        const fetchCategory = async (id) => {
            const params = {
              id:18
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
            if (id == 18){
            const params = {
              id:42
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
          }
          
    



    return (
        <>
            <body  className='body'>
            <div className="row">
            <div className="col-md-1">

            </div>
    <div className="col-md-10 bg-light">
        <div className="row">
        <Nav />
            {products != null || products != undefined || products?.length > 0 ?
                <>
                
                    <Button onClick={City}>Показать</Button>



                        <div className="col-md-2 mt-3">
                            <Select onChange={onChange4} defaultValue='Категория' style={{width:'100%'}}>{products.map((products)=>
                                <Option value={products.id}>{products.name}</Option>
                                )
                            }
                              </Select> 
                        </div>
                </>
                :<>Loading</>
            }    
             
        {products1 != null || products1 != undefined || products1 ?.length > 0 ?
              <>
              <div className="col-md-2 mt-3">
              <Select onChange={onChange5} defaultValue='Подкатегории'   style={{width:'100%'}}>
                {products1.map((products)=>
                  <Option defaultValue='Все' value={products.id}>{products.name}</Option>
                )
                }
              </Select>
              </div>
              </>
              :<></>
          }
        
       
        <div className="col-md-2 mt-3">
        {products_city != null || products_city != undefined || products_city ?.length > 0 ?
              <><Select onChange={onChange} defaultValue='Город'   style={{width:'100%'}}>
                {products_city.map((products)=>
                
                
                  <Option defaultValue='Все' value={products.city}>{products.city}</Option>

                )
                }
              </Select>
              </>
              :<>Loading</>
          }
        </div>
        <div className="col-md-1 mt-3">
        <Input
        
        onChange={(e) =>{setPriceot(e.target.value != "" ? e.target.value : "0")}}
        style={{
            width:'80px',
            marginLeft:'10px'
        }}
        placeholder='Цена от'
        >

            

         </Input>
        
        </div>
        <div className="col-md-1 mt-3">
        <Input
        
        onChange={(e) =>{setPricedo(e.target.value != "" ? e.target.value : "1000000")}}
        style={{
            width:'80px'
        }}
        placeholder='Цена до'
         >
        
         </Input>
        </div>
        <div className="col-md-2 mt-3">
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
                        value: 'Все',
                        label: 'Все',
                      },
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

        
        {custom ?
                    <>
                      <div className="col-md-2 mt-3">
                        <Select onChange={onChange2} defaultValue='Продаю' style={{ width: '100%' }}>
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
                      <div className="col-md-2 mt-3">
                        <Select onChange={onChange3} defaultValue='Модели' style={{ width: '100%' }}>
                          {subCategories2?.length > 0 ?
                            <>{
                              subCategories2.map((products) =>
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

{products4 != null && parent_id == 25 ?
              <>
              <div className="col-md-2 mt-3">
              <Select onChange={''} defaultValue='Количество комнат'   style={{width:'100%'}}>
                {products4.map((products)=>
                  <Option defaultValue='Все' value={products.name}>{products.name}</Option>
                )
                }
              </Select>
              </div>
              </>
              :<></>
          }

{products5 != null && parent_id2 == 31 ?
              <>
              <div className="col-md-2 mt-3">
              <Select onChange={''} defaultValue='Посуточная'   style={{width:'100%'}}>
                {products5.map((products)=>
                  <Option defaultValue='Все' value={products.id}>{products.name}</Option>
                )
                }
              </Select>
              </div>
              </>
              :<></>
          }


        <div className="row">
        {product != null || product != undefined || product?.length > 0 ?
    <>
    {product.map((item)=>
    <div class="col-6 col-md-3 mt-3">
        <Post2 product={item}/>
    </div>
    
    )
    }
    </>
    :<>Loading</>
}
</div>
        </div>
    </div>
    <div className="col-md-1">

            </div>
            </div>
            </body>
            <Footer />
        </>
    );
}
export default Podcategory;