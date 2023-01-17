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


const Filter_city =()=>{
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
    const local = localStorage.getItem('token2');
    const [city, setCity] = useState();
    const [text, setText] = useState();
    const Text = () => {
            window.location.href="/result/" +local + '/' + city;
            
        }

        const params2 = useParams();
        const id2 = params2.city;
        const [product2, setProduct2] = useState(null);
    const fetchProduct2 = async () => {
        const post2 = {
            id: id2,
            // id: id2,
        };
        const data = await axios({
            method: 'get',
            params: post2,
            url: 'http://api.com/birimdik/filter_city'
        });
        if (data.data.status == 200) {
            setProduct2(data.data.post);
            console.log('data', data)
        } else {
            console.log("Error fetch product2!");
            console.log(data);
        }
    }

useEffect(() => {
    fetchProducts();
    fetchProduct2();
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
              <><Select onChange={setCity} defaultValue='Город'  style={{width:'100%'}}>
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
          <Button onClick={Text}>Показать</Button>
      </div>
            <div className='col-md-9'>

            </div>
            
        </div>

        <div class="col-md-12">
            <h1 class="kortxt2">Мы нашли...</h1> 
        </div>
   <div className='row'>
   {product2 != null || product2 != undefined || product2?.length > 0 ?
    <>
    <h5>По городу </h5>
    {product2.map((item)=>
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
</div>
<Footer/>
    </>
    );
    }
    
    
    export default Filter_city;