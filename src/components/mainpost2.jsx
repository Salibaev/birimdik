import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Post2 from './post2';



const Mainpost2 =()=>{
    const [products,setProducts] = useState(null);
    const fetchProducts = async () => {
        const data = await axios({
            method:'get',
            url:'http://api.com/birimdik/client1'
        });
        if(data.data.status == 200){
            setProducts(data.data.posts);
            console.log('data',data)
        }else{
            console.log("Error fetch products!");
        }
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    
    return(
        <>
        

<div  className='container '>
<div class="row bgmainposts">
<div class="col-md-12 ">
    <h2 class="txt5 ">Хиты продажи</h2>
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
    </>
    );
    }
    
    
    export default Mainpost2;