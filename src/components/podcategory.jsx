import Footer from "./footer";
import Nav from './navbar';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import React from 'react';
import Nedvij from "./nedvij";
import Post2 from "./post2";
import { Select } from "antd";
import { Option } from "antd/lib/mentions";

const Podcategory = () => {
    const params = useParams();
    const id = params.id;
    const [products,setProducts] = useState(null);
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
    const [products1,setProducts1] = useState(null);
    const fetchProducts1= async () => {
        const post = {
            id: id,
        };
        const data = await axios({
            method: 'get',
            params: post,
            url: 'http://api.com/birimdik/post_ad'
        });
        if (data.data.status == 200) {
            setProducts1(data.data.post);
            console.log('data', data)
        } else {
            console.log("Error fetch products!");
            console.log(data);
        }
    }

    
    

useEffect(() => {
    fetchProducts();
    fetchProducts1();
}, [])

    return (
        <>
            <Nav />
    <div className="container card">
        <div className="row">
            {products != null || products != undefined || products?.length > 0 ?
                <>
                    
                    
                        <div className="col-md-2 mt-3">
                            
                            
                            <Select defaultValue='Автомобили' style={{width:'100%'}}>{products.map((products)=>

                                <Option value={products.name}>{products.name}</Option>
                                )
                            }
                              </Select> 
                        </div>
                    
    
                </>
                :<>Loading</>
            }

            
        </div>
        <div className="row">
        {products1 != null || products1 != undefined || products1?.length > 0 ?
    <>
    {products1.map((item)=>
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
            <Footer />
        </>
    );
}
export default Podcategory;