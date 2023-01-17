import Footer from './footer';
import Nav from './navbar';
import Post2 from './post2';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import Search1 from './search1';


const Result1 =()=>{
    const params = useParams();
    const id = params.text;
    const [product, setProduct] = useState(null);
    const fetchProduct = async () => {
        const post = {
            id: id,
        };
        const data = await axios({
            method: 'get',
            params: post,
            url: 'http://api.com/birimdik/search'
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
    const [city, setCity] = useState();
    const City = async () => {
        const post = {
            id: id,
            id2:city,
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
        } else {
            console.log("Error fetch products!");
            console.log(data);
        }
            
        }
        const onChange = (value) => {
            console.log(`selected ${value}`);
            setCity(value);
          };
useEffect(() => {
    fetchProduct();
    fetchProducts();
}, [])

    return(
<>
<Nav/>
<div class="container bg-light">
    <div class="row">
    
        <div className='row'>
            <div style={{marginTop:'2%'}} className='col-md-12'>
                <Search1 />
            </div>
            <div className='col-md-12'>
            <h2 >Фильтры</h2>
            </div>
        <div className='col-md-2'>
               
                {products != null || products != undefined || products ?.length > 0 ?
              <><Select onChange={onChange} defaultValue='Город'  style={{width:'100%'}}>
                {products.map((products)=>
                
                
                  <Option value={products.city}>{products.city}</Option>

                )
                }
              </Select>
              </>
              :<>Loading</>
          }
            </div>
        <div className="col-md-2 mt-2">
          <Button onClick={City}>Показать</Button>
      </div>
            <div className='col-md-9'>

            </div>
            
        </div>

        <div class="col-md-12">
            <h1 class="kortxt2">Мы нашли...</h1> 
        </div>
   <div className='row'>
  
   </div>
       
        {product != null || product != undefined || product?.length > 0 ?
    <>
    {product.map((item)=>
    <div class="col-6 col-md-4 mt-3">
        <Post2 product={item}/>
    </div>
    
    )
    }
    </>
    :<>Loading</>
}


    </div>
</div>
<Footer/>
    </>
    );
    }
    
    
    export default Result1;