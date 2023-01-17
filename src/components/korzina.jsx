import Footer from './footer';
import Nav from './navbar';
import Post2 from './post2';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const Korzina =()=>{
    const user_id = localStorage.getItem('token');
    const [products,setProducts] = useState(null);
    const fetchProducts = async () => {
        const post = {
            user_id: user_id,
        };
        const data = await axios({
            method: 'get',
            params: post,
            url: 'http://api.com/birimdik/get_favorites'
        });
        if (data.data.status == 200) {
            setProducts(data.data.favorites);
            console.log('data', data)
        } else {
            console.log("Error fetch products!");
            console.log(data);
        }
      }
    useEffect(()=>{
        fetchProducts();
    },[])
    return(
<>
<Nav/>
<div class="container bg-light">
    <div class="row">
    <div class="col-md-12">
            <h1 class="kortxt2">Избранные</h1>
        </div>

   
        {products != null || products != undefined || products?.length > 0 ?
    <>
    {products.map((item)=>
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
<Footer/>
    </>
    );
    }
    
    
    export default Korzina;