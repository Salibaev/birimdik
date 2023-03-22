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

const Filterpodcategory = () => {
    const params = useParams();
    const [id,setId] = useState(params.id);
    const [product,setProduct] = useState(null);
    const [products,setProducts] = useState(null);
    const [products2,setProducts2] = useState(null);
    const [products_city,setProducts_city] = useState(null);

    const onChange = (value) => {
        console.log(`selected ${value}`);
        setCity(value);
      };
      const onChange2 = (value) => {
        console.log(`selected ${value}`);
        setParent_id(value);
      };
      const onChange3 = (value) => {
        console.log(`selected ${value}`);
        setModels(value);
      };

    const onChange4 = (value) => {
        console.log(`selected ${value}`);
        setId(value);
        
      };


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
    
    const [parent_id, setParent_id] = useState();
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
    const [products_models,setProducts_models] = useState(null);
    const fetchProducts_models= async () => {
        const post = {
            id: 42,
        };
        const data = await axios({
            method: 'get',
            params: post,
            url: 'http://api.com/birimdik/postcategory'
        });
        if (data.data.status == 200) {
            setProducts_models(data.data.postcategory);
            console.log('data', data)
        } else {
            console.log("Error fetch products!");
            console.log(data);
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
    const [models, setModels] = useState();
    const [city, setCity] = useState();
    const City = async () => {
        const post = {
            // id: id,
            id2:city != 'Все'  ? city : products_city.city,
            id3:id,
            id4:models != 'Все'  ? models : products.models,
            id5:id,
        };
        console.log('params',post);
        const data = await axios({
            method: 'get',
            params: post,
            url: 'http://api.com/birimdik/filter_city'
        });
        if (data.data.status == 200) {
            setProduct(data.data.post);
            console.log('data', data)
            window.location.href=""+ id;
            // fetchProduct();
        } else {
            console.log("Error fetch products!");
            console.log(data);
            // window.location.href=""+ id;
        }
            
        }
       
          
    

useEffect(() => {
    fetchProduct();
    fetchProducts();
    fetchProducts_models();
    fetchProducts_city();
    fetchProducts2();
}, [])

    return (
        <>
            <Nav />
    <div className="container card">
        <div className="row">
            {products != null || products != undefined || products?.length > 0 ?
                <>
                
                    <Button onClick={City}>Показать</Button>
                    {/* <div className="col-md-2 mt-3">
                            <Select onChange={onChange4} defaultValue='Автомобили' style={{width:'100%'}}>{products.map((products)=>
                                <Option value={products.id}>{products.name}</Option>
                                )
                            }
                              </Select> 
                        </div> */}
                        <div className="col-md-2 mt-3">
                            <Select onChange={onChange4} defaultValue='Автомобили' style={{width:'100%'}}>{products.map((products)=>
                                <Option value={products.id}>{products.name}</Option>
                                )
                            }
                              </Select> 
                        </div>
                </>
                :<>Loading</>
            }    
       
        <div className="col-md-2 mt-3">
        {products_city != null || products_city != undefined || products_city ?.length > 0 ?
              <><Select onChange={onChange} defaultValue='Город'   style={{width:'100%'}}>
                {products_city.map((products)=>
                
                
                  <Option defaultValue='Город' value={products.city != 'Все' ? products.city : 'Все'}>{products.city}</Option>

                )
                }
              </Select>
              </>
              :<>Loading</>
          }
        </div>
        <div className="col-md-2 mt-3">
        {products2 != null || products2 != undefined || products2 ?.length > 0 ?
              <><Select onChange={onChange2} defaultValue='Купить/Продать'  style={{width:'100%'}}>
                {products.map((products)=>
                  <Option value={products[0].name}>{products[0].name}</Option>
                )
                }
              </Select>
              </>
              :<>Loading</>
          }
        </div>
        <div className="col-md-2 mt-3">
        {products_models != null || products_models != undefined || products_models ?.length > 0 ?
              <><Select onChange={onChange3} defaultValue='Модели'  style={{width:'100%'}}>
                {products_models.map((products)=>
                
                
                  <Option value={products.name}>{products.name}</Option>

                )
                }
              </Select>
              </>
              :<>Loading</>
          }
        </div>


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
            <Footer />
        </>
    );
}
export default Filterpodcategory;